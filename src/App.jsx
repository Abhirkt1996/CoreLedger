import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // (Optional) Persist dark mode in localStorage
  useEffect(() => {
    const storedPreference = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedPreference);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0a0a3c] text-gray-800 dark:text-white transition-colors duration-300">
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
