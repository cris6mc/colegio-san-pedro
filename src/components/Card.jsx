import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

function Card({ ImageSRC, Title, Description, isButton }) {
    return (
        <div className='m-10 justify-center'>
            <Image
                className='rounded-2xl'
                src={ImageSRC}
                width={250}
                height={120}
            />
            <h1 className='font-bold text-center text-xl'>{Title}</h1>
            <p className='text-center text-xl'>{Description} <br/>
              {isButton && <button className='bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded'>
                <div className='flex flex-row items-center'>
                    <span className='mx-2'>Ver más</span>
                    <FaArrowRight/>
                </div>
            </button>
            }  
            </p>
            
            
        </div>
    )
}

export default Card