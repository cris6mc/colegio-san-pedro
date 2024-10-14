"use client";
import Card from "@/components/Card";
import AddCard from '@/components/AddCard';
import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import according to your firebase configuration
import { collection, getDocs } from "firebase/firestore";
import { useUser } from "@/context/UserContext";


export default function PageLapBook() {
  const [lapbooks, setLapbooks] = useState([]);
  const { user, loading } = useUser(); // Acceder al usuario desde el contexto
  const [showAdd, setShowAdd] = useState(false);

  const handleEdit = () => {
    setShowAdd(true);
  };

  const handleCloseEdit = () => {
    setShowAdd(false);
  };

  useEffect(() => {
    const fetchLapbooks = async () => {
      const querySnapshot = await getDocs(collection(db, "lapbooks"));
      if (querySnapshot.empty) {
        setLapbooks([]);
      } else {
        const lapbooksList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLapbooks(lapbooksList);
      }
      
    };

    fetchLapbooks();
  }, []);


  return (
    <div>
      <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
        <h1 className="text-5xl font-bold text-center text-white">LAP BOOK</h1>
      </div>
      <h2 className="text-center p-6">
        Mision: Concientizacion del medio ambiente
      </h2>
      {user && user.rol === 'admin' && (
          <button
            className="bg-blue-600 text-white font-bold px-4 py-2 ml-4 rounded-full mr-4"
            onClick={handleEdit}
          >
            Añadir Nueva Cartografia
          </button>
        )}
      {showAdd && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg">
            <div className="flex flex-row mb-3 w-full justify-between items-center">
              <h2 className="text-xl font-bold justify-center">Añadir Lap-Book</h2>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                onClick={handleCloseEdit}
              >
                X
              </button>
            </div>
            <AddCard Coleccion={"lapbooks"}></AddCard>
          </div>
        </div>
      )}
      {lapbooks.length > 0 && (
        <div className="grid grid-cols-4 gap-4 p-8">
      {lapbooks.map(lapbook => (
          <div key={lapbook.id} className=" bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
            <Card
              Description={lapbook.description}
              Title={lapbook.title}
              ImageSRC={lapbook.imageURL}
              isButton={true}
            />
          </div>
        ))}
        
      </div>
      )}
      
      <hr className="border-t-2 border-l-gray-500 my-4" />
      <div className="h-16"></div>
    </div>
  );
}