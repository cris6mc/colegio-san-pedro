"use client";
import React from "react";
import Activities from "@/components/Activities";
import SliderP from "@/components/SliderFeria";
import GradientLabel from "@/components/label";

function Noticias() {
  return (
    <div className="flex flex-col gap-16">
      <SliderP
        title="¡Descubre las memorias Yauyinas!"
        button1Text="Noticias y Actualizaciones"
        button2Text="Logros"
      />
      <div className="w-full flex flex-col items-center">
        <div className="mb-8">
          <GradientLabel
            width={"80vw"}
            title={"Noticias y Actualizaciones"}
            justifyContent={"start"}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-[80vw] flex flex-col justify-start">
            <GradientLabel
              width={"70vw"}
              title={"Celebraciones"}
              justifyContent={"start"}
            />
          </div>
          <Activities coleccion={"Celebraciones"} />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-[80vw] flex flex-col justify-start">
            <GradientLabel
              width={"70vw"}
              title={"Anuncios"}
              justifyContent={"start"}
            />
          </div>
          <Activities coleccion={"Anuncios"} />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-[80vw] flex flex-col justify-start">
            <GradientLabel
              width={"70vw"}
              title={"Proximos Evento"}
              justifyContent={"start"}
            />
          </div>
          <Activities coleccion={"Eventos"} />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-[80vw] flex flex-col justify-start">
            <GradientLabel
              width={"70vw"}
              title={"Nuevos Articulos"}
              justifyContent={"start"}
            />
          </div>
          <Activities coleccion={"Articulos"} />
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="mb-8">
          <GradientLabel
            width={"80vw"}
            title={"Logros"}
            justifyContent={"start"}
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-[80vw] flex flex-col justify-start">
            <GradientLabel
              width={"70vw"}
              title={"Trofeos"}
              justifyContent={"start"}
            />
          </div>
          <Activities coleccion={"Trofeos"} />
        </div>
        <div className="flex flex-col gap-8">
          <div className="w-[80vw] flex flex-col justify-start">
            <GradientLabel
              width={"70vw"}
              title={"Gallardetes"}
              justifyContent={"start"}
            />
          </div>
          <Activities coleccion={"Gallardetes"} />
        </div>
      </div>
    </div>
  );
}

export default Noticias;
