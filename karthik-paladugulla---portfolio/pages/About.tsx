import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brain, Code, Globe, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Bio Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-indigo-400 font-bold tracking-wider uppercase text-sm">
            <Zap size={16} /> About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Driven by Data,<br/> Inspired by <span className="text-indigo-500">Creativity.</span>
          </h2>
          <div className="space-y-4 text-slate-400 leading-relaxed text-lg">
            <p>
              I am a BTech student specializing in Artificial Intelligence and Machine Learning at Malla Reddy University, Hyderabad.
            </p>
            <p>
              My passion lies in bridging the gap between complex backend logic and intuitive frontend design. 
              Whether it's building predictive healthcare models like <strong className="text-slate-200">EasyMed</strong> or crafting marketplaces like KalaaBazaar, I aim to create impactful digital solutions.
            </p>
            <p className="border-l-4 border-indigo-500 pl-4 italic text-slate-300 my-6">
              "Code is my canvas. Intelligence is my medium."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-indigo-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative z-10 glass-panel p-8 rounded-3xl h-full flex flex-col justify-center gap-6 border border-white/10 shadow-2xl">
               <h3 className="text-2xl font-bold text-center mb-4 text-white">Core Focus</h3>
               <div className="flex items-center gap-4 group">
                 <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors"><Brain size={24}/></div>
                 <div>
                   <h4 className="font-bold text-white text-lg">Machine Learning</h4>
                   <p className="text-sm text-slate-400">Predictive Modeling & AI</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors"><Globe size={24}/></div>
                 <div>
                   <h4 className="font-bold text-white text-lg">Full Stack Web</h4>
                   <p className="text-sm text-slate-400">React, Django, Flask</p>
                 </div>
               </div>
               <div className="flex items-center gap-4 group">
                 <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors"><Cpu size={24}/></div>
                 <div>
                   <h4 className="font-bold text-white text-lg">Architecture</h4>
                   <p className="text-sm text-slate-400">Scalable Systems</p>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats/Values */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Problem Solver', val: '100%' },
          { label: 'Creative Thinker', val: 'MAX' },
          { label: 'Leadership', val: 'HIGH' },
          { label: 'Fast Learner', val: 'A++' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            className="glass-panel p-6 rounded-2xl text-center border border-white/5 hover:border-indigo-500/30 transition-all bg-slate-900/50"
          >
            <div className="text-3xl font-bold text-indigo-400 mb-1">{stat.val}</div>
            <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default About;