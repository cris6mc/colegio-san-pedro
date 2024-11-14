import React from "react";
import Image from "next/image";

function Objetivo({ image, title, description, color, row }) {
  return (
    <div className={`flex ${row} mx-8 justify-center w-[85vw]`}>
      <Image src={image} alt={title} width={350} height={46} />
      <div
        className={`${color} flex flex-col self-center items-center justify-center h-46 w-full md:w-[35%]`}
      >
        <div className="flex flex-col items-center justify-center w-[300px]">
          <hr className="border-t border-white mx-10 my-10" />
          <div className="border-white border-solid border-y-4 pt-4 pb-4">
            <h1 className="text-center font-bold text-2xl text-white">
              {title}
            </h1>
            <h2 className="text-center justify-center text-white">
              {description}
            </h2>
          </div>
          <hr className="border-t border-white mx-10 my-10" />
        </div>
      </div>
    </div>
  );
}

export default Objetivo;
