import Objetivo from '@/components/Objetivo'
import React from 'react'

function PageObjetivos() {
    return (
        <div>
            <div className='py-8 mx-10 mb-8 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <h1 className="text-5xl font-bold text-center text-white">NUESTROS OBJETIVOS</h1>
            </div>
            <Objetivo
                image={"/images/Colegio2.jpg"}
                title={"Visión"}
                description={"lorem kdgvkudgfuyagdfugaesfygUYSYGFdfzgkjdvfkgdvfhkgdvfh  kdrgf  rdu fyg ku AEUYGEARU"}
                color={"bg-green-400"}
                row={"flex-row"}
            />
            <Objetivo
                image={"/images/Colegio2.jpg"}
                title={"Visión"}
                description={"lorem kdgvkudgfuyagdfugaesfygUYSYGFAEUYGEARU"}
                color={"bg-orange-500"}
                row={"flex-row-reverse"}
            />

            <div className='py-8 mx-10 mt-10 mb-2 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <h1 className="text-5xl font-bold text-center text-white">NUESTROS VALORES</h1>
            </div>
            <h2 className='text-2xl mx-10 text-justify'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium iure eum maiores ut est corporis quisquam autem, dicta doloremque laboriosam facilis assumenda omnis incidunt harum amet recusandae ea ullam eaque unde voluptates ab dolore magni non! Dolorum in repellat non quam, libero ratione porro vel delectus. Odit debitis ipsa earum!
            </h2>
            <Objetivo
                image={"/images/Colegio2.jpg"}
                title={"Visión"}
                description={"lorem kdgvkudgfuyagdfugaesfygUYSYGFdfzgkjdvfkgdvfhkgdvfh  kdrgf  rdu fyg ku AEUYGEARU"}
                color={"bg-green-400"}
                row={"flex-row"}
            />
            <Objetivo
                image={"/images/Colegio2.jpg"}
                title={"Visión"}
                description={"lorem kdgvkudgfuyagdfugaesfygUYSYGFAEUYGEARU"}
                color={"bg-orange-500"}
                row={"flex-row-reverse"}
            />
            <Objetivo
                image={"/images/Colegio2.jpg"}
                title={"Visión"}
                description={"lorem kdgvkudgfuyagdfugaesfygUYSYGFdfzgkjdvfkgdvfhkgdvfh  kdrgf  rdu fyg ku AEUYGEARU"}
                color={"bg-green-400"}
                row={"flex-row"}
            />
            <Objetivo
                image={"/images/Colegio2.jpg"}
                title={"Visión"}
                description={"lorem kdgvkudgfuyagdfugaesfygUYSYGFAEUYGEARU"}
                color={"bg-orange-500"}
                row={"flex-row-reverse"}
            />
            <Objetivo
                image={"/images/Colegio2.jpg"}
                title={"Visión"}
                description={"lorem kdgvkudgfuyagdfugaesfygUYSYGFdfzgkjdvfkgdvfhkgdvfh  kdrgf  rdu fyg ku AEUYGEARU"}
                color={"bg-green-400"}
                row={"flex-row"}
            />
            <Objetivo
                image={"/images/Colegio2.jpg"}
                title={"Visión"}
                description={"lorem kdgvkudgfuyagdfugaesfygUYSYGFAEUYGEARU"}
                color={"bg-orange-500"}
                row={"flex-row-reverse"}
            />
            <div className='h-20'></div>
        </div>
    )
}

export default PageObjetivos