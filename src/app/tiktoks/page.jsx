"use client";

import CardTiktok from "@/components/card-tiktok";
import { FaFilter } from "react-icons/fa";

export default function Tikchikilab() {
  return (
    <div className="flex flex-col items-center">
      <div className='py-8 mx-10 h-18 items-center w-[80vw]  bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
        <h1 className="text-5xl font-bold text-center text-white">TIKTOKEANDO CON EL AMBIENTE</h1>
      </div>
      <h2 className="text-center p-6">
        Misión: Concientización del medio ambiente
      </h2>
      <div className="w-[80vw] flex justify-center">
        <div className="grid w-full grid-cols-4 grid-rows-2 gap-4 p-8">
          <div className="flex justify-center items-center">
            <CardTiktok
              Hashtags={"#Chupaca #ForYou #3roPrimaria"}
              Title={"Dentro del Aula"}
              ImageSRC={"/images/LOGO.png"}
            />
          </div>
          <div className="flex justify-center items-center">
            <CardTiktok
              Hashtags={"#Chupaca #ForYou #3roPrimaria"}
              Title={"Dentro del Aula"}
              ImageSRC={"/images/LOGO.png"}
            />
          </div>
          <div className="flex justify-center items-center">
            <CardTiktok
              Hashtags={"#Chupaca #ForYou #3roPrimaria"}
              Title={"Dentro del Aula"}
              ImageSRC={"/images/LOGO.png"}
            />
          </div>
          <div className="flex justify-center items-center">
            <CardTiktok
              Hashtags={"#Chupaca #ForYou #3roPrimaria"}
              Title={"Dentro del Aula"}
              ImageSRC={"/images/LOGO.png"}
            />
          </div>
          <div className="flex justify-center items-center">
            <CardTiktok
              Hashtags={"#Chupaca #ForYou #3roPrimaria"}
              Title={"Dentro del Aula"}
              ImageSRC={"/images/LOGO.png"}
            />
          </div>
          <div className="flex justify-center items-center">
            <CardTiktok
              Hashtags={"#Chupaca #ForYou #3roPrimaria"}
              Title={"Dentro del Aula"}
              ImageSRC={"/images/LOGO.png"}
            />
          </div>
          <div className="flex justify-center items-center">
            <CardTiktok
              Hashtags={"#Chupaca #ForYou #3roPrimaria"}
              Title={"Dentro del Aula"}
              ImageSRC={"/images/LOGO.png"}
            />
          </div>
          <div className="flex justify-center items-center">
            <CardTiktok
              Hashtags={"#Chupaca #ForYou #3roPrimaria"}
              Title={"Dentro del Aula"}
              ImageSRC={"/images/LOGO.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}