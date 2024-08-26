import React from 'react'
import Image from 'next/image'

function PageHistoria() {
    return (
        <div>
            <div className='py-8 mx-10 h-18 items-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <h1 className="text-5xl font-bold text-center text-white">HISTORIA</h1>
            </div>
            <div style={{ backgroundImage: "url(/images/Colegio3.jpg)" }}
                className='flex flex-row m-10 justify-center'>
                <h1 className='text-xl m-5 max-w-2xl text-justify'>
                    <p className='font-normal text-center text-4xl'>Nuestra Historia</p>Bienvenido a la pagina de la escuela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi reiciendis exercitationem dolor voluptatem dolorem ipsum! Atque dolorum quia cumque exercitationem error ullam, at distinctio impedit harum unde ipsum cum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quis eum provident ratione nam. Velit sit ratione mollitia repellendus tenetur ab consequatur sed minima praesentium dolore fugiat eligendi quod saepe sint, labore rem perspiciatis nesciunt laborum culpa laudantium ipsam ullam. Tenetur in animi, perferendis totam obcaecati nesciunt alias unde reprehenderit id, nam provident eos! Fugit, quo. Amet iusto eum nisi quisquam obcaecati eius harum assumenda perferendis voluptas laboriosam dolorem nihil velit, similique, totam sed dolore recusandae. Laboriosam nihil odio obcaecati quisquam enim esse pariatur consequatur aperiam fugiat unde voluptas qui quae officia est, molestias tenetur incidunt et dolorum. Expedita, tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore officiis optio labore at velit doloremque ipsam ad distinctio quibusdam explicabo, vero culpa placeat, repellendus, recusandae suscipit nemo eligendi praesentium! Accusamus, laborum qui eius deleniti dignissimos aliquid modi repellendus. Iure qui nulla corporis hic aliquid esse! Magni eaque voluptate aliquid perferendis sit molestiae impedit tempora quod quidem dicta quasi voluptates iure sequi assumenda, ratione ipsum unde quam est repudiandae quae soluta voluptatibus amet libero? Iusto enim nulla commodi pariatur odio repellat! Cum blanditiis temporibus dolorem aliquid odio debitis consequatur alias quasi eveniet adipisci dolores illum, ea accusamus fugit veniam distinctio!
                </h1>
            </div>

            <div className='flex flex-row m-10 justify-center bg-gradient-to-r from-yellow-200 via-green-300 to-blue-400'>
                <Image
                    src="/images/Colegio2.jpg" // Ruta de la imagen en la carpeta public
                    alt="Logo"
                    width={200} // Ancho de la imagen
                    height={120} // Altura de la imagen
                // className="border-4 border-gray-300"
                />
                <div className='justify-center items-center'>
                    <h1 className='text-2xl m-5 max-w-lg justify-center text-center'>
                        Bienvenido a la pagina de la escuela Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat sequi reiciendis exercitationem dolor voluptatem dolorem ipsum! Atque dolorum quia cumque exercitationem error ullam, at distinctio impedit harum unde ipsum cum?
                    </h1>
                </div>
            </div>
            <div className='h-10'></div>
        </div>
    )
}

export default PageHistoria