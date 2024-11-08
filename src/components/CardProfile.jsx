import React from 'react'
import { FaCartPlus, FaHeart, FaPhone } from 'react-icons/fa';
import Image from 'next/image';


function CardProfile({ nombre, image, cargo, telefono, email }) {
    return (
        <div className='flex flex-col border rounded-lg justify-center items-center p-2 m-3 hover:bg-gradient-to-r from-gray-200 to-blue-100'>
            <h1 className='p-2 flex justify-center'>{nombre.toUpperCase()}</h1>
            <div className='flex flex-row gap-4 border-dashed border-gray-400 border-t-2 pt-4'>
                <Image
                    className='m-2'
                    src={image || "/images/LOGO.png"}
                    alt={nombre}
                    width={120}
                    height={120}
                    unoptimized
                />
                <div className='flex flex-col justify-around'>
                    <h1>{cargo.toUpperCase()}</h1>
                    <div className='flex flex-row'>
                        <FaCartPlus />
                        <h1 className='ml-4 overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]'>{email}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProfile