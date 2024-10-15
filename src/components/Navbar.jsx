import Link from 'next/link';
import Image from 'next/image';
import Dropdown from './Dropdown';

export default function Navbar() {
  return (
    <nav className="bg-white flex gap-4 px-20 font-bold text-black h-[77px] w-auto justify-center">
      <div className="w-[1276px] flex justify-around items-center">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src="/images/LOGO.png"
            alt="Logo"
            width={52}
            height={71}
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
                        <a href="/podcast" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                          Podcast
                        </a>
                      </li>
                      <li>
                        <a href="/lapbook" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                          Lap-book
                        </a>
                      </li>
                    </ul>
                  </Dropdown>
                </li>

                <li>
                  <a href="/feria" className="block px-4 text-gray-800 hover:bg-blue-500 hover:text-white">
                    Feria Sabatina
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
            <button>
              <Link href="/noticias" className="hover:bg-blue-500 text-black font-bold py-2 px-4 rounded">
                Noticias
              </Link>
            </button>
          </li>
          <li>
            <button className=" hover:bg-blue-500 text-black font-bold py-2 px-4 rounded"
            >
              Contáctanos
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
