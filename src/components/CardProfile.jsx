import React from 'react'
import { FaCartPlus, FaHeart, FaPhone } from 'react-icons/fa';
import Image from 'next/image';


function CardProfile({ nombre, image, cargo, telefono, email }) {
    return (
        <div className='flex flex-col bg-slate-300 border-blue-500 border rounded-lg justify-center p-2 m-3 hover:bg-gradient-to-r from-gray-200 to-blue-400'>
            <h1 className='p-2'>{nombre}</h1>
            <hr className="border-t-2 border-white mx-1 my-1" />
            <div className='flex flex-row'>
                <Image
                    className='m-2'
                    src={image}
                    width={120}
                    height={120}
                />
                <div className='flex flex-col justify-between'>
                    <h1>{cargo}</h1>
                    <div className='flex flex-row'>
                        <FaPhone/> 
                        <h1 className='ml-2'>{telefono}</h1>
                    </div>
                    <div className='flex flex-row'>
                        <FaCartPlus/>
                        <h1 className='ml-2'>{email}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProfile