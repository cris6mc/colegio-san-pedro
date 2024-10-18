import Image from 'next/image';
import { FaFacebook, FaHeart, FaTiktok } from 'react-icons/fa';


export default function Footer() {
    return (
        <div className="relative bg-[#D2D2D2] p-6 mt-32 rounded-t-lg text-center hover:bg-gradient-to-r hover:from-[#E2EBC7] hover:to-[#C3E8FC] transition-all duration-500 ease-in-out">
            <div className="absolute inset-x-0 top-0 transform -translate-y-1/3 flex justify-center rou">
                <Image
                    className="filter drop-shadow-[0_4px_0px_rgba(255,0,0,1)]"
                    src="/images/LOGO.png" // Ruta de la imagen en la carpeta public
                    alt="Logo del colegio"
                    width={150} // Ancho de la imagen
                    height={90} // Alto de la imagen
                />
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
                            <FaFacebook size={24} color="black" />
                            <FaTiktok size={24} color="black" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}