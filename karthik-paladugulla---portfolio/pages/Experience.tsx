import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Experience as ExperienceType } from '../types';

const experiences: ExperienceType[] = [
  {
    id: "1",
    role: "Campus Ambassador",
    company: "Student Tribe",
    period: "2023 - Present",
    description: [
      "Facilitated workshops bridging the gap between students and industry trends.",
      "Promoted tech literacy and organized hackathons.",
      "Increased community engagement by 40% through targeted campaigns."
    ]
  },
  {
    id: "2",
    role: "Insider & Technical Intern",
    company: "The Student Spot",
    period: "2022 - 2023",
    description: [
      "Collaborated with cross-functional teams to develop web modules.",
      "Provided technical support and optimized existing codebases.",
      "Gained hands-on experience in agile development methodologies."
    ]
  }
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto">
       <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-white">My <span className="text-indigo-500">Journey</span></h2>
        <p className="text-slate-400">Professional experience and leadership roles.</p>
      </div>

      <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 ring-4 ring-slate-950"></div>

            <div className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-indigo-400 font-medium mt-1">{exp.company}</h4>
                </div>
                <div className="text-slate-500 text-sm font-medium mt-2 md:mt-0 flex flex-col items-start md:items-end gap-1">
                  <span className="flex items-center gap-2"><Calendar size={14}/> {exp.period}</span>
                  <span className="flex items-center gap-2"><MapPin size={14}/> Hyderabad, IN</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 flex-shrink-0"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;