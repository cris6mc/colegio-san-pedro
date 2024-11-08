"use client";

import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import according to your firebase configuration
import Image from "next/image";
import { collection, getDocs } from "firebase/firestore";
import { useUser } from "@/context/UserContext";
import SliderP from "@/components/SliderFeria";
import GradientLabel from "@/components/label";
import CardCartografia from "@/components/card-cartografia";
import Activities from "@/components/Activities";

export default function PageFeria() {
  const [cartografias, setCartografias] = useState([]);
  const { user, loading } = useUser(); // Acceder al usuario desde el contexto
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  useEffect(() => {
    const fetchCartografias = async () => {
      const querySnapshot = await getDocs(collection(db, "cartografias"));
      const cartografiaList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCartografias(cartografiaList);
    };

    fetchCartografias();
  }, []);

  return (
    <div className="flex flex-col items-center gap-16">
      <div className="w-full">
        <SliderP title="Yauyo Lee" button1Text="Explorar" />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <GradientLabel width={"80vw"} title="Yauyo Lee" />
        <div className="flex justify-center w-[80vw]">
          <div className="flex flex-col justify-center items-center gap-12 mt-12">
            <Image
              src="/images/Colegio.jpg"
              width={700}
              height={400} // Asegúrate de proporcionar un valor para height
              alt="Imagen del Colegio"
              style={{
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              magnam doloribus deserunt, consequuntur aut quia voluptates
              reprehenderit nulla, minima error temporibus amet nesciunt tempora
              dolorum laboriosam. Dolor quo dolore impedit.
            </p>
          </div>
        </div>
      </div>
      <GradientLabel
        width={"80vw"}
        title="Festival de Lectura"
        justifyContent={"start"}
      />
      <div className="mb-16">
        <Activities coleccion={"Festival"} />
      </div>

      <GradientLabel
        width={"80vw"}
        title="Dia del Libro"
        justifyContent={"start"}
      />
      <div>
        <Activities coleccion={"Libro"} />
      </div>

      <GradientLabel
        width={"80vw"}
        title="Lectura en Familia"
        justifyContent={"Lectura"}
      />
      <div>
        <Activities coleccion={"Lectura"} />
      </div>

      <GradientLabel
        width={"80vw"}
        title="Concursos de Lectura"
        justifyContent={"start"}
      />
      <div>
        <Activities coleccion={"Concursos"} />
      </div>
    </div>
  );
}
