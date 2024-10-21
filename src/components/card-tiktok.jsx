"use client";

import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

function CardTiktok({ ImageSRC, Title, Hashtags }) {
    const [showModal, setShowModal] = useState(false);
    const [hovered, setHovered] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <>
            <div
                className={`flex flex-col  justify-center items-center w-[246px] h-[350px] gap-4 p-4 rounded-2xl border-gray-200 border-2 transition-all duration-500 ease-in-out 
                ${hovered ? 'bg-gradient-to-r from-[#D682E3] via-[#E9E576] to-[#C3E8FC]' : 'bg-white '}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <img
                    className='rounded-2xl'
                    src={ImageSRC}
                    alt={Title}
                    width={80}
                    height={80}
                    style={{ borderRadius: '1rem', objectFit: 'cover' }}
                />
                <h1 className='font-bold text-center text-xl'>{Title}</h1>
                <p className='text-center text-sm text-gray-500'>{Hashtags}</p>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded flex flex-row items-center'
                    onClick={handleClick}
                >
                    <span className='mx-2'>Ver más</span>
                    <FaArrowRight />
                </button>
            </div>

            {showModal && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg max-h-[80vh] overflow-y-auto">
                        <div className="flex flex-row mb-3 w-full justify-between items-center border-black border-full border-solid border-2">
                            <button
                                className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                        </div>
                        <img
                            className='rounded-2xl'
                            src={ImageSRC}
                            alt={Title}
                            width={250}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="flex flex-col m-3">
                            <h3 className="font-bold">{Title}</h3>
                            <span>{Hashtags}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CardTiktok;
