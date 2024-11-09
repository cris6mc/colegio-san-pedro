import React from "react";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center p-8 sm:p-16 md:p-20 lg:p-24"
      style={{
        background:
          "linear-gradient(to right, rgba(214, 130, 227, 0.28), rgba(233, 229, 118, 0.66), rgba(195, 232, 252, 1))",
      }}
    >
      <p className="text-center text-lg sm:text-xl md:text-2xl">
        ¿TIENES PREGUNTAS?
      </p>
      <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl my-4">
        Contáctanos
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-32">
        <div className="text-center lg:text-left">
          <h1 className="mx-5 text-lg sm:text-xl md:text-2xl">
            Dirección: <br />
            Av. Chupaca N° 471 <br /> <br />
            Teléfono: <br />
            064-234567 <br /> <br />
            Email: <br />
            sanpedrodejaujo@gmail.com
          </h1>
        </div>
        <div className="w-full lg:w-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
