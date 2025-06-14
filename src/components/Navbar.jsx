import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-md fixed w-full z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain rounded-full" />
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400">CoreLedger</span>
          </Link>

          {/* Center/Right Content */}
          <div className="flex items-center space-x-6">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
              <Link to="/services" className="hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
              <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
              <a
                href="https://forms.gle/voda36vWKc41Ysq47"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
              >
                Book Free Consultation
              </a>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-xl focus:outline-none hover:scale-110 transition-transform"
              title="Toggle Dark Mode"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Hamburger (Mobile only) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl focus:outline-none"
            >
              {isOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2 px-2 pb-4">
            <Link to="/" className="block hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/about" className="block hover:text-blue-600 dark:hover:text-blue-400">About</Link>
            <Link to="/services" className="block hover:text-blue-600 dark:hover:text-blue-400">Services</Link>
            <Link to="/contact" className="block hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            <a
              href="https://forms.gle/voda36vWKc41Ysq47"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 dark:hover:bg-blue-500"
            >
              Book Free Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
