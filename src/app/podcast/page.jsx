import Image from 'next/image'
import React from 'react'
import Link from 'next/link'



function PagePodcast() {
    return (
        <div>
            <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <h1 className="text-5xl font-bold text-center text-white">PODCAST</h1>
            </div>
            <h3 className='text-center my-4'>
                Misión: Concientización del medio ambiente
            </h3>

            <div className='flex flex-row m-10 justify-center mb-20'>
                <div className='justify-center items-center'>
                    <Link href='/podcast/episodio1'>
                        <Image
                            className='rounded-2xl'
                            src="/images/Colegio3.jpg"
                            alt="Colegio" 
                            width={250}
                            height={120}
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PagePodcast