import React from "react";
import Image from "next/image";

function PageHistoria() {
  return (
    <div>
      <div className="py-8 mx-4 md:mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
          HISTORIA
        </h1>
      </div>
      <div
        style={{ backgroundImage: "url(/images/Colegio3.jpg)" }}
        className="flex flex-col md:flex-row m-4 md:m-10 justify-center relative"
      >
        <h1 className="text-lg md:text-xl m-3 md:m-5 max-w-2xl text-justify z-10">
          <p className="font-normal text-center text-3xl md:text-4xl mb-4">
            Nuestra Historia
          </p>
          <p>
            Inició una sección excedente de la Escuela Primaria de Aplicación
            Anexa a la Normal Teodoro Peñaloza, hoy Instituto Superior Publico
            Pedagógico. Fue así que, por falta de aulas, la mencionada sección
            funcionó en una casa particular del barrio La Libertad con su
            profesor Víctor Sihuay Maraví. Al pasar los años el número de
            alumnos y sección crecía y se traslada a la casa del Sr. Navarro
            Robles Cueva, y así se crea la Escuela como: ESCUELA PRIMARIA DE
            VARONES Nº- 5317, Funcionó como tal en aquella casa, después de
            algunos años más nace la idea de los comuneros del Barrio de Yauyo
            que no tenían una escuela y que era necesario contar con ella,
            entonces hicieron un petitorio de donación de un terreno de
            propiedad de los jóvenes de la CONGREGACION HIJOS MISIONEROS DE LA
            INMACULADA CORAZON DE MARIA, quienes donaron su local al Sr.
            Director Víctor Sihuay a mérito de una Resolución Directoral Nº- 272
            del 23 de Junio de 1963, cambia el número de la Escuela siendo
            30073, por razones de cumplir sus servicios en bien de la niñez. El
            Director se jubila y la encargatura queda a responsabilidad del
            profesor Ramiro Melgar y posteriormente la Sra. Maximiliana Cerrón
            Rodríguez nombrada como Directora titular en merito a la Resolución
            Directoral Nº- 3993 – 1983 trabajó hasta el año 2000 fecha en que
            cesa. Luego asume en el cargo de Director de la Institución
            Educativa es el Prof. Demetrio Ricardo Cerrón Camargo. En el año
            2015 -2016 asume por evaluación la dirección el Prof. Abel Pomalaya
            Matos. El 2016 y 2018 encargada de la dirección la prof. Rosa
            Estrella Paucar Socualaya. El 2017 asume la encargatura el Prof.
            Rubén Valentín Mendoza y actualmente es designado el Mg Kiko Gil
            ASTETE LOPEZ. El Centro Educativo cuenta actualmente con 01
            director, 04 docentes en inicial, 18 docentes de primaria, 03
            docentes de Educación Física, 01 docentes de taller, 01 secretaria,
            01 auxiliar de educación y 02 personales de servicio.
          </p>
          <p>
            En el año de l998, el Presidente de la República Ing. Alberto
            Fujimori Fujimori; ordenó la construcción de un local moderno,
            haciéndose cargo INFES, razón por la cual contamos con nuestro
            actual local.
          </p>
        </h1>
        <div className="absolute inset-0 bg-white opacity-75"></div>
      </div>

      <div className="flex flex-col items-center md:flex-row m-4 md:m-10 justify-center gap-8 md:gap-16 bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
        <Image
          className="mt-5"
          src="/images/Colegio2.jpg"
          alt="Logo"
          width={280} // Ancho de la imagen
          height={120} // Altura de la imagen
          // className="border-4 border-gray-300"
        />
        <div className="justify-center items-center">
          <h1 className="italic text-2xl m-5 max-w-lg justify-center text-center">
            Actualmente somos la Institución Educativa N° 30073. Brindamos
            educación a estudiantes del nivel Inicial y primaria, nuestros
            estudiantes hablan la lengua castellana y en un menor porcenteje el
            quechua, caracterizado como institución EIB provienen de familias
            dedicadas a las principales actividades económicas: La ganadería,
            agricultura, el comercio, entre otras
          </h1>
          <p className="text-lg italic"></p>
        </div>
      </div>
      <div className="h-2 sm:h-10"></div>
    </div>
  );
}

export default PageHistoria;
