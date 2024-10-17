"use client";
import CardProfile from '@/components/CardProfile';
import Dropdown from '@/components/Dropdown';
import { React, useEffect, useState } from "react";
import { db } from "@/lib/firebase"; // Adjust the import according to your firebase configuration
import { collection, getDocs } from "firebase/firestore";

function PageDocentes() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const fetchUsuarios = async () => {
            const querySnapshot = await getDocs(collection(db, "usuarios"));
            const usuariosList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsuarios(usuariosList);
        };

        fetchUsuarios();
      }, []);

    return (
        <div>
            <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <h1 className="text-5xl font-bold text-center text-white">PLANILLA DOCENTE</h1>
            </div>

            <div className=' flex flex-col m-10 justify-center items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <h1 className='text-2xl m-5 max-w-lg  text-center'>
                    Bienvenido a la pagina de la escuela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi reiciendis exercitationem dolor voluptatem dolorem ipsum! Atque dolorum quia cumque exercitationem error ullam, at distinctio impedit harum unde ipsum cum?
                </h1>
                <div className='flex flex-row justify-between items-center'>
                    <button className="bg-transparent border-blue-500 border rounded-lg  px-1 py-1 m-4 text-black hover:bg-blue-500 hover:text-white">
                        Personal Administrativo
                    </button>
                    <button className="bg-transparent border-blue-500 border rounded-lg px-1 py-1 m-4 text-black hover:bg-blue-500 hover:text-white">
                        Aula de imnovación
                    </button>
                    <button className="bg-transparent border-blue-500 border rounded-lg px-1 py-1 m-4 text-black hover:bg-blue-500 hover:text-white">
                        Educación Física
                    </button>
                    <div className='border rounded-lg border-blue-500'>
                        <Dropdown text="Niveles" options={
                            [
                                { title: "Inicial", href: "/" },
                                { title: "Primaria", href: "/" },
                            ]
                        } />
                    </div>

                </div>
            </div>
            <div className="bg-transparent border-blue-500 border rounded-lg px-1 py-1 mx-10 text-black">
                <h1 className='font-bold text-2xl'>
                    Personal Administrativo
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-4 mx-10 border-blue-500 border rounded-lg">
                {usuarios.map(usuario => (
                    <CardProfile
                    nombre={usuario.nombre}
                    image={usuario.imageURL}
                    cargo={usuario.rol}
                    telefono={usuario.celular || " "}
                    email={usuario.email}
                />
                ))}
            </div>
            <div className='h-20'></div>
        </div>
    )
}

export default PageDocentes