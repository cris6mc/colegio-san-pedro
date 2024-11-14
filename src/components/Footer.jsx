import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="relative bg-[#979797] p-6 mt-4 sm:mt-32 rounded-t-lg text-center transition-all duration-1000 ease-in-out hover:bg-gray-300 hover:text-black">
      <div className="absolute inset-x-0 top-0 transform -translate-y-1/3 flex justify-center">
        <div className="hidden sm:block">
          <Image
            className="filter drop-shadow-[0_4px_0px_rgba(255,0,0,1)]"
            src="/images/LOGO.png" // Ruta de la imagen en la carpeta public
            alt="Logo del colegio"
            width={150} // Ancho de la imagen
            height={90} // Alto de la imagen
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col sm:flex-row justify-around items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p>© Institución Educativa “San Pedro de Yauyo” 2024</p>
          <p>Todos los derechos reservados.</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 sm:mr-10">
            <h3 className="font-bold">Contáctanos</h3>
            <p>Dirección: Av. Chupaca N°- 471</p>
            <p>Teléfono: 064-507393</p>
          </div>
          <div>
            <h3 className="font-bold">Redes Sociales</h3>
            <div className="flex space-x-4 justify-center">
              <Link
                className="cursor-pointer"
                href="https://www.facebook.com/profile.php?id=100038548874917"
                target="_blank"
              >
                <FaFacebook size={24} color="black" />
              </Link>
              <Link href="https://www.tiktok.com" target="_blank">
                <FaTiktok size={20} color="black" />
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <FaYoutube size={25} color="black" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
