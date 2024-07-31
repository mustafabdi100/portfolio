import React from 'react';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiFlask, SiDjango, SiNextdotjs, SiPostgresql, SiMongodb, SiRedux, SiGraphql, SiWebpack, SiCypress, SiHtml5, SiCss3, SiTypescript, SiExpress, SiJest } from 'react-icons/si';

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "SQL", icon: <SiPostgresql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "RESTful APIs", icon: <SiExpress /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "GraphQL", icon: <SiGraphql /> },
  { name: "Webpack", icon: <SiWebpack /> },
  { name: "CI/CD", icon: <SiCypress /> },
  { name: "Agile Methodologies", icon: <SiJest /> },
  { name: "TDD", icon: <SiJest /> },
];

const SkillsSection = () => (
  <div className="w-full py-12 bg-gray-900 overflow-hidden">
    <h2 className="text-4xl font-bold mb-12 text-cyan-400 text-center">Technical Arsenal</h2>
    <div className="relative">
      <div className="flex animate-scroll">
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 h-64 mx-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg flex flex-col items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="text-6xl mb-4 text-cyan-400">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SkillsSection;