import Image from 'next/image';
import React from 'react';

export default function SliderP({
  title = "",
  description = "",
  button1Text = "",
  button2Text = "",
  imageSrc = "",
  imageWidth = 700,
  imageHeight = 150,
  onButton1Click,
  onButton2Click
}) {
  return (
    <div className="relative h-[90vh] w-full bg-gradient-to-r from-blue-200 via-purple-200 to-yellow-100 flex items-center justify-evenly ">
      <div className="max-w-5xl px-8">
        <div className="flex flex-col justify-center h-full space-y-6">
          <h1 className="text-6xl font-bold text-black">
            {title || "Title"}
          </h1>
          <p className="text-xl text-gray-600">
            {description || 'Lorem ipsum dolor sit amet consectetur. Amet purus turpis eros placerat consectetur tincidunt risus vitae lorem. Ac blandit egestas amet vitae elementum. Nullam viverra morbi adipiscing imperdiet aliquam eu orci a.' }
          </p>
          <div className="flex space-x-4">
            <button onClick={onButton1Click} className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
              {button1Text || "Page name" }
            </button>
            <button onClick={onButton2Click} className="bg-white border border-gray-300 text-gray-700 font-bold px-4 py-2 rounded-full hover:bg-gray-100 transition duration-300">
              {button2Text || "Leer más"}
            </button>
          </div>
        </div>
      </div>
      <Image
        src={imageSrc || "/images/Colegio.jpg"}
        width={imageWidth}
        height={imageHeight}
        style={{ objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        alt="Image"
      />
    </div>
  );
}

