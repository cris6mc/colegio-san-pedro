"use client";
import Image from "next/image";
import React, { useRef } from "react";
import Activities from "@/components/Activities";
import GradientLabel from "@/components/label";
import SliderP from "@/components/SliderFeria";
import { scrollTo } from "../utils/scroll";

export default function PageFeria() {
  const LabelDescription = useRef(null);
  const labelCartografias = useRef(null);
  return (
    <div className="flex flex-col items-center gap-16">
      <div className="w-full">
        <SliderP
          title="Feria Sabatina de Chupaca"
          button1Text="Cartografia Social"
          onButton1Click={() => scrollTo(labelCartografias)}
          onButton2Click={() => scrollTo(LabelDescription)}
        />
      </div>
      <div
        className="flex flex-col justify-center items-center w-full"
        ref={LabelDescription}
      >
        <GradientLabel width={"80vw"} title="Feria Sabatina de Chupaca" />
        <div className="flex justify-center w-[80vw] ">
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
      <div
        className="flex flex-col justify-center items-center gap-6"
        ref={labelCartografias}
      >
        <GradientLabel width={"80vw"} title="Cartografias" />
        <div className="flex flex-col items-start  ">
          <Activities coleccion="Cartografias" />
        </div>
      </div>
    </div>
  );
}
