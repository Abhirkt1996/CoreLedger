import React, { useState } from 'react';

const HeroSection = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleToggle = () => {
    setShowLearnMore(true); // Once clicked, no going back as per your instruction
  };

  return (
    <section className="text-center py-12 px-4 bg-gray-100 dark:bg-gray-900 mt-16 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        Welcome to our accounting and tax consultancy services
      </h1>

      {/* Intro paragraph (only when Learn More not clicked) */}
      {!showLearnMore && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-opacity duration-500">
          Welcome to CoreLedger Services – your trusted partner for virtual accounting, tax filing, and business compliance. 
          We make taxes simple, GST hassle-free, and MCA filings smooth — so you can focus on growing your business.
        </p>
      )}

      {/* Extra paragraph when Learn More is clicked */}
      {showLearnMore && (
        <p className="mt-4 text-lg text-blue-800 dark:text-blue-300 max-w-2xl mx-auto transition-opacity duration-500">
          We offer professional accounting and tax consultancy services to help you manage your finances efficiently.
        </p>
      )}

      {/* Buttons */}
      <div className="mt-6 space-x-4">
        {!showLearnMore && (
          <button
            onClick={handleToggle}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        )}

        <a
          href="/contact"
          className="inline-block border border-blue-600 text-blue-600 px-5 py-2 rounded hover:bg-blue-50 transition"
        >
          📧 Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
