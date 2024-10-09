"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const uid = firebaseUser.uid;
        console.log(`UID del usuario: ${uid}`);
        try {
          const userDoc = await getDoc(doc(db, 'usuarios', uid));
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({ uid, ...userData });
            console.log(`Info del usuario: ${JSON.stringify(userData)}`);
          } else {
            console.error('No se encontró el usuario en Firestore');
            setUser(null);
          }
        } catch (error) {
          console.error('Error al obtener el documento del usuario:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("Usuario desautenticado");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);