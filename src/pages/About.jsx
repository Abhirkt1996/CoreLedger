import React from 'react';
import { motion } from 'framer-motion';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const About = () => {
  return (
    <div className="mt-20 px-4 py-10 max-w-4xl mx-auto text-gray-800 dark:text-gray-200">
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
        className="text-4xl font-extrabold text-center mb-12"
      >
        About <span className="text-blue-600">CoreLedger Services</span>
      </motion.h1>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">🚀 Our Story</h2>
        <p className="text-lg leading-relaxed">
          CoreLedger Services was founded to simplify tax and compliance for startups, freelancers, and small businesses. With years of experience, we provide clarity, efficiency, and personal care in accounting.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
        className="mb-12"
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">🎯 Our Mission</h2>
        <p className="text-lg leading-relaxed">
          To empower businesses with reliable, accessible, and timely accounting and compliance services — all virtually.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariant}
      >
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">👥 Our Team</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Sumit Kumar Dubey</h3>
            <p className="mt-1 text-sm">Founder | Semi Qualified CMA, B.Com</p>
            <p className="mt-2 text-base leading-relaxed">
              5+ years in Income Tax, GST, MCA Compliance
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold">Altaf Hussain</h3>
            <p className="mt-1 text-sm">Partner | B.Com (Hons)</p>
            <p className="mt-2 text-base leading-relaxed">
              4+ years in Tax, Compliance, Reconciliation
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
