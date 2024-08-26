import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

function Welcome() {
    return (
        <div className='flex flex-row m-10 justify-center'>
            <Image
                src="/images/LOGO.png" // Ruta de la imagen en la carpeta public
                alt="Logo"
                width={200} // Ancho de la imagen
                height={120} // Altura de la imagen
            // className="border-4 border-gray-300"
            />
            <div className='justify-center items-center'>
                <h1 className='text-2xl m-5 max-w-lg justify-center text-center'>
                    <p className='font-bold'>Bienvenidos</p>Bienvenido a la pagina de la escuela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi reiciendis exercitationem dolor voluptatem dolorem ipsum! Atque dolorum quia cumque exercitationem error ullam, at distinctio impedit harum unde ipsum cum? <br />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded'>
                        <div className='flex flex-row items-center'>
                            <span className='mx-2'>Ver más</span>
                            <FaArrowRight />
                        </div>
                    </button>
                </h1>
            </div>

        </div>
    )
}

export default Welcome