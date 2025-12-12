import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Sparkles, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Torus, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const CyberBot = () => {
  const group = useRef<THREE.Group>(null);
  const eyeRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Rotate rings
    if (ring1Ref.current) {
        ring1Ref.current.rotation.x = Math.sin(t * 0.2) * 0.5;
        ring1Ref.current.rotation.y = t * 0.3;
    }
    if (ring2Ref.current) {
        ring2Ref.current.rotation.x = t * 0.2;
        ring2Ref.current.rotation.z = Math.cos(t * 0.2) * 0.5;
    }

    // Eye animation (breathing/scanning)
    if (eyeRef.current) {
        const scale = 1 + Math.sin(t * 2) * 0.05;
        eyeRef.current.scale.set(scale, scale, scale);
    }
    
    // Interactive Mouse Follow
    if (group.current) {
        const mouseX = state.mouse.x * 0.8;
        const mouseY = state.mouse.y * 0.8;
        
        // Smooth lerp rotation
        group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouseX, 0.1);
        group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouseY, 0.1);
    }
  });

  return (
    <group ref={group}>
        {/* Head Shell */}
        <Sphere args={[1, 64, 64]}>
            <meshPhysicalMaterial 
                color="#f1f5f9" 
                roughness={0.2} 
                metalness={0.8} 
                clearcoat={1}
                clearcoatRoughness={0.1}
            />
        </Sphere>

        {/* Visor Area */}
        <Sphere args={[0.88, 64, 64]} position={[0, 0.05, 0.18]}>
             <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
        </Sphere>
        
        {/* Glowing Eye */}
        <group position={[0, 0.1, 0.95]}>
             <Sphere ref={eyeRef} args={[0.22, 32, 32]}>
                <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={3} toneMapped={false} />
             </Sphere>
             <pointLight distance={2} intensity={2} color="#06b6d4" />
        </group>

        {/* Tech Rings */}
        <group>
            <Torus ref={ring1Ref} args={[1.3, 0.04, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
                <meshStandardMaterial color="#6366f1" metalness={0.8} roughness={0.2} emissive="#4f46e5" emissiveIntensity={0.5} />
            </Torus>
             <Torus ref={ring2Ref} args={[1.6, 0.02, 16, 100]} rotation={[0, Math.PI / 4, 0]}>
                <meshStandardMaterial color="#a5b4fc" metalness={0.8} roughness={0.2} />
            </Torus>
        </group>
        
        {/* Antenna */}
        <group position={[0, 1, 0]}>
             <mesh position={[0, 0.1, 0]}>
               <cylinderGeometry args={[0.02, 0.02, 0.5]} />
               <meshStandardMaterial color="#94a3b8" />
             </mesh>
             <mesh position={[0, 0.4, 0]}>
                <sphereGeometry args={[0.08]} />
                <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={2} toneMapped={false} />
             </mesh>
        </group>
    </group>
  );
};

const Hero3D = () => {
  return (
    <Canvas className="absolute inset-0 pointer-events-none md:pointer-events-auto" shadows>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#6366f1" />
      
      <Float speed={2} rotationIntensity={0.2} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
        <CyberBot />
      </Float>
      
      <ContactShadows opacity={0.4} scale={10} blur={2.5} far={4} color="#000000" />
    </Canvas>
  );
};

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col md:flex-row items-center relative">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-[50vh] md:h-[600px] order-1 md:order-2 z-0">
         <Hero3D />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-8 max-w-2xl relative z-10 w-full md:w-1/2 order-2 md:order-1 pt-48 md:pt-0"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium">
          <Bot size={16} />
          <span>Intelligent Systems Architect</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tight">
          Hello, I'm <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-500">Karthik.</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-400 font-light">
          Full Stack Developer & AI Engineer
        </h2>

        <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
          I build immersive digital experiences that blend creativity with robust engineering. 
          Focusing on scalable web applications and intelligent machine learning solutions.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link to="/projects">
            <button className="group px-8 py-4 bg-indigo-600 rounded-lg text-white font-semibold hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20">
              View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>

          <Link to="/contact">
            <button className="px-8 py-4 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-200 font-semibold hover:bg-slate-800 hover:border-slate-600 transition-all backdrop-blur-sm">
              Contact Me
            </button>
          </Link>
        </div>
        
        {/* Tech badges */}
        <div className="flex gap-4 pt-8 text-slate-500">
           <Code size={20} />
           <span className="text-sm font-mono">React • Python • AI/ML</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
