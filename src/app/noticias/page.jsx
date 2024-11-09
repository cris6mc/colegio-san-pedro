"use client";
import React, { useRef } from "react";
import Activities from "@/components/Activities";
import SliderP from "@/components/SliderFeria";
import GradientLabel from "@/components/label";
import { scrollTo } from "../utils/scroll";

function Noticias() {
  const gradientLabelNews = useRef(null);
  const gradientLabelLogros = useRef(null);

  return (
    <div className="flex flex-col gap-16">
      <SliderP
        title="¡Descubre las memorias Yauyinas !"
        button1Text="Noticias y Actualizaciones"
        button2Text="Logros"
        onButton1Click={() => scrollTo(gradientLabelNews)}
        onButton2Click={() => scrollTo(gradientLabelLogros)}
      />
      <div className="w-full flex flex-col items-center">
        <div className="mb-8" ref={gradientLabelNews}>
          <GradientLabel
            width={"80vw"}
            title={"Noticias y Actualizaciones"}
            justifyContent={"start"}
          />
        </div>

        <div className="flex flex-col gap-8 mb-16">
          <div className="w-[80vw] flex flex-col justify-start gap-12">
            <GradientLabel
              width={"70vw"}
              title={"Celebraciones"}
              justifyContent={"start"}
            />
            <Activities coleccion={"Celebraciones"} />
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-16">
          <div className="w-[80vw] flex flex-col justify-start gap-12">
            <GradientLabel
              width={"70vw"}
              title={"Anuncios"}
              justifyContent={"start"}
            />
            <Activities coleccion={"Anuncios"} />
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-16">
          <div className="w-[80vw] flex flex-col justify-start gap-12">
            <GradientLabel
              width={"70vw"}
              title={"Proximos Evento"}
              justifyContent={"start"}
            />
            <Activities coleccion={"Eventos"} />
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-16">
          <div className="w-[80vw] flex flex-col justify-start gap-12">
            <GradientLabel
              width={"70vw"}
              title={"Nuevos Articulos"}
              justifyContent={"start"}
            />
            <Activities coleccion={"Articulos"} />
          </div>
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
        <div className="flex flex-col gap-8 mb-16">
          <div
            className="w-[80vw] flex flex-col justify-start gap-12"
            ref={gradientLabelLogros}
          >
            <GradientLabel
              width={"70vw"}
              title={"Trofeos"}
              justifyContent={"start"}
            />
            <Activities coleccion={"Trofeos"} />
          </div>
        </div>
        <div className="flex flex-col gap-8 mb-16">
          <div className="w-[80vw] flex flex-col justify-start gap-12 ">
            <GradientLabel
              width={"70vw"}
              title={"Gallardetes"}
              justifyContent={"start"}
            />
            <Activities coleccion={"Gallardetes"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noticias;
