import React, { PropsWithChildren } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import AIAssistant from './pages/AIAssistant';
import { AnimatePresence, motion } from 'framer-motion';

// Wrapper for page transitions
const PageWrapper = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="skills" element={<PageWrapper><Skills /></PageWrapper>} />
          <Route path="projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="experience" element={<PageWrapper><Experience /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="ai-assistant" element={<PageWrapper><AIAssistant /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <HashRouter>
      <AnimatedRoutes />
    </HashRouter>
  );
};

export default App;