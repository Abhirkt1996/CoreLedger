import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-center py-12 px-4 bg-gray-100 dark:bg-gray-900 mt-16 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
        Smart Accounting, Seamless Compliance
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Welcome to CoreLedger Services – your trusted partner for virtual accounting, tax filing, and business compliance. 
        We make taxes simple, GST hassle-free, and MCA filings smooth — so you can focus on growing your business.
      </p>
      <div className="mt-6 space-x-4">
        <a
          href="https://"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
        >
          📞 Book a Free Consultation
        </a>
        <a
          href="/contact"
          className="inline-block border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-5 py-2 rounded hover:bg-blue-50 dark:hover:bg-gray-800 transition"
        >
          📧 Contact Us
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
