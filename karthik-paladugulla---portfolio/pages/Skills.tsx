import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../types';

const skillData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind", level: 80 },
    ]
  },
  {
    category: "Backend & DB",
    skills: [
      { name: "Django", level: 85 },
      { name: "Flask", level: 80 },
      { name: "MySQL", level: 85 },
    ]
  },
  {
    category: "AI & Tools",
    skills: [
      { name: "Scikit-Learn", level: 80 },
      { name: "Git/GitHub", level: 90 },
      { name: "DSA (Java)", level: 75 },
    ]
  }
];

const Skills = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">Technical <span className="text-indigo-500">Expertise</span></h2>
        <p className="text-slate-400 max-w-xl mx-auto">A comprehensive overview of my technical skills and proficiency levels across various domains.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillData.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-indigo-500/30 transition-colors"
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-indigo-500 rounded-full"></span>
              {cat.category}
            </h3>

            <div className="space-y-6">
              {cat.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-200">{skill.name}</span>
                    <span className="text-indigo-400 font-mono text-xs">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 + (idx * 0.1) }}
                      className="bg-indigo-500 h-full rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;