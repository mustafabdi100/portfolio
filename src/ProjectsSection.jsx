import React from 'react';
import { motion } from 'framer-motion';

const ProjectsSection = () => (
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "EcoTrack",
          desc: "A full-stack application for monitoring and reducing carbon footprints.",
          tech: "React, Django, PostgreSQL, AWS"
        },
        {
          title: "CodeCollab",
          desc: "Real-time collaborative coding platform with video chat integration.",
          tech: "Next.js, Flask, WebRTC, Docker"
        },
        {
          title: "FinWise",
          desc: "AI-powered financial planning and investment recommendation system.",
          tech: "React, TensorFlow.js, Node.js, MongoDB"
        },
      ].map((project, index) => (
        <motion.div
          key={index}
          className="cyber-card p-6 bg-gradient-to-br from-blue-900 to-purple-900"
          whileHover={{ scale: 1.05, rotateY: 5 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <img src="https://images.pexels.com/photos/25955427/pexels-photo-25955427/free-photo-of-a-close-up-of-a-white-flower-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt={project.title} className="w-full h-40 object-cover mb-4 rounded" />
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="mb-4">{project.desc}</p>
          <p className="text-sm text-cyan-400">{project.tech}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ProjectsSection;
