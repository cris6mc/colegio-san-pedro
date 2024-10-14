import React from 'react'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'

function Welcome() {
    return (
        <div className='flex flex-row m-10 justify-center items-center gap-16'>
            <Image
                src="/images/LOGO.png" // Ruta de la imagen en la carpeta public
                alt="Logo"
                width={300} // Ancho de la imagen
                height={179} // Altura de la imagen
            // className="border-4 border-gray-300"
            />
            <div className='justify-center items-center'>
                <h1 className='text-2xl m-5 max-w-lg justify-center text-center'>
                    <p className='font-bold'>Bienvenidos</p>Nos enorgullece ser una institución ambientalista, innovadora, inclusiva e intercultural. Nuestro compromiso es formar estudiantes autónomos y competentes, guiados por una cultura de paz. Únete a nuestra comunidad y sé parte de nuestro camino hacia el éxito. ¡Juntos, hacemos la diferencia!<br />
                    <button className='bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded' style={{ display: 'none' }}>
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