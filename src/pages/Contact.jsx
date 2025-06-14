import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      className="mt-20 px-4 py-10 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="mb-4 text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Have questions or ready to get started? Reach out to us!
      </motion.p>

      <motion.div
        className="space-y-4 text-gray-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p>📞 <strong>Phone:</strong>{' '}
          <a href="tel:+918744862991" className="text-blue-600">+91-8744862991</a>
        </p>
        <p>📧 <strong>Email:</strong>{' '}
          <a href="mailto:coreledger.Services@gmail.com" className="text-blue-600">coreledger.Services@gmail.com</a>
        </p>
        <p>📅 <strong>Book Consultation:</strong>{' '}
          <a
            href="https://forms.gle/voda36vWKc41Ysq47"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 underline text-blue-600"
          >
            Fill Form
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
