import React from 'react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CPA',
    image:
      'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkxMDc4OXw&ixlib=rb-4.1.0&q=80&w=1080',
    feedback:
      'CoreLedger has been a game-changer for our books—accurate, reliable, and always on time!',
  },
  {
    name: 'Emily Johnson',
    role: 'Bookkeeper',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0NzkxMDc4OHw&ixlib=rb-4.1.0&q=80&w=1080',
    feedback:
      'Their virtual accounting service saved me hours every month. Highly recommended!',
  },
  {
    name: 'Vikram Sinha',
    role: 'E‑commerce Seller',
    image:
      'https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    feedback:
      'From GST filing to MCA compliance—CoreLedger handles it all smoothly. No more last‑minute stress!',
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          ❤️ What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            >
              {/* Profile Image */}
              <div className="flex items-center mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                </div>
              </div>
              {/* Feedback */}
              <p className="text-gray-700 dark:text-gray-300">“{t.feedback}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
