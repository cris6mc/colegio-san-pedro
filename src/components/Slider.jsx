"use client";

import React, { useState, useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Slider() {
  const sliderImages = [
    {
      src: "/images/home/SS/1.png",
      titulo: "Sobre Nosotros",
      descripcion:
        "Somos una Institución Educativa ambientalista, innovadora, inclusiva e intercultural basada en una cultura de paz",
    },
    {
      src: "/images/home/SS/2.png",
      titulo: "Actividades Institucionales",
      descripcion:
        "Cartografías, Tik-Chiqui-Lap, concientización ambiental, proyectos ambientales, entre otros",
    },
    {
      src: "/images/home/SS/3.png",
      titulo: "Plana Docente",
      descripcion: "Docentes Calificados",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? sliderImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastIndex = currentIndex === sliderImages.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, sliderImages.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, nextSlide]);

  return (
    <div className="h-[85vh] md:h-[845px] w-full py-0 px-0 relative group flex items-center justify-center">
      <div
        style={{
          backgroundImage: `url(${sliderImages[currentIndex].src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full h-full flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-black opacity-25"></div>
      </div>
      {/* button left */}
      <div onClick={prevSlide}>
        <FaArrowLeft className="hidden group-hover:block absolute m-5 top-1/2 left-4 text-2xl md:text-5xl rounded-full p-2 bg-black/10 text-white cursor-pointer" />
      </div>
      {/* button right */}
      <div onClick={nextSlide}>
        <FaArrowRight className="hidden group-hover:block absolute m-5 top-1/2 right-4 text-2xl md:text-5xl rounded-full p-2 bg-black/10 text-white cursor-pointer" />
      </div>
      {/* informacion del centro */}
      <div className="flex flex-col items-center justify-center text-white absolute inset-0 top-3/4 mx-auto w-full max-w-[60vw] md:max-w-[400px] text-center">
        <h1>
          <p className="font-bold text-lg md:text-3xl">
            {sliderImages[currentIndex].titulo}
          </p>
          <p className="text-sm md:text-lg">
            {sliderImages[currentIndex].descripcion}
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded mt-2">
            <div className="flex flex-row items-center">
              <span className="mx-2">Ver más</span>
              <FaArrowRight />
            </div>
          </button>
        </h1>
      </div>
    </div>
  );
}

export default Slider;
