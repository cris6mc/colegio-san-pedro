import React from 'react';

const GradientLabel = ({ title, width, textAlign,justifyContent,color="white",borderRadius="0" }) => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #E9E576, #A8DFA3, #0C95DE)', // Updated to use a valid CSS gradient
        display: 'flex',
        justifyContent: justifyContent, 
        paddingLeft: '5rem',      
        borderRadius: borderRadius,
        textAlign: textAlign,
        color: color,
        width: width,
    };

    return (
        <div style={gradientStyle}>
            <h2 className='text-[4rem] font-semibold'>{title}</h2>
        </div>
    );
};

export default GradientLabel;
