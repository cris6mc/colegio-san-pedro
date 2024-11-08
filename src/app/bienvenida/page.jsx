import React from "react";
import Card from "@/components/Card";

function PageBienvenida() {
  return (
    <div style={{ height: "100%" }}>
      <div className="py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
        <h1 className="text-5xl font-bold text-center text-white">
          BIENVENIDA
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-[4rem] m-4 lg:m-[4rem] mb-[10rem]">
        <div className="justify-center items-center w-full lg:w-[800px]">
          <h1 className="text-[1rem] text-justify w-full lg:w-[800px]">
            <p className="font-semibold text-center text-4xl border-spacing-1">
              Nuestra Institución
            </p>
            <p className="mt-[2rem]">
              Somos una institución educativa ubicada en el corazón de Chupaca,
              rodeados de un entorno natural privilegiado que inspira
              aprendizaje y crecimiento. Nuestra misión es &quot;formar
              estudiantes autónomos y competentes, preparados para satisfacer
              las necesidades y expectativas de la sociedad, promoviendo valores
              de identidad, respeto y responsabilidad&quot; (Misión de la IE N°
              30073) <br />
              <br />
              Nos motiva la innovación y estamos comprometidos con la educación
              ambientalista, inclusiva e intercultural, en un marco de paz y
              convivencia. Nuestro currículum fomenta la participación activa en
              la comunidad local y global, preparando a nuestros alumnos para
              ser &quot;ciudadanos íntegros y exitosos&quot; (misión de nuestra
              institución).
              <br />
              <br />
              Nuestro centro educativo refleja nuestro compromiso con el
              desarrollo sostenible y la educación de calidad. Le invitamos a
              visitar nuestras instalaciones, conocer a nuestro dedicado equipo
              docente y experimentar la importancia que damos a nuestros valores
              fundamentales de respeto, integridad, compromiso y empatía.
              Estamos seguros de que comprenderá por qué la Institución
              Educativa N° 30073 &quot;San Pedro de Yauyo Chupaca&quot; es un
              referente en educación en la región.{" "}
            </p>
          </h1>
          <p className="text-[1rem] text-justify w-full lg:w-[800px] mt-[2rem]">
            Somos una institución educativa ubicada en el corazón de Chupaca,
            rodeados de un entorno natural privilegiado que inspira aprendizaje
            y crecimiento. Nuestra misión es formar estudiantes autónomos y
            competentes, preparados para satisfacer las necesidades y
            expectativas de la sociedad, promoviendo valores de identidad,
            respeto y responsabilidad (Misión de la IE N° 30073) <br />
            <br />
            Nos motiva la innovación y estamos comprometidos con la educación
            ambientalista, inclusiva e intercultural, en un marco de paz y
            convivencia. Nuestro currículum fomenta la participación activa en
            la comunidad local y global, preparando a nuestros alumnos para ser
            ciudadanos íntegros y exitosos (misión de nuestra institución).
            <br />
            <br />
            Nuestro centro educativo refleja nuestro compromiso con el
            desarrollo sostenible y la educación de calidad. Le invitamos a
            visitar nuestras instalaciones, conocer a nuestro dedicado equipo
            docente y experimentar la importancia que damos a nuestros valores
            fundamentales de respeto, integridad, compromiso y empatía. Estamos
            seguros de que comprenderá por qué la Institución Educativa N° 30073
            San Pedro de Yauyo Chupaca es un referente en educación en la
            región.
          </p>
        </div>
        <Card
          ImageSRC={"/images/Director.png"}
          Title={"Director"}
          Description={"Mg. Kiko G. Astete Lopez"}
          style={{ height: "500px" }}
        />
      </div>
    </div>
  );
}

export default PageBienvenida;
