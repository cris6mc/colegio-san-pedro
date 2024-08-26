import React from 'react'
import Card from './Card'

function Activities() {
  return (
    <div className='justify-center flex'>
        <div>
            <h1 className='text-center font-bold text-2xl'>Actividades Institucionales</h1>
          <div className='flex flex-row'>
            <Card 
            ImageSRC={"/images/LOGO.png"}
            Title={"Titulo de la actividad"}
            Description={"Descripcion de la actividad"}
            isButton={true}
            />
            <Card 
            ImageSRC={"/images/LOGO.png"}
            Title={"Titulo de la actividad"}
            Description={"Descripcion de la actividad"}
            isButton={true}
            />
            <Card 
            ImageSRC={"/images/LOGO.png"}
            Title={"Titulo de la actividad"}
            Description={"Descripcion de la actividad"}
            isButton={true}
            />
        </div>  
        </div>
        
    </div>
  )
}

export default Activities