import React, { useState, useRef } from 'react';

const BlogPreview = () => {
  const [showDetails, setShowDetails] = useState(false);
  const detailsRef = useRef(null);

  const handleToggle = () => {
    setShowDetails(prev => !prev);
    if (!showDetails) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    }
  };

  const placeholderImg = "https://www.quickhelp.lk/wp-content/uploads/2023/08/image-removebg-preview-1.png";

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-4 transition-colors duration-300">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Expert Accounting and Tax Consultancy Services
        </h2>
        <p className="mt-4 bg-white dark:bg-blue-400 text-gray-700 dark:text-black py-3 px-4 rounded inline-block transition-colors duration-300">
          We offer professional accounting and tax consultancy services to help you manage your finances efficiently.
        </p>
      </div>

      {/* Toggle Button */}
      <div className="mt-10 text-center">
        <button
          onClick={handleToggle}
          className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition"
        >
          {showDetails ? '🔽 Show Less' : '👉 Read More'}
        </button>
      </div>

      {/* Expanded Content */}
      {showDetails && (
        <div ref={detailsRef} className="space-y-12 mt-12">
          {/* Image + Story/Mission */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkxMDAyMXw&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Accounting workspace with laptop and calculator"
                className="rounded-lg w-full h-auto object-cover shadow-xl"
              />
            </div>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🔹 Our Story</h3>
                <p className="leading-relaxed">
                  CoreLedger Services was founded with a vision to simplify tax and compliance for startups, freelancers, and small businesses. With years of industry expertise, we bring clarity, efficiency, and personalized care to each client’s financial journey.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">🔹 Our Mission</h3>
                <p className="leading-relaxed">
                  To empower businesses with reliable, accessible, and timely accounting and compliance services — all virtually.
                </p>
              </div>
            </div>
          </div>

          {/* Team Profiles */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Profile 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <img
                  src={placeholderImg}
                  alt="Sumit Kumar Dubey"
                  className="w-24 h-24 rounded-full object-contain mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Sumit Kumar Dubey</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Founder, Semi Qualified CMA</p>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                5+ years of hands-on experience in Income Tax, GST, MCA compliance, reconciliations, and financial reporting. He specializes in tax consultancy and financial planning.
              </p>
              <div className="mt-4 flex justify-center space-x-4 text-gray-600 dark:text-gray-400">
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col items-center text-center">
                <img
                  src={placeholderImg}
                  alt="Altaf Hussain"
                  className="w-24 h-24 rounded-full object-contain mb-4"
                />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Altaf Hussain</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Partner</p>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                3+ years of hands-on experience in Income Tax, GST, MCA compliance, reconciliations, and financial reporting. He ensures that all financial records are accurate and helps clients navigate complex tax regulations.
              </p>
              <div className="mt-4 flex justify-center space-x-4 text-gray-600 dark:text-gray-400">
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fab fa-twitter fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPreview;
