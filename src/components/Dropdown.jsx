"use client";
import React, { useState } from 'react'

function Dropdown({ text, children, translatex }) {
    const [isOpen, setIsOpen] = useState(false);
    const handleMouseEnter = () => {
        setIsOpen(true);
    }
    const handleMouseLeave = () => {
        setIsOpen(false);
    }

    return (
        <div className='flex relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className=" hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                {text}
            </button>
            {isOpen && (
                <div className={`absolute z-50 inset-x-1 top-0 transform translate-y-6 ${translatex} bg-white shadow-2xl mt-2 rounded`}>
                {children}
            </div>
            )}
        </div>
    )
}

export default Dropdown