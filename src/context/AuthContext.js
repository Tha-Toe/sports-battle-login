import { useContext, createContext, useEffect, useState } from "react";
import {
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  OAuthProvider,
  getIdToken,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { auth } from "../firebase";
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const [loginByGoogle, setLoginByGoogle] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toLogout, setToLogout] = useState(true);

  useEffect(() => {
    const getUserFromFirebase = onAuthStateChanged(
      auth,
      async (currentUser) => {
        if (currentUser) {
          setUser(currentUser);
          setLoading(false);
          console.log(currentUser);
          const token = await getIdToken(currentUser);
          setIdToken(token);
          setAccessToken(currentUser.accessToken);
        }
      }
    );
    return () => {
      getUserFromFirebase();
    };
  }, []);

  const appleSignIns = async () => {
    setToLogout(false);
    setLoginByGoogle(false);
    setLoading(true);
    const appleProvider = new OAuthProvider("apple.com");
    await signInWithPopup(auth, appleProvider);
  };

  const logOut = () => {
    setToLogout(true);
    if (auth) {
      signOut(auth);
    }
    setIdToken(null);
    setAccessToken(null);
    setLoginByGoogle(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        logOut,
        user,
        setUser,
        appleSignIns,
        idToken,
        setIdToken,
        loginByGoogle,
        accessToken,
        setAccessToken,
        setLoginByGoogle,
        loading,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
