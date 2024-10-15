"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaArrowRight, FaEdit } from 'react-icons/fa';

function Card({ ImageSRC, Title, Description, isButton }) {
    const [showModal, setShowModal] = useState(false);
    const [imageURL, setImageURL] = useState(ImageSRC);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text || '';
    };

    return (
        <>
            <div className='flex flex-col justify-center items-center w-[246px] gap-4 transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-[#D682E3] via-[#E9E576] to-[#C3E8FC] p-4 rounded-2xl'>
                <Image
                    className='rounded-2xl'
                    src={imageURL}
                    alt={Title}
                    width={250}
                    height={300}
                    unoptimized
                    style={{borderRadius: '1rem', objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                />
                <h1 className='font-bold text-center text-xl'>{truncateText(Title, 20)}</h1>
                <p className='text-center text-xl '>{truncateText(Description, 25)}</p>
                <div className="flex flex-row">
                    {isButton && <button className='bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded'>
                        <div className='flex flex-row items-center'
                            onClick={handleClick}
                        >
                            <span className='mx-2'>Ver más</span>
                            <FaArrowRight />
                        </div>
                    </button>
                    }
                </div>
            </div>
            {showModal && (
                <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="flex flex-col items-center bg-white p-6 rounded-lg">
                        <div className="flex flex-row mb-3 w-full justify-between items-center">
                            <button
                                className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                        </div>
                        <Image
                            className='rounded-2xl'
                            src={imageURL}
                            alt={Title}
                            width={250}
                            height={300}
                            unoptimized
                            style={{ objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                        />
                        <div className="flex flex-col m-3">
                            <h3 className="font-bold">{Title}</h3>
                            <span>{Description}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Card;