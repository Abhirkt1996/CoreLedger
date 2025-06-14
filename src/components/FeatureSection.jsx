import React from 'react';

const features = [
  {
    title: 'Virtual Accounting That Saves Time',
    description:
      'Focus on growing your business while we handle your books virtually with accuracy, clarity, and compliance.',
  },
  {
    title: 'Expert-Led Tax & GST Filing',
    description:
      'With 5+ years in Income Tax, GST & audits, we make sure your taxes are filed on time and you get every benefit you deserve.',
  },
  {
    title: 'Seamless MCA & Compliance',
    description:
      'From company setup to annual MCA filings — we handle your compliance like a pro, so you never miss a deadline.',
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[#0a0a3c] dark:bg-gray-900 text-white dark:text-white py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div>
          <h2 className="text-3xl font-bold mb-8">
            🚀 Why Businesses Choose CoreLedger
          </h2>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
            alt="Man working at desk"
            className="rounded-lg w-full h-auto object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
