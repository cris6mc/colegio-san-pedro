import React from 'react'
import Card from '@/components/Card'

function PageBienvenida() {
  return (
    <div>
        <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
            <h1 className="text-5xl font-bold text-center text-white">BIENVENIDA</h1>
        </div>
        <div className='flex flex-row m-10 justify-center'>
            <div className='justify-center items-center'>
               <h1 className='text-2xl m-5 max-w-2xl text-justify'>
                <p className='font-semibold text-center text-4xl'>Nuestra Institución</p>Bienvenido a la pagina de la escuela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi reiciendis exercitationem dolor voluptatem dolorem ipsum! Atque dolorum quia cumque exercitationem error ullam, at distinctio impedit harum unde ipsum cum? <br/>
                </h1>
            </div>
            <Card 
            ImageSRC={"/images/Director.png"}
            Title={"Director"}
            Description={"Mg. Kiko G. Astete Lopez"}
            />
        </div>
    </div>
  )
}

export default PageBienvenida