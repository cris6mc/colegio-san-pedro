"use client";
import React from 'react'
import Card from './Card'
import { useUser } from "@/context/UserContext";
import { FaEdit } from 'react-icons/fa';

function Activities() {
  const { user, loading } = useUser(); // Acceder al usuario desde el contexto
  return (
    <div className='justify-center flex'>
      <div className="flex flex-col gap-16">
        <div className="flex flex-row items-center justify-center">
          <h1 className='text-center font-bold text-2xl'>Actividades Institucionales</h1>
          {user && user.rol === 'admin' && (
            <button
              className="bg-blue-600 text-white font-bold px-4 py-2 ml-4 rounded-full mr-4"
            >
              <FaEdit />
            </button>
          )}
        </div>

        <div className='flex flex-row gap-[6rem]'>
          <Card
            ImageSRC={"/images/LOGO.png"}
            Title={"Tik-Chiki-Lab"}
            Description={"Descripción de la actividad."}
            isButton={true}
          />
          <Card
            ImageSRC={"/images/LOGO.png"}
            Title={"Feria Sabatina"}
            Description={"Descripción de la actividad."}
            isButton={true}
          />
          <Card
            ImageSRC={"/images/LOGO.png"}
            Title={"ActiYauyo"}
            Description={"Descripción de la actividad."}
            isButton={true}
          />
        </div>
      </div>

    </div>
  )
}

export default Activities