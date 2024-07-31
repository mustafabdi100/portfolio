import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ProjectsSection from './ProjectsSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

const ImmersivePortfolio = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['home', 'about', 'projects', 'skills', 'contact'];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const handleScroll = useCallback(debounce((e) => {
    if (e.deltaY > 0) {
      // Scrolling down
      const nextSectionIndex = Math.min(sections.indexOf(currentSection) + 1, sections.length - 1);
      setCurrentSection(sections[nextSectionIndex]);
    } else {
      // Scrolling up
      const prevSectionIndex = Math.max(sections.indexOf(currentSection) - 1, 0);
      setCurrentSection(sections[prevSectionIndex]);
    }
  }, 100), [currentSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('wheel', handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white font-futuristic">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 255, 0.3), transparent 25%)`,
          transition: 'background 0.3s ease',
        }}
      />

      {/* Hamburger Menu */}
      <div className="fixed top-4 right-4 z-50">
        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Navigation Orbs */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 z-50">
        {sections.map((section, index) => (
          <motion.div
            key={section}
            className={`w-4 h-4 mb-4 rounded-full cursor-pointer ${currentSection === section ? 'bg-cyan-400' : 'bg-gray-600'}`}
            whileHover={{ scale: 1.5, backgroundColor: '#22d3ee' }}
            onClick={() => setCurrentSection(section)}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ delay: index * 0.1 }}
          />
        ))}
      </div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-40"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col space-y-6 text-center">
              {sections.map((section, index) => (
                <motion.button
                  key={section}
                  className="text-2xl uppercase text-cyan-400"
                  onClick={() => {
                    setCurrentSection(section);
                    toggleMenu();
                  }}
                  whileHover={{ scale: 1.1, color: '#22d3ee' }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full flex items-center justify-center"
        >
          {currentSection === 'home' && <HomeSection />}
          {currentSection === 'about' && <AboutSection />}
          {currentSection === 'projects' && <ProjectsSection />}
          {currentSection === 'skills' && <SkillsSection />}
          {currentSection === 'contact' && <ContactSection />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ImmersivePortfolio;
