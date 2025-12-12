import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-4xl font-bold mb-4 text-white">
            Let's <span className="text-indigo-500">Connect</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="space-y-4">
          <a href="#" className="flex items-center gap-4 p-4 glass-panel rounded-2xl hover:border-indigo-500/50 transition-colors group">
            <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Mail />
            </div>
            <div>
              <h3 className="font-bold text-slate-200">Email</h3>
              <p className="text-sm text-slate-500">contact@karthik.dev</p>
            </div>
          </a>
          
          <a href="#" className="flex items-center gap-4 p-4 glass-panel rounded-2xl hover:border-indigo-500/50 transition-colors group">
            <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Linkedin />
            </div>
            <div>
              <h3 className="font-bold text-slate-200">LinkedIn</h3>
              <p className="text-sm text-slate-500">linkedin.com/in/karthikp</p>
            </div>
          </a>

          <a href="#" className="flex items-center gap-4 p-4 glass-panel rounded-2xl hover:border-indigo-500/50 transition-colors group">
            <div className="p-3 bg-indigo-500/10 rounded-full text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
              <Github />
            </div>
            <div>
              <h3 className="font-bold text-slate-200">GitHub</h3>
              <p className="text-sm text-slate-500">github.com/karthikp</p>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-panel p-8 rounded-3xl border border-white/5"
      >
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Name</label>
            <input 
              type="text" 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Email</label>
            <input 
              type="email" 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-400">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-3.5 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-600/20">
            <Send size={18} /> Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;