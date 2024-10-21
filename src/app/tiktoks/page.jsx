"use client";

import CardTiktok from "@/components/card-tiktok";
import { FaFilter } from "react-icons/fa";

export default function Tikchikilab() {
  return (
    <div>
      <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
        <h1 className="text-5xl font-bold text-center text-white">TIKTOKEANDO CON EL MEDIO AMBIENTE</h1>
      </div>
      <h2 className="text-center p-6">
        Misión: Concientización del medio ambiente
      </h2>
      <div className="flex flex-row justify-center">
        <button className="m-2 bg-green-500 text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2">
          <FaFilter />
          <span>Filtros</span>
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          Todos
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          Dentro del aula
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          En la I.E.
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          Docentes
        </button>
        <button className="m-2 bg-blue-500 text-white py-2 px-4 rounded-full space-x-2 hover:bg-red-400">
          Comunidad Local
        </button>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-4 p-8">

        <CardTiktok
          Hashtags={"#Chupaca #ForYou #3roPrimaria"}
          Title={"Dentro del Aula"}
          ImageSRC={"/images/LOGO.png"}
        />

        
          <CardTiktok
            Hashtags={"#Chupaca #ForYou #Docentes"}
            Title={"Docentes Activos"}
            ImageSRC={"/images/LOGO.png"}
          />
        
          <CardTiktok
            Hashtags={"#Comunidad #MedioAmbiente"}
            Title={"Comunidad Activa"}
            ImageSRC={"/images/LOGO.png"}
          />
        
          <CardTiktok
            Hashtags={"#IE #Responsabilidad"}
            Title={"En la I.E."}
            ImageSRC={"/images/LOGO.png"}
          />
        
          <CardTiktok
            Hashtags={"#ForYou #Ambiente"}
            Title={"Actividades Ecológicas"}
            ImageSRC={"/images/LOGO.png"}
          />
        
          <CardTiktok
            Hashtags={"#Chupaca #ForYou"}
            Title={"Talleres Ambientales"}
            ImageSRC={"/images/LOGO.png"}
          />
        
          <CardTiktok
            Hashtags={"#MedioAmbiente"}
            Title={"Reciclaje en Acción"}
            ImageSRC={"/images/LOGO.png"}
          />
      </div>
    </div>
  );
}