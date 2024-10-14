import React from 'react'
import ContactForm from './ContactForm'

function Contact() {
    return (
        <div className='justify-center' style={{ background: 'linear-gradient(to right, rgba(214, 130, 227, 0.28), rgba(233, 229, 118, 0.66), rgba(195, 232, 252, 1))', padding: '5rem 5rem 9rem 5rem' }}>
            <p className='text-center'>¿TIENES PREGUNTAS?</p>
            <h1 className='text-center font-bold text-2xl my-4'>Contáctanos</h1>
            <div className='flex flex-row justify-center items-center gap-32'>
                <div>
                    <h1 className='justify-start mx-5'>
                        Direccion: <br />
                        Av. Chupaca N° 471 <br /> <br />
                        Telefono: <br />
                        064-234567 <br /> <br />
                        Email: <br />
                        sanpedrodejaujo@gmail.com
                    </h1>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact