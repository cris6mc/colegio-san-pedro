// import { FaPhone, FaEnvelope, FaTiktok, FaFacebook, FaInstagram } from 'react-icons/fa';
import React from 'react';
import { FaFacebook, FaHeart, FaSearch, FaTiktok } from 'react-icons/fa';


export default function Contacts() {
    return (
    <footer className="bg-blue-100 text-white py-1">
      <div className="container mx-auto flex justify-end items-center">
        <button className="bg-blue-600 text-white font-bold px-4 py-2 rounded-full mr-4">
          Intranet
        </button>
        <div className="flex items-center space-x-4">
          <FaSearch size={20} color="grey" />
          <FaFacebook size={20} color="grey"/>
          <FaTiktok size={20} color='grey'/>
        </div>
      </div>
    </footer>
  );
}

