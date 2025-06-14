import React from 'react';

const services = [
  {
    title: 'Tax Planning',
    description: 'Expert tax planning services tailored to your specific financial situation.',
  },
  {
    title: 'Financial Consulting',
    description: 'Professional financial consulting to help you make informed decisions for your business.',
  },
  {
    title: 'Bookkeeping Services',
    description: 'Accurate and efficient bookkeeping services to keep your financial records in order.',
  },
];

const ServiceFeatures = () => {
  return (
    <section className="bg-[#0a0a3c] dark:bg-gray-900 text-white py-16 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🧾 Left: Service List */}
        <div>
          <h2 className="text-3xl font-bold mb-10 text-white dark:text-white">
            💼 Our Core Services
          </h2>
          {services.map((service, index) => (
            <div key={index} className="mb-8 border-l-4 border-white pl-4">
              <h3 className="text-2xl font-semibold mb-2 text-white dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 dark:text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>

        {/* 🖼️ Right: Image */}
             <div className="w-full">
  <img
    src="https://images.unsplash.com/photo-1532102522784-9e4d4d9a533c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkxMDAyMHw&ixlib=rb-4.1.0&q=80&w=1080"
    alt="Service Showcase"
    className="rounded-lg w-full h-auto object-cover shadow-xl"
  />
</div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
