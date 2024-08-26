import Link from 'next/link';
import Image from 'next/image';
import Dropdown from './Dropdown';

export default function Navbar() {
  return (
    <nav className="bg-white flex gap-4 justify-between  px-20 font-bold text-black">
      <Link href={"/"}>
        <Image
          src="/images/LOGO.png"
          alt="Descripción de la imagen"
          width={45}
          height={45}
        />
      </Link>

      <ul className="flex gap-4 items-center">
        <li>
          <Dropdown text="Nuestra Institución">
            <ul>
              <li>
                <a href="/bienvenida" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  Bienvenida
                </a>
              </li>
              <li>
                <a href="/objetivos" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  Nuestros Objetivos
                </a>
              </li>
              <li>
                <a href="/historia" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="/docentes" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  Plantilla Docentes
                </a>
              </li>
            </ul>
          </Dropdown>
        </li>
        <li>
          <Dropdown text="Actividades Institucionales">
            <ul>
              <li>
                <Dropdown text="Tik-Chiki-Lab" translatex={"translate-x-20"}>
                  <ul>
                    <li>
                      <a href="/tiktoks" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                        Tiktokeando con el ambiente
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                        Podcast
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                        Lap-book
                      </a>
                    </li>
                  </ul>
                </Dropdown>
              </li>

              <li>
                <a href="#" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  Cartografia social
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  Actiyauyo
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  otros
                </a>
              </li>
            </ul>
          </Dropdown>
        </li>
        <li>
          <Dropdown text="Noticias">
            <ul>
              <li>
                <a href="/noticias" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  otros
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  otros
                </a>
              </li>
              <li>
                <a href="#" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                  otros
                </a>
              </li>
            </ul>
          </Dropdown>
        </li>
        <li>
          <button className=" hover:bg-blue-500 text-black font-bold py-2 px-4 rounded"
          >
            Contáctanos
          </button>
        </li>
      </ul>
    </nav>
  );
}
