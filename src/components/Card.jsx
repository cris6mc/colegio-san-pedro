"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { FaArrowRight, FaEdit } from 'react-icons/fa'
import { useUser } from "@/context/UserContext";

function Card({ ImageSRC, Title, Description, isButton }) {
    const { user, loading } = useUser(); // Acceder al usuario desde el contexto
    const [showModal, setShowModal] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleEdit = () => {
        setShowEdit(true);
    };

    const handleCloseEdit = () => {
        setShowEdit(false);
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center w-[246px] gap-4'>
                <Image
                    className='rounded-2xl'
                    src={ImageSRC}
                    alt={Title}
                    width={250}
                    height={120}
                    unoptimized
                />
                <h1 className='font-bold text-center text-xl'>{Title}</h1>
                <p className='text-center text-xl'>{Description}</p>
                <div className="flex flex-row justify-center">
                    {isButton && <button className='bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2  w-[120px] rounded-[100px] flex justify-center'>
                        <div className='flex flex-row items-center'
                            onClick={handleClick}
                        >
                            <span className='mx-2'>Ver más</span>
                            <FaArrowRight />
                        </div>
                    </button>
                    }
                    {user && user.rol === 'admin' && <button className='bg-red-500 hover:bg-red-700 text-white text-xs py-1 px-2 rounded'
                    onClick={handleEdit}  >
                        <div className='flex flex-row items-center'>
                            <span className='mx-2'>Editar</span>
                            <FaEdit />
                        </div></button>
                        }
                </div>
            </div>
                {showModal && (
                    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg">
                            <div className="flex flex-row mb-3 w-full justify-between items-center">
                                {/* <h2 className="text-xl font-bold justify-center">Actividades</h2> */}
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                                    onClick={handleCloseModal}
                                >
                                    X
                                </button>
                            </div>
                            <div className="flex flex-col m-3">
                                <h3 className="font-bold">{Title}</h3>
                                <span>{Description}</span>
                            </div>

                        </div>
                    </div>
                )}

                {showEdit && (
                    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="flex flex-col items-center bg-white p-6 rounded-lg">
                            <div className="flex flex-row mb-3 w-full justify-between items-center">
                                <h2 className="text-xl font-bold justify-center">Editar Actividad</h2>
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                                    onClick={handleCloseEdit}
                                >
                                    X
                                </button>
                            </div>
                            <form className="space-y-6">
                                <div>
                                    <label className="block text-black font-bold">Titulo</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 rounded bg-white bg-opacity-20 text-black placeholder-black"
                                        placeholder="Titulo de la actividad"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-black font-bold">Descripcion</label>
                                    <input
                                        type="text"
                                        className="w-full p-2 rounded bg-white bg-opacity-20 text-black placeholder-black"
                                        placeholder="Descripción de la actividad."
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition"
                                >
                                    Guardar
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </>

            )
}

            export default Card