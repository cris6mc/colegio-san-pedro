import React from 'react';

const GradientLabel = ({ title }) => {
    const gradientStyle = {
        background: 'linear-gradient(-45deg, #E9E576 0%, #C3E8FC 100%)',
        display: 'flex',
        justifyContent: 'left', 
        paddingLeft: '5rem',      
        // borderRadius: '20px',
        textAlign: 'left',
        width: '80vw',
    };

    return (
        <div style={gradientStyle}>
            <h2 className='text-[4rem]  font-semibold'>{title}</h2>
        </div>
    );
};

export default GradientLabel;