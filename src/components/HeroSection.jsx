import React, { useState } from 'react';

const HeroSection = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);

  const handleToggle = () => {
    setShowLearnMore(true); // Learn More clicked → show new paragraph
  };

  return (
    <section className="text-center py-12 px-4 bg-gray-100 dark:bg-gray-900 mt-16 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        Welcome to our accounting and tax consultancy services
      </h1>

      {/* Intro paragraph */}
      {!showLearnMore && (
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-opacity duration-500">
          Welcome to CoreLedger Services – your trusted partner for virtual accounting, tax filing, and business compliance. 
          We make taxes simple, GST hassle-free, and MCA filings smooth — so you can focus on growing your business.
        </p>
      )}

      {/* Learn More paragraph */}
      {showLearnMore && (
        <p className="mt-4 text-lg text-blue-800 dark:text-blue-300 max-w-2xl mx-auto transition-opacity duration-500">
          We offer professional accounting and tax consultancy services to help you manage your finances efficiently.
        </p>
      )}

      {/* Learn More button */}
      {!showLearnMore && (
        <div className="mt-6">
          <button
            onClick={handleToggle}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
