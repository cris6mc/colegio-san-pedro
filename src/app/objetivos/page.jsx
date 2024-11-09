import Objetivo from "@/components/Objetivo";
import React from "react";

function PageObjetivos() {
  return (
    <div>
      <div className="py-8 mx-4 sm:mx-10 mb-8 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-white">
          NUESTROS OBJETIVOS
        </h1>
      </div>
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Visión"}
        description={
          "“Ser una Institución Educativa líder que forme estudiantes autónomos y  competentes, orientados a satisfacer necesidad y expectativas de la sociedad”"
        }
        color={"bg-[#88B603]"}
        row={"flex-col sm:flex-row"}
      />
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Misión"}
        description={
          "“Somos una Institución Educativa ambientalista, innovadora, inclusiva e intercultural basada en una cultura de paz.”"
        }
        color={"bg-[#F4A261]"}
        row={"flex-col sm:flex-row-reverse"}
      />

      <div className="py-8 mx-4 sm:mx-10 mt-10 mb-2 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
        <h1 className="text-3xl sm:text-5xl font-bold text-center text-white">
          NUESTROS VALORES
        </h1>
      </div>
      <h2 className="text-lg sm:text-2xl mx-4 sm:mx-10 text-justify mt-[1.5rem] mb-[3rem]">
        En el año 2023 formulamos ocho valores que guiaron nuestra misión y
        currículo. Sin embargo, debido a los rápidos cambios en el mundo, hemos
        actualizado nuestros valores para reflejar mejor estos tiempos. Nuestros
        valores renovados ahora incluyen Identidad, Respeto y Responsabilidad.
        Fortalecer la Identidad de nuestros estudiantes, fomentar el Respeto y
        promover la Responsabilidad son esenciales para formar ciudadanos
        conscientes y comprometidos. Con estos valores, seguimos ofreciendo una
        educación integral y adaptada a las necesidades actuales.
      </h2>
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Etica"}
        description={
          "Promueve valores como paz, solidaridad, justicia, libertad, y responsabilidad, fortaleciendo la conciencia moral y la convivencia."
        }
        color={"bg-[#6C3ECF]"}
        row={"flex-col sm:flex-row"}
      />
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Equidad"}
        description={
          "Garantiza igualdad de oportunidades en el acceso, permanencia y trato dentro de un sistema educativo de calidad."
        }
        color={"bg-[#799528]"}
        row={"flex-col sm:flex-row-reverse"}
      />
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Inclusión"}
        description={
          "Integra a personas con discapacidad y grupos marginados, contribuyendo a eliminar la pobreza y desigualdades."
        }
        color={"bg-[#C1220D]"}
        row={"flex-col sm:flex-row"}
      />
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Calidad"}
        description={
          "Asegura una educación integral, pertinente, flexible y continua, adecuada para todos los estudiantes."
        }
        color={"bg-[#00A896]"}
        row={"flex-col sm:flex-row-reverse"}
      />
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Democracia"}
        description={
          "Promueve derechos humanos, libertad de conciencia y ciudadanía, fortaleciendo el respeto y el Estado de Derecho."
        }
        color={"bg-[#E9EC6B]"}
        row={"flex-col sm:flex-row"}
      />
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Interculturalidad"}
        description={
          "Valora la diversidad cultural y lingüística, promoviendo convivencia armónica y aprendizaje mutuo entre culturas."
        }
        color={"bg-[#3481AD]"}
        row={"flex-col sm:flex-row-reverse"}
      />
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Conciencia Ambiental"}
        description={
          "Fomenta el respeto y conservación del entorno natural para garantizar la sostenibilidad de la vida.."
        }
        color={"bg-[#9EA0A1]"}
        row={"flex-col sm:flex-row"}
      />
      <Objetivo
        image={"/images/Colegio2.jpg"}
        title={"Creatividad e Innovación"}
        description={
          "Impulsa la creación de nuevos conocimientos en diversos campos, fomentando el arte y la cultura."
        }
        color={"bg-[#F5CAC3]"}
        row={"flex-col sm:flex-row-reverse"}
      />
      <div className="h-20"></div>
    </div>
  );
}

export default PageObjetivos;
