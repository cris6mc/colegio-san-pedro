"use client";
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    numero: '',
    mensaje: '',
    acepto: false
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
    // Lógica para enviar el formulario
    console.log(formData);
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
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          name="numero"
          placeholder="Número"
          value={formData.numero}
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
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="acepto"
          checked={formData.acepto}
          onChange={handleChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <label htmlFor="acepto">
          He leído las políticas de privacidad y acepto el uso de mis datos personales.
        </label>
      </div>
    </form>
  );
};

export default ContactForm;
