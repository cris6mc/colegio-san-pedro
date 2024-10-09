// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth, db } from "@/lib/firebase";
// import { doc, getDoc } from "firebase/firestore";

// export default function Dashboard() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         const uid = firebaseUser.uid;
//         console.log(`UID del usuario: ${uid}`);
//         try {
//           const userDoc = await getDoc(doc(db, 'usuarios', uid));
//           if (userDoc.exists()) {
//             const userData = userDoc.data();
//             setUser({ uid, ...userData });
//             console.log(`Datos del usuario: ${JSON.stringify(userData)}`);
//           } else {
//             console.error('No se encontró el usuario en Firestore');
//             setUser(null);
//           }
//         } catch (error) {
//           console.error('Error al obtener el documento del usuario:', error);
//           setUser(null);
//         }
//       } else {
//         router.push("/login");
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, [router]);

//   if (loading) return <p>Cargando...</p>;

//   return (
//     <div className="h-screen flex flex-col justify-center items-center">
//       <h1 className="text-3xl font-semibold">Bienvenido al Dashboard</h1>
//       {user && (
//         <p className="mt-4 text-lg">
//           Hola, {user.nombre} <br /> {user.email} <br /> {user.rol}
//         </p>
//       )}
//     </div>
//   );
// }


"use client";
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold">Bienvenido al Dashboard</h1>
      {user && (
        <p className="mt-4 text-lg">
          Hola, {user.nombre} <br /> {user.email} <br /> {user.rol}
        </p>
      )}
    </div>
  );
}