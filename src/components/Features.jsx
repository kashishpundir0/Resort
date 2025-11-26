import React from "react";
import { FaMountain, FaSpa, FaUtensils, FaWifi } from "react-icons/fa";
import { motion } from "framer-motion";

const Features = () => {
  const featureList = [
    {
      icon: <FaMountain size={40} />,
      title: "Scenic Mountain Views",
      desc: "Wake up to breathtaking Himalayan landscapes from your room.",
    },
    {
      icon: <FaSpa size={40} />,
      title: "Luxury Spa",
      desc: "Relax with rejuvenating spa & wellness therapies.",
    },
    {
      icon: <FaUtensils size={40} />,
      title: "Fine Dining",
      desc: "Enjoy multi-cuisine gourmet meals prepared by expert chefs.",
    },
    {
      icon: <FaWifi size={40} />,
      title: "Free High-Speed WiFi",
      desc: "Stay connected with our complimentary high-speed internet.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose <span className="text-indigo-600">Wisteria Chalet?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {featureList.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2, // stagger
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-gray-50 p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <div className="text-indigo-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Features;
