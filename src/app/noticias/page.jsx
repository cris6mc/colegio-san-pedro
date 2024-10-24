"use client";

import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import according to your firebase configuration
import Image from 'next/image';
import { collection, getDocs } from "firebase/firestore";
import { useUser } from "@/context/UserContext";
import SliderP from "@/components/SliderFeria";
import GradientLabel from "@/components/label";
import CardCartografia from "@/components/card-cartografia";


export default function PageFeria() {
  const [cartografias, setCartografias] = useState([]);
  const { user, loading } = useUser(); // Acceder al usuario desde el contexto
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  useEffect(() => {
    const fetchCartografias = async () => {
      const querySnapshot = await getDocs(collection(db, "cartografias"));
      const cartografiaList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setCartografias(cartografiaList);
    };

    fetchCartografias();
  }, []);


  return (
    <div>
      <GradientLabel
        title="Noticias"
        width="100vw"
        textAlign={"center"}
        justifyContent={"center"}
        color={"white"} 
        />
      <div className="flex flex-col items-center gap-32">
        <div className="w-full" >
          <SliderP
            title="Noticias"
            button1Text="Noticias y Actualizaciones"
            button2Text="Logros"
          />
        </div>        
        <div className="flex flex-col justify-center w-[80vw]">
          <GradientLabel 
          title="Noticias y Actualizaciones"
          borderRadius="0rem"
          />
          <GradientLabel 
          title="Proximos Eventos"
          width={"60vw"}
          borderRadius={"1rem"}          
          />
          <div className="grid grid-cols-4 gap-12 mt-12">
            <div className="flex justify-center items-center">
              <CardCartografia
                ImageSRC={"/images/lapbook1.png"}
                Title={"Festival de Lectura"}
                Author={"Juan Pérez"}
                Grade={"5to Primaria"}
                Description={"Este lapbook explica sobre reciclaje y su importancia."}
                showAuthor={false}
                showGrade={false}
              />
            </div>
            <div className="flex justify-center items-center">
              <CardCartografia
                ImageSRC={"/images/lapbook1.png"}
                Title={"Festival de Lectura"}
                Author={"Juan Pérez"}
                Grade={"5to Primaria"}
                Description={"Este lapbook explica sobre reciclaje y su importancia."}
                showAuthor={false}
                showGrade={false}
              />
            </div>
            <div className="flex justify-center items-center">
              <CardCartografia
                ImageSRC={"/images/lapbook1.png"}
                Title={"Dia del Libro"}
                Author={"Juan Pérez"}
                Grade={"5to Primaria"}
                Description={"Este lapbook explica sobre reciclaje y su importancia."}
                showAuthor={false}
                showGrade={false}
              />
            </div>
            <div className="flex justify-center items-center">
              <CardCartografia
                ImageSRC={"/images/lapbook1.png"}
                Title={"Concursos de Lectura"}
                Author={"Juan Pérez"}
                Grade={"5to Primaria"}
                Description={"Este lapbook explica sobre reciclaje y su importancia."}
                showAuthor={false}
                showGrade={false}
              />
            </div>


          </div>
        </div>
        <div className="flex flex-col justify-center w-[80vw]">
          <GradientLabel 
          title="Logros"
          borderRadius="0rem"
           />
          <div className="grid grid-cols-4 gap-12 mt-12">
            <div className="flex justify-center items-center">
              <CardCartografia
                ImageSRC={"/images/lapbook1.png"}
                Title={"Festival de Lectura"}
                Author={"Juan Pérez"}
                Grade={"5to Primaria"}
                Description={"Este lapbook explica sobre reciclaje y su importancia."}
                showAuthor={false}
                showGrade={false}
              />
            </div>
            <div className="flex justify-center items-center">
              <CardCartografia
                ImageSRC={"/images/lapbook1.png"}
                Title={"Festival de Lectura"}
                Author={"Juan Pérez"}
                Grade={"5to Primaria"}
                Description={"Este lapbook explica sobre reciclaje y su importancia."}
                showAuthor={false}
                showGrade={false}
              />
            </div>
            <div className="flex justify-center items-center">
              <CardCartografia
                ImageSRC={"/images/lapbook1.png"}
                Title={"Dia del Libro"}
                Author={"Juan Pérez"}
                Grade={"5to Primaria"}
                Description={"Este lapbook explica sobre reciclaje y su importancia."}
                showAuthor={false}
                showGrade={false}
              />
            </div>
            <div className="flex justify-center items-center">
              <CardCartografia
                ImageSRC={"/images/lapbook1.png"}
                Title={"Concursos de Lectura"}
                Author={"Juan Pérez"}
                Grade={"5to Primaria"}
                Description={"Este lapbook explica sobre reciclaje y su importancia."}
                showAuthor={false}
                showGrade={false}
              />
            </div>


          </div>
        </div>
      </div>
    </div >
  );
}