import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 text-center transition-colors duration-300">
      <p>
        📞 Call Us:{" "}
        <a href="tel:+918744862991" className="underline text-blue-400 hover:text-blue-500">
          +91-8744862991
        </a>
      </p>
      <p>
        📧 Email:{" "}
        <a
          href="mailto:coreledger.Services@gmail.com"
          className="underline text-blue-400 hover:text-blue-500"
        >
          coreledger.Services@gmail.com
        </a>
      </p>
      <p>
        🟢 Join my WhatsApp group:{" "}
        <a
          href="https://chat.whatsapp.com/F9R3UL3ddmD3339u9mbTfv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-500"
        >
          Click here
        </a>
      </p>
      
      <p className="mt-4 text-sm text-gray-300 dark:text-gray-400">
        📍 Address: SK 79, First Floor, Sector 116, Noida-201301, Uttar Pradesh
      </p>

      <div className="mt-4 space-x-4">
        <a
          href="https://forms.gle/voda36vWKc41Ysq47"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          📅 Book Your Free Consultation
        </a>
        <Link
          to="/contact"
          className="inline-block border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black dark:hover:text-gray-900 transition"
        >
          Contact Us
        </Link>
      </div>
    </footer>
  );
};

export default Footer;