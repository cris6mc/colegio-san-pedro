"use client";
import CardProfile from "@/components/CardProfile";
import Dropdown from "@/components/Dropdown";
import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import according to your firebase configuration
import { collection, getDocs } from "firebase/firestore";

function PageDocentes() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      const usuariosList = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(
          (usuario) => usuario.rol === "profesor" || usuario.rol === "admin"
        );
      setUsuarios(usuariosList);
    };
    fetchUsuarios();
  }, []);

  return (
    <div>
      <div className="py-8 mx-5 md:mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-white">
          PLANILLA DOCENTE
        </h1>
      </div>

      <div className="flex flex-col m-5 md:m-10 justify-center items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400">
        <h1 className="text-xl md:text-2xl m-5 max-w-lg text-center mt-16 mb-16">
          Contamos con personal altamente calificado y comprometido con la
          excelencia educativa. Cada miembro de nuestro cuerpo docente aporta
          una vasta experiencia en su campo, asegurando una formación integral y
          de calidad para nuestros estudiantes
        </h1>
      </div>
      {/* 4 secciones */}
      <div className="flex flex-col gap-8 m-5 md:m-10">
        {/* Personal Administrativo */}
        <div className="flex flex-col center gap-4">
          <div className="bg-transparent border-blue-500 border rounded-lg px-2 py-2 mx-2 md:mx-10 text-black">
            <h1 className="font-bold text-xl md:text-2xl flex justify-center">
              Personal Administrativo
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {usuarios.map((usuario) => (
              <div key={usuario.id} className="flex flex-col">
                <CardProfile
                  nombre={usuario.nombre || "Nombre del usuario"}
                  image={usuario.imageURL || ""}
                  cargo={usuario.area || "Cargo del profesor"}
                  telefono={usuario.celular || "+51 123 456 789"}
                  email={usuario.email || ""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageDocentes;
