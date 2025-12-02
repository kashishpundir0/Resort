import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.webm" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center text-white p-10 rounded-xl"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Wisteria Chalet</h1>
        <p className="text-xl">Luxury • Peace • Mountain View</p>
      </motion.div>

    </section>
  );
};

export default Hero;
