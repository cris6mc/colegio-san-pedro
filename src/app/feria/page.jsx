import Image from "next/image";
import { React } from "react";
import Activities from "@/components/Activities";
import GradientLabel from "@/components/label";
import SliderP from "@/components/SliderFeria";

export default function PageFeria() {
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="w-full">
        <SliderP button1Text="Cartografia Social" />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <GradientLabel width={"80vw"} title="Feria Sabatina de Chupaca" />
        <div className="flex justify-center w-[80vw]">
          <div className="flex flex-col justify-center items-center gap-12 mt-12">
            <Image
              src="/images/Colegio.jpg"
              width={700}
              height={400} // Asegúrate de proporcionar un valor para height
              alt="Imagen del Colegio"
              style={{
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              magnam doloribus deserunt, consequuntur aut quia voluptates
              reprehenderit nulla, minima error temporibus amet nesciunt tempora
              dolorum laboriosam. Dolor quo dolore impedit.
            </p>
          </div>
        </div>
      </div>

      <GradientLabel
        width={"80vw"}
        title="Cartografias"
        justifyContent={"start"}
      />
      <div className="flex flex-col items-start  ">
        <Activities coleccion="cartografias" />
      </div>
      <hr className="border-t-2 border-l-gray-500 " />
      <div className="h-16"></div>
    </div>
  );
}
