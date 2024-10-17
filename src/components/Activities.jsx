"use client";
import React from 'react';
import Card from './Card';
import { useUser } from "@/context/UserContext";
import { useState, useEffect } from 'react';
import { db } from '@/lib/firebase'; // Asegúrate de tener configurado Firebase y exportado db
import { collection, getDocs } from 'firebase/firestore'; // Importar funciones desde firebase/firestore
import AddCard from './AddCard';


function Activities() {
  const { user, loading } = useUser(); // Acceder al usuario desde el contexto
  const [activities, setActivities] = useState([]);
  const [showEdit, setShowEdit] = useState(false);


  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activitiesCollection = await getDocs(collection(db, 'actividades'));
        const activitiesData = activitiesCollection.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setActivities(activitiesData);
      } catch (error) {
        console.error("Error fetching activities: ", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <>
      <div className='justify-center flex'>
        <div>
          <div className="flex flex-row items-center justify-center">
            <h1 className='text-center font-bold text-2xl'>Actividades Institucionales</h1>
            {user && user.rol === 'admin' && (
              <button
                className="bg-blue-600 text-white font-bold px-4 py-2 ml-4 rounded-full mr-4"
                onClick={handleEdit}
              >
                Añadir Actividad
              </button>
            )}
          </div>

          <div>
            <div className='flex flex-row gap-[3rem]'>
              {activities.map(activity => (
                <div className='flex flex-col'>
                  {user && user.rol === 'admin' && (
                    <botton className='bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold'>
                    X
                  </botton>
                  )}
                  <Card
                    key={activity.id}
                    ImageSRC={activity.imageURL || "/images/LOGO.png"} // Usa la URL de la imagen desde Firestore o una por defecto
                    Title={activity.title || "Titulo de la actividad"} // Usa el título desde Firestore o uno por defecto
                    Description={activity.description || "Descripcion de la actividad"} // Usa la descripción desde Firestore o una por defecto
                    isButton={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showEdit && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg">
            <div className="flex flex-row mb-3 w-full justify-between items-center">
              <h2 className="text-xl font-bold justify-center">Añadir Actividades</h2>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                onClick={handleCloseEdit}
              >
                X
              </button>
            </div>
            <AddCard Coleccion={"actividades"}></AddCard>
          </div>
        </div>
      )}
    </>

  )
}

export default Activities