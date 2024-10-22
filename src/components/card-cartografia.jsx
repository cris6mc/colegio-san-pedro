import { useState } from 'react';
import Image from 'next/image';

function CardCartografia({ ImageSRC, Title, Author, Grade, Description, showAuthor = true, showGrade = true }) {
    const [isHovered, setIsHovered] = useState(false);

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text || '';
    };

    return (
        <div
            className={`flex flex-col justify-center items-center w-[300px] min-h-[450px] p-4 rounded-xl border-gray-300 border-2 shadow-lg transition-all duration-500 ease-in-out 
            ${isHovered ? 'bg-gradient-to-r from-[#D682E3] via-[#E9E576] to-[#C3E8FC]' : 'bg-white'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image
                className="rounded-lg"
                src={"/images/LOGO.png"}
                alt={Title}
                width={150}
                height={150}
                style={{ borderRadius: '0.75rem', objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
            />
            <h1 className="font-bold text-xl text-center mt-4">{Title}</h1>
            {showAuthor && <p className="text-gray-600">Autor: {Author}&nbsp;</p>}
            {showGrade && <p className="text-gray-600">Grado: {Grade}&nbsp;</p>}
            <p className="text-gray-800 text-sm text-center mt-2">
                Descripción:
                <br />
                {truncateText(Description, 100)}
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white text-xs py-2 px-4 rounded-full flex items-center space-x-2">
                <span>Leer más</span>
                <span>&rarr;</span>
            </button>
        </div>
    );
}

export default CardCartografia;