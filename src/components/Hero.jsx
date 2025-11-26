import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}
    >

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-black/40 p-10 rounded-xl text-center text-white"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Wisteria Chalet</h1>
        <p className="text-xl">Luxury • Peace • Mountain View</p>
      </motion.div>

    </section>
  );
};

export default Hero;
