import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function Welcome() {
  return (
    <div className="flex flex-col md:flex-row m-10 md:m-24 justify-center items-center gap-8 md:gap-16">
      <Image
        src="/images/LOGO.png"
        alt="Logo"
        width={250}
        height={179}
        className="w-1/2 md:w-auto"
      />
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-2xl m-5 max-w-lg dark:text-white text-dark">
          <p className="text-center font-bold mb-4 dark:text-gray-300 text-gray-800">
            Bienvenidos
          </p>
          <p className="text-center dark:text-gray-400 text-gray-700">
            Nos enorgullece ser una institución ambientalista, innovadora,
            inclusiva e intercultural. Nuestro compromiso es formar estudiantes
            autónomos y competentes, guiados por una cultura de paz. Únete a
            nuestra comunidad y sé parte de nuestro camino hacia el éxito.
            ¡Juntos, hacemos la diferencia!
          </p>
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded mt-4 md:mt-0"
            style={{ display: "none" }}
          >
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

export default Welcome;
