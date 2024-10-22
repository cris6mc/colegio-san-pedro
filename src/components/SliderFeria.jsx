import Image from 'next/image';
import React from 'react';

export default function SliderFeria({ 
  title = "¡Feria Sabatina!", 
  description = "Lorem ipsum dolor sit amet consectetur. Amet purus turpis eros placerat consectetur tincidunt risus vitae lorem. Ac blandit egestas amet vitae elementum. Nullam viverra morbi adipiscing imperdiet aliquam eu orci a.", 
  button1Text = "Cartografía Social", 
  button2Text = "Leer más", 
  imageSrc = "/images/Colegio.jpg",
  imageWidth = 650,
  imageHeight = 150 
}) {
  return (
    <div className="relative h-1/2 w-full bg-gradient-to-r from-blue-200 via-purple-200 to-yellow-100 flex items-center justify-center">
      <div className="max-w-5xl px-8">
        <div className="flex flex-col justify-center h-full space-y-6">
          <h1 className="text-6xl font-bold text-black">
            {title}
          </h1>
          <p className="text-xl text-gray-600">
            {description}
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              {button1Text}
            </button>
            <button className="bg-white border border-gray-300 text-gray-700 font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              {button2Text}
            </button>
          </div>
        </div>
      </div>
      <Image 
        src={imageSrc} 
        width={imageWidth} 
        height={imageHeight} 
        style={{objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} 
        alt="Image"
      />
    </div>
  );
}

