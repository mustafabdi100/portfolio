import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => (
  <div className="max-w-2xl mx-auto px-4 py-12 text-center">
    <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
    <p className="mb-8">Interested in collaborating or have a project in mind? Let's talk!</p>
    <form className="space-y-4 relative z-10">
      <input
        type="text"
        placeholder="Your Name"
        className="w-full p-2 bg-gray-800 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full p-2 bg-gray-800 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <textarea
        placeholder="Your Message"
        rows="4"
        className="w-full p-2 bg-gray-800 border border-cyan-400 rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
      ></textarea>
      <motion.button
        type="submit"
        className="bg-gradient-to-r from-purple-600 to-cyan-600 w-full py-2 text-white rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(0, 255, 255, 0.5)" }}
      >
        Send Message
      </motion.button>
    </form>
  </div>
);

export default ContactSection;
