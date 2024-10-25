"use client";
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Configura los parámetros para EmailJS
    const templateParams = {
      from_name: formData.nombre,
      to_name: 'Cristian',
      from_email: formData.email,
      message: formData.mensaje
    };

    emailjs.send('service_s13ah7t', 'template_cmsk2mv', templateParams, 'X3kmGa5Wf3ja30_2g')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito!');
        setFormData({
          nombre: '',
          email: '',
          mensaje: ''
        });
      }, (error) => {
        console.error('FAILED...', error);
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-blue-100 p-6 rounded-lg space-y-4 w-[524.28px]">
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <textarea
        name="mensaje"
        placeholder="Mensaje *"
        value={formData.mensaje}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded resize-none"
        rows="4"
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full flex items-center justify-center space-x-2">
        <FaCheck/>
        <span>Enviar Mensaje</span>
      </button>
    </form>
  );
};

export default ContactForm;
