import React from 'react';

const Services = () => {
  return (
    <div className="mt-20 px-4 py-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold">🧾 Income Tax Services</h2>
        <ul className="list-disc ml-5 text-gray-700 mt-2">
          <li>File ITR / Revised / Updated Returns</li>
          <li>Tax Planning & Saving Consultation</li>
          <li>Advance Tax Filing</li>
          <li>TDS Filing & PAN Services</li>
          <li>Tax Notice Response, SFT Filing</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold">📦 GST Services</h2>
        <ul className="list-disc ml-5 text-gray-700 mt-2">
          <li>GST Registration & Return Filing</li>
          <li>e-Invoicing & e-Way Bill</li>
          <li>Annual GST Returns</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">🏢 MCA & Compliance</h2>
        <ul className="list-disc ml-5 text-gray-700 mt-2">
          <li>Company/LLP Incorporation</li>
          <li>Annual Return Filing (AOC-4, MGT-7)</li>
          <li>Director Appointments, Charge Filings</li>
          <li>Other MCA Forms & Changes</li>
        </ul>
      </section>
    </div>
  );
};

export default Services;
