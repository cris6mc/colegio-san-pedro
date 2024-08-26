import React from 'react';
import Image from 'next/image';

function Objetivo({ image, title, description, color, row}) {
    return (
        <div className={`flex ${row} mx-8 justify-center`}>
            <Image
                src={image}
                width={250}
                height={120}
            />
            <div className={`${color} flex-col items-center h-46 w-2/4`}>
                <hr className="border-t-2 border-white mx-10 my-10" />
                <h1 className='text-center font-bold text-2xl text-white'>{title}</h1>
                <h2 className='text-center justify-center text-white'>{description}</h2>
                <hr className="border-t-2 border-white mx-10 my-10" />
            </div>
        </div>
    )
}

export default Objetivo


