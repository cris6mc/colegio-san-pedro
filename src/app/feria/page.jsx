"use client";
import Card from "@/components/Card";
import AddCard from '@/components/AddCard';
import Image from 'next/image';
import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import according to your firebase configuration
import { collection, getDocs } from "firebase/firestore";
import { useUser } from "@/context/UserContext";



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
      <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
        <h1 className="text-5xl font-bold text-center text-white">FERIA SABATINA</h1>
      </div>
      <div className='flex flex-row m-10 justify-center'>
        <div className='justify-center items-center'>
          <h1 className='text-2xl m-5 max-w-2xl text-justify'>
            <p className='font-semibold text-center text-4xl'>¡Feria Sabatina!</p>Bienvenido a la pagina de la escuela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi reiciendis exercitationem dolor voluptatem dolorem ipsum! Atque dolorum quia cumque exercitationem error ullam, at distinctio impedit harum unde ipsum cum? <br />
          </h1>
          <div className="flex flex-row ">
            <button className='bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded'>
              <div className='flex flex-row items-center'>
                <span className='mx-2'>Cartografia Social</span>
              </div>
            </button>
            <button className='bg-gray-500 hover:bg-gray-400 text-white text-xs py-1 px-2 rounded'>
              <div className='flex flex-row items-center'>
                <span className='mx-2'>Leer más</span>
              </div>
            </button>
          </div>

        </div>
        <Card
          ImageSRC={"/images/Director.png"}
          Title={"Director"}
          Description={"Mg. Kiko G. Astete Lopez"}
        />
      </div>
      <h2 className="text-5xl font-bold text-center text-black">Feria Sabatica de Chupaca</h2>
      <div className='flex flex-row m-10 justify-center mb-20'>
        <div className='justify-center items-center'>
          <Image
            className='rounded-2xl'
            alt="Colegio"
            src="/images/Colegio3.jpg"
            width={250}
            height={120}
          />
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloremque accusamus ratione? Laborum tempore rem, voluptatem ea veniam aspernatur voluptate ab minus! Totam eveniet a asperiores maxime omnis dolores distinctio!
      </p>

      <h2 className="text-5xl font-bold text-center text-black">Cartografia Social</h2>
        {user && user.rol === 'admin' && (
          <button
            className="bg-blue-600 text-white font-bold px-4 py-2 ml-4 rounded-full mr-4"
            onClick={handleEdit}
          >
            Añadir Nueva Cartografia
          </button>
        )}
      {showEdit && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center bg-white p-6 rounded-lg">
            <div className="flex flex-row mb-3 w-full justify-between items-center">
              <h2 className="text-xl font-bold justify-center">Añadir Cartografia</h2>
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                onClick={handleCloseEdit}
              >
                X
              </button>
            </div>
            <AddCard Coleccion={"cartografias"}></AddCard>
          </div>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4 p-8">
        {cartografias.map(cartografia => (
          <div key={cartografia.id} className=" bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
            <Card
              Description={cartografia.description}
              Title={cartografia.title}
              ImageSRC={cartografia.imageURL}
              isButton={true}
            />
          </div>
        ))}
      </div>
      <hr className="border-t-2 border-l-gray-500 my-4" />
      <div className="h-16"></div>
    </div>
  );
}