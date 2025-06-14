import React from 'react';

const About = () => {
  return (
    <div className="mt-20 px-4 py-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About CoreLedger Services</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">Our Story</h2>
        <p className="mt-2 text-gray-700">
          CoreLedger Services was founded to simplify tax and compliance for startups, freelancers, and small businesses. With years of experience, we provide clarity, efficiency, and personal care in accounting.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold">Our Mission</h2>
        <p className="mt-2 text-gray-700">
          To empower businesses with reliable, accessible, and timely accounting and compliance services — all virtually.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Our Team</h2>
        <div className="mt-4 space-y-4">
          <div>
            <strong>Sumit Kumar Dubey</strong> — Founder<br />
            Semi Qualified CMA, B.Com<br />
            5+ years in Income Tax, GST, MCA Compliance
          </div>
          <div>
            <strong>Altaf Hussain</strong> — Partner<br />
            B.Com (Hons)<br />
            4+ years in Tax, Compliance, Reconciliation
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
