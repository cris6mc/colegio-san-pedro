"use client";
import React from 'react';
import Activities from '@/components/Activities';


function Noticias() {
  return (
    <div className='flex flex-col'>
      <Activities coleccion={"noticias"}/>
      <Activities coleccion={"logros"}/>
    </div>
  )
}

export default Noticias;