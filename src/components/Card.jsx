"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight, FaEdit } from "react-icons/fa";
import Link from "next/link";

function Card({
  ImageSRC,
  Title,
  Description,
  isButton,
  showAuthor = true,
  showGrade = true,
  Link,
}) {
  const [showModal, setShowModal] = useState(false);
  const [imageURL, setImageURL] = useState(ImageSRC);

  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const truncateText = (text, maxLength) => {
    if (!text) return "";
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center gap-2 w-[300px] min-h-[650px] px-4 py-2 rounded-xl border-gray-300 border-2 shadow-lg transition-all duration-500 ease-in-out 
            ${
              isHovered
                ? "bg-gradient-to-r from-[#D682E3] via-[#E9E576] to-[#C3E8FC]"
                : "bg-white"
            }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="rounded-lg"
          src={imageURL}
          alt={Title}
          width={150}
          height={150}
          unoptimized
          style={{
            borderRadius: "0.75rem",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "50%",
            marginBottom: "1rem", // Ajusta la altura según sea necesario
          }}
        />
        <h1 className="font-bold text-xl text-center">
          {truncateText(Title, 20)}
        </h1>
        <div className="text-gray-800 text-sm text-left max-w-[90%] overflow-hidden">
          Descripción:
          <p
            className="text-start text-[12px]"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {truncateText(Description, 100)}
          </p>
        </div>
        <div>
          <label>Enlace</label>
          <p>{Link}</p>
        </div>
        <div className="flex flex-row">
          {isButton && (
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded">
              <div className="flex flex-row items-center" onClick={handleClick}>
                <span className="mx-2">Leer más</span>
                <FaArrowRight />
              </div>
            </button>
          )}
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center relative bg-white p-6 rounded-lg max-h-[80vh] w-[95%] sm:w-[90vw] overflow-y-auto">
            <div className="flex flex-row mb-3 w-full justify-between items-center">
              <button
                className="bg-red-600 text-white px-3 py-1 rounded-full text-xl font-bold sticky top-0 left-0"
                onClick={handleCloseModal}
                style={{ zIndex: 1000 }}
              >
                X
              </button>
            </div>
            <Image
              className="rounded-2xl"
              src={imageURL}
              alt={Title}
              width={250}
              height={300}
              unoptimized
              style={{
                objectFit: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex flex-col m-3">
              <h3 className="font-bold">{Title}</h3>
              <span>{Description}</span>
            </div>
            <div>
              <a>{Link}</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
