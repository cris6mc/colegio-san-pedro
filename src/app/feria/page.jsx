import Card from "@/components/Card";
import Image from 'next/image';
import { React} from "react";
import Activities from "@/components/Activities";

export default function PageFeria() {

  return (
    <div>
      <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
        <h1 className="text-5xl font-bold text-center text-white">FERIA SABATINA</h1>
      </div>
      <div className='flex flex-row m-10 justify-center'>
        <div className='justify-center items-center'>
          <h1 className='text-2xl m-5 max-w-2xl text-justify'>
            <p className='font-semibold text-center text-4xl'>¡Feria Sabatina!</p>Bienvenido a la pagina de la escuela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi reiciendis exercitationem dolor voluptatem dolorem ipsum! Atque dolorum quia cumque exercitationem error ullam, at distinctio impedit harum unde ipsum cum? <br />
          </h1>
          <div className="flex flex-row ">
            <button className='bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded'>
              <div className='flex flex-row items-center'>
                <span className='mx-2'>Cartografia Social</span>
              </div>
            </button>
            <button className='bg-gray-500 hover:bg-gray-400 text-white text-xs py-1 px-2 rounded'>
              <div className='flex flex-row items-center'>
                <span className='mx-2'>Leer más</span>
              </div>
            </button>
          </div>

        </div>
        <Card
          ImageSRC={"/images/Director.png"}
          Title={"Director"}
          Description={"Mg. Kiko G. Astete Lopez"}
        />
      </div>
      <h2 className="text-5xl font-bold text-center text-black">Feria Sabatica de Chupaca</h2>
      <div className='flex flex-row m-10 justify-center mb-20'>
        <div className='justify-center items-center'>
          <Image
            className='rounded-2xl'
            alt="Colegio"
            src="/images/Colegio3.jpg"
            width={250}
            height={120}
          />
        </div>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati doloremque accusamus ratione? Laborum tempore rem, voluptatem ea veniam aspernatur voluptate ab minus! Totam eveniet a asperiores maxime omnis dolores distinctio!
      </p>

      <h2 className="text-5xl font-bold text-center text-black">Cartografia Social</h2>
      <Activities coleccion="cartografias" />
      <hr className="border-t-2 border-l-gray-500 my-4" />
      <div className="h-16"></div>
    </div>
  );
}