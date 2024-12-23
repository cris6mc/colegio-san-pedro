"use client";
import React from "react";
import Card from "./Card";
import { useUser } from "@/context/UserContext";
import { useState, useEffect } from "react";
import { db, storage } from "@/lib/firebase"; // Asegúrate de tener configurado Firebase y exportado db
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"; // Importar funciones desde firebase/firestore
import AddCard from "./AddCard";

function Activities({ coleccion }) {
  const { user, loading } = useUser(); // Acceder al usuario desde el contexto
  const [activities, setActivities] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("Eliminado correctamente");

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  const handleDeleteCard = async (cardId) => {
    setIsDeleting(true);
    setDeleteMessage("");
    try {
      await deleteDoc(doc(db, coleccion, cardId));
      setActivities(activities.filter((activity) => activity.id !== cardId));
      setDeleteMessage("Card deleted successfully!");
    } catch (error) {
      console.error("Error deleting user: ", error);
      setDeleteMessage("Error deleting card.");
    } finally {
      setIsDeleting(false);
      alert(deleteMessage);
    }
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activitiesCollection = await getDocs(collection(db, coleccion));
        const activitiesData = activitiesCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setActivities(activitiesData);
      } catch (error) {
        console.error("Error fetching activities: ", error);
      }
    };

    fetchActivities();
  }, [coleccion]);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col gap-8 w-full max-w-7xl px-4">
          <div className="flex flex-row items-center justify-center">
            <h1 className="text-center font-bold text-2xl">{coleccion}</h1>
            {user && user.rol === "admin" && (
              <button
                className="bg-gray-500 text-white font-bold px-4 py-1 ml-4 rounded-full mr-4 select-none"
                onClick={handleEdit}
              >
                Añadir {coleccion}
              </button>
            )}
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {activities.map((activity) => (
                <div key={activity.id} className="flex flex-col">
                  {user && user.rol === "admin" && (
                    <button
                      className="flex justify-center w-[300px] bg-red-600 text-white  px-3 py-1 rounded-lg text-xl font-bold hover:cursor-pointer my-4"
                      onClick={() => handleDeleteCard(activity.id)} // Eliminar docuemnto
                    >
                      Borrar Tarjeta
                    </button>
                  )}
                  <Card
                    ImageSRC={activity.imageURL || "/images/LOGO.png"} // Usa la URL de la imagen desde Firestore o una por defecto
                    Title={activity.title || "Titulo de la actividad"} // Usa el título desde Firestore o uno por defecto
                    Description={
                      activity.description || "Descripcion de la actividad"
                    } // Usa la descripción desde Firestore o una por defecto
                    Link={activity.link || "Link de la actividad"} // Usa el link desde Firestore o uno por defecto
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
          <div className="flex flex-col items-center bg-white p-6 rounded-lg w-[95vw] sm:max-w-[25vw]">
            <div className="flex flex-row mb-3 w-full justify-between items-center">
              <h2 className="text-xl font-bold justify-center">
                Añadir {coleccion}
              </h2>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                onClick={handleCloseEdit}
              >
                X
              </button>
            </div>
            <AddCard Coleccion={coleccion}></AddCard>
          </div>
        </div>
      )}
    </>
  );
}

export default Activities;
