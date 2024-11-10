import React from "react";
import { FaCartPlus, FaHeart, FaPhone } from "react-icons/fa";
import Image from "next/image";

function CardProfile({ nombre, image, cargo, telefono, email }) {
  return (
    <div className="flex flex-col border rounded-lg justify-center items-center px-2 py-6 hover:bg-gradient-to-r from-gray-200 to-blue-100 max-h-[30vh] md:max-h-80">
      <h1 className="p-2 flex justify-center">{nombre.toUpperCase()}</h1>
      <div className="flex flex-row gap-4 border-dashed border-gray-400 border-t-2 pt-4">
        <div className="max-w-[150px]">
          <Image
            className=" object-cover max-h-[120px]"
            src={image || "/images/LOGO.png"}
            alt={nombre}
            width={120}
            height={120}
            unoptimized
          />
        </div>
        <div className="flex flex-col justify-center gap-6">
          <h1>{cargo.toUpperCase()}</h1>
          <div className="flex flex-row">
            <FaCartPlus />
            <h1 className="ml-4 overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
              {email}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProfile;
