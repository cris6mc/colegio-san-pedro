import Image from 'next/image';
import { FaFacebook, FaHeart, FaTiktok } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className="relative bg-gray-300 p-6 rounded-t-lg">
            <div className="absolute inset-x-0 top-0 transform -translate-y-1/3 flex justify-center">
            <Image
                        src="/images/LOGO.png" // Ruta de la imagen en la carpeta public
                        alt="Descripción de la imagen"
                        width={150} // Ancho de la imagen
                        height={90} // Altura de la imagen
                        // className="border-4 border-gray-300"
                    />
                {/* <div className="w-24 h-24 bg-gray-300 p-10 rounded-full flex items-center justify-center border-4 border-gray-300">
                    
                </div> */}
            </div>


            <div className="mt-4 flex justify-around">
                <div className="text-left">
                    <p>© Institución Educativa “San Pedro de Yauyo” 2024</p>
                    <p>Todos los derechos reservados.</p>
                </div>

                <div className='flex flex-row justify-between'>
                    <div className='mr-10'>
                        <h3 className="font-bold">Contáctanos</h3>
                        <p>Dirección: Av. Chupaca N°- 471</p>
                        <p>Teléfono: 064-507393</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Redes Sociales</h3>
                        <div className="flex space-x-4 justify-evenly">
                            <FaFacebook size={24} color="grey" />
                            <FaTiktok size={24} color="grey" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ); 
}