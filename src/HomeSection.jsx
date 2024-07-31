import React from 'react';
import { motion } from 'framer-motion';

const HomeSection = () => (
  <div className="text-center">
    <motion.h1 
      className="text-6xl font-bold mb-4"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      Mustafa Abdi
    </motion.h1>
    <motion.p 
      className="text-2xl text-cyan-400 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      Full-Stack Developer & Tech Innovator
    </motion.p>
    <motion.a
      href="#contact"
      className="cyber-button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Let's Connect
    </motion.a>
  </div>
);

export default HomeSection;
