import Card from "@/components/Card";
import Image from 'next/image';
import { React} from "react";
import Activities from "@/components/Activities";

export default function PageFeria() {

  return (
    <div className="flex flex-col items-center gap-32">
      <div className="w-full" >
        <SliderP />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <GradientLabel title="Feria Sabatina de Chupaca" />
        <div className="flex justify-center w-[80vw]">
          <div className="flex flex-col justify-center items-center gap-12 mt-12">
            <Image
              src="/images/Colegio.jpg"
              width={700}
              height={400} // Asegúrate de proporcionar un valor para height
              alt="Imagen del Colegio"
              style={{ objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius magnam doloribus deserunt, consequuntur aut quia voluptates reprehenderit nulla, minima error temporibus amet nesciunt tempora dolorum laboriosam. Dolor quo dolore impedit.</p>
          </div>
        </div>
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