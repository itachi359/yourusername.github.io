import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Github, Code } from 'lucide-react';

const projects: Project[] = [
  {
    id: "1",
    title: "EasyMed",
    pitch: "AI-Powered Healthcare Accessibility",
    techStack: ["Python", "Django", "AI Models", "Bootstrap"],
    problem: "Limited accessibility to quick medical diagnosis in rural areas.",
    solution: "An intelligent platform offering symptom analysis and connecting patients to nearby doctors.",
    image: "https://picsum.photos/seed/easymed/600/400"
  },
  {
    id: "2",
    title: "KalaaBazaar",
    pitch: "Digital Marketplace for Artisans",
    techStack: ["React", "Firebase", "Node.js"],
    problem: "Local artisans lack a global platform to sell unique crafts.",
    solution: "A seamless e-commerce bridge connecting creators directly with art lovers worldwide.",
    image: "https://picsum.photos/seed/kalaa/600/400"
  },
  {
    id: "3",
    title: "Performance Predictor",
    pitch: "Academic Forecasting System",
    techStack: ["Scikit-Learn", "Pandas", "Flask"],
    problem: "Identifying students at risk of academic failure early.",
    solution: "ML regression models analyzing attendance and past scores to predict future outcomes.",
    image: "https://picsum.photos/seed/perf/600/400"
  },
  {
    id: "4",
    title: "Solana DeFi Analytics",
    pitch: "Blockchain Data Visualization",
    techStack: ["React", "Solana Web3.js", "Chart.js"],
    problem: "Complexity in tracking real-time DeFi metrics on Solana.",
    solution: "A dashboard aggregating on-chain data for actionable investment insights.",
    image: "https://picsum.photos/seed/solana/600/400"
  },
  {
    id: "5",
    title: "Countdown App",
    pitch: "Dynamic Event Tracker",
    techStack: ["JavaScript", "CSS3", "Local Storage"],
    problem: "Managing multiple deadlines efficiently.",
    solution: "A lightweight, multi-event countdown timer with dynamic visualization.",
    image: "https://picsum.photos/seed/count/600/400"
  }
];

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Selected <span className="text-indigo-500">Works</span></h2>
        <p className="text-slate-400">A collection of projects exploring AI, Web Development, and Blockchain.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group glass-panel rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 flex flex-col"
          >
            <div className="relative h-56 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                 <h3 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-indigo-300 text-sm font-medium">{project.pitch}</p>
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="text-slate-400 text-sm mb-6 flex-1">
                <p className="mb-2"><strong className="text-slate-200">The Challenge:</strong> {project.problem}</p>
                <p><strong className="text-slate-200">The Solution:</strong> {project.solution}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map(tech => (
                  <span key={tech} className="text-xs px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-full text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <button className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-white text-sm font-medium transition-colors flex justify-center items-center gap-2">
                  <Github size={16} /> View Code
                </button>
                <button className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white text-sm font-medium transition-colors flex justify-center items-center gap-2">
                  <ExternalLink size={16} /> Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;