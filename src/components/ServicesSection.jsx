import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    emoji: '🧾',
    title: 'Income Tax Services',
    description: 'ITR Filing, Tax Planning, Notice Resolution & More',
    link: '/services',
  },
  {
    emoji: '📦',
    title: 'GST Services',
    description: 'GST Registration, Return Filing, E-Invoicing',
    link: '/services',
  },
  {
    emoji: '🏢',
    title: 'MCA & Corporate Compliance',
    description: 'Company Registration, Annual Filings, MCA Forms',
    link: '/services',
  },
];

const ServicesSection = () => {
  return (
    <motion.section
      className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
        Our Services
      </h2>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border-t-4 border-blue-500"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {service.emoji} {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
            <a
              href={service.link}
              className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition"
            >
            
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;
