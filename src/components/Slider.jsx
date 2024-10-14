"use client";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Slider() {
  const sliderImages = [
    { src: "/images/Colegio.jpg", titulo: "slider1", descripcion: "Descripcion del slider 1" },
    { src: "/images/Colegio2.jpg", titulo: "slider2", descripcion: "Descripcion del slider 2" },
    { src: "/images/Colegio3.jpg", titulo: "slider3", descripcion: "Descripcion del slider 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstIndex = currentIndex === 0;
    const newIndex = isFirstIndex ? sliderImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastIndex = currentIndex === sliderImages.length - 1;
    const newIndex = isLastIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1300px] h-[500px] w-full m-auto py-10 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${sliderImages[currentIndex].src})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover"
      ></div>
      {/* button left */}
      <div onClick={prevSlide}>
        <FaArrowLeft className="hidden group-hover:block absolute m-5 top-1/2 left-4 text-5xl rounded-full p-2 bg-black/20 text-white cursor-pointer" />
      </div>
      {/* button right */}
      <div onClick={nextSlide}>
        <FaArrowRight className="hidden group-hover:block absolute m-5 top-1/2 right-4 text-5xl rounded-full p-2 bg-black/20 text-white cursor-pointer" />
      </div>
      {/* informacion del centro */}
      <div onClick={nextSlide} className="absolute m-5 bottom-4 right-1/2 text-3xl rounded-full p-2 text-white">
        <h1 className="text-center">
          <p className="font-bold text-3xl">{sliderImages[currentIndex].titulo}</p>
          <p className="text-lg">{sliderImages[currentIndex].descripcion}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded">
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
