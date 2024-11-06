
import Image from 'next/image';
import { React} from "react";
import Activities from "@/components/Activities";
import GradientLabel from '@/components/label';
import SliderP from '@/components/SliderFeria';

export default function PageFeria() {

  return (
    <div className="flex flex-col items-center gap-32">
      <div className="w-full" >
        <SliderP />
      </div>
      <Activities coleccion="cartografias" />
      <hr className="border-t-2 border-l-gray-500 my-4" />
      <div className="h-16"></div>
    </div>
  );
}