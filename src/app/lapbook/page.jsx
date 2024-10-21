"use client";
import Card from "@/components/Card";
import AddCard from '@/components/AddCard';
import CardLapbook from '@/components/card-lapbook'; // Asegúrate de importar el componente CardLapbook
import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Ajusta la importación según tu configuración de Firebase
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
        const lapbooksList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
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
        Misión: Concientización del medio ambiente
      </h2>
      {user && user.rol === 'admin' && (
        <button
          className="bg-blue-600 text-white font-bold px-4 py-2 ml-4 rounded-full mr-4"
          onClick={handleEdit}
        >
          Añadir Nueva Cartografía
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
          {lapbooks.map((lapbook) => (
            <div key={lapbook.id} className="bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
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

      {/* Aquí agregamos las 8 CardLapbook */}
      <div className="grid grid-cols-4 gap-4 p-8">
        <div className="flex justify-center items-center">
          <CardLapbook
            Description={"Este lapbook explica sobre reciclaje y su importancia."}
            Title={"Lapbook 1"}
            Author={"Juan Pérez"}
            Grade={"5to Primaria"}
            ImageSRC={"/images/lapbook1.png"}
          />
        </div>
        <div className="flex justify-center items-center">
          <CardLapbook
            Description={"Este lapbook trata sobre la contaminación ambiental."}
            Title={"Lapbook 2"}
            Author={"María López"}
            Grade={"6to Primaria"}
            ImageSRC={"/images/lapbook2.png"}
          />
        </div>
        <div className="flex justify-center items-center">
          <CardLapbook
            Description={"En este lapbook se aborda la deforestación y sus consecuencias."}
            Title={"Lapbook 3"}
            Author={"Carlos Ramos"}
            Grade={"3ro Secundaria"}
            ImageSRC={"/images/lapbook3.png"}
          />
        </div>
        <div className="flex justify-center items-center">
          <CardLapbook
            Description={"Un lapbook sobre la protección de los recursos hídricos."}
            Title={"Lapbook 4"}
            Author={"Ana Díaz"}
            Grade={"2do Secundaria"}
            ImageSRC={"/images/lapbook4.png"}
          />
        </div>
        <div className="flex justify-center items-center">
          <CardLapbook
            Description={"Este lapbook trata sobre la biodiversidad y su conservación."}
            Title={"Lapbook 5"}
            Author={"Luis Castillo"}
            Grade={"4to Primaria"}
            ImageSRC={"/images/lapbook5.png"}
          />
        </div>
        <div className="flex justify-center items-center">
          <CardLapbook
            Description={"Un lapbook que explica los efectos del cambio climático."}
            Title={"Lapbook 6"}
            Author={"Sofía Gómez"}
            Grade={"1ro Secundaria"}
            ImageSRC={"/images/lapbook6.png"}
          />
        </div>
        <div className="flex justify-center items-center">
          <CardLapbook
            Description={"Este lapbook presenta soluciones para la energía renovable."}
            Title={"Lapbook 7"}
            Author={"Ricardo Méndez"}
            Grade={"5to Secundaria"}
            ImageSRC={"/images/lapbook7.png"}
          />
        </div>
        <div className="flex justify-center items-center">
          <CardLapbook
            Description={"Lapbook sobre la importancia del reciclaje en casa."}
            Title={"Lapbook 8"}
            Author={"Julia Ramos"}
            Grade={"2do Primaria"}
            ImageSRC={"/images/lapbook8.png"}
          />
        </div>
      </div>

      <hr className="border-t-2 border-l-gray-500 my-4" />
      <div className="h-16"></div>
    </div>
  );
}
