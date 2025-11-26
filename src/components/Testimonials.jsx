import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Sharma",
    review:
      "An unforgettable experience! The rooms are beautiful and the mountain views are magical.",
  },
  {
    name: "Priya Mehta",
    review:
      "The hospitality at Wisteria Chalet is unmatched. The spa and food were outstanding!",
  },
  {
    name: "Rohit Gupta",
    review:
      "Perfect weekend getaway. Calm, peaceful, and luxurious. Definitely visiting again.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          What Our Guests <span className="text-indigo-600">Say</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg p-8 rounded-xl text-center hover:shadow-2xl transition"
            >
              <p className="text-gray-600 text-lg mb-4">"{item.review}"</p>
              <h4 className="text-indigo-600 font-semibold text-xl">{item.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
