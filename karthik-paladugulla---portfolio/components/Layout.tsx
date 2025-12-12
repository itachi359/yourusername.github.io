import React, { useState } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Code, Briefcase, Mail, MessageSquare, Monitor } from 'lucide-react';
import ThreeBackground from './ThreeBackground';
import { AnimatePresence, motion } from 'framer-motion';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/about', label: 'About', icon: <User size={18} /> },
    { path: '/skills', label: 'Skills', icon: <Code size={18} /> },
    { path: '/projects', label: 'Projects', icon: <Monitor size={18} /> },
    { path: '/experience', label: 'Journey', icon: <Briefcase size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={18} /> },
    { path: '/ai-assistant', label: 'Ask AI', icon: <MessageSquare size={18} />, special: true },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 font-outfit">
            KARTHIK<span className="text-indigo-500">.DEV</span>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive
                      ? 'text-white bg-white/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  } ${item.special ? 'text-indigo-400 hover:text-indigo-300' : ''}`
                }
              >
                {item.icon}
                <span className="tracking-wide">{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-indigo-400 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[70px] z-40 bg-slate-950/95 backdrop-blur-xl md:hidden flex flex-col p-8 gap-4"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 text-xl font-bold p-4 rounded-xl border ${
                    isActive
                      ? 'border-indigo-500/50 text-indigo-400 bg-indigo-900/20'
                      : 'border-white/5 text-slate-400'
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Layout = () => {
  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30 selection:text-indigo-100">
      <ThreeBackground />
      <Navigation />
      <main className="pt-24 pb-12 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <Outlet />
      </main>
      <footer className="fixed bottom-0 left-0 right-0 p-3 text-center text-xs text-slate-600 pointer-events-none z-0">
        © 2030 Karthik Paladugulla. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;