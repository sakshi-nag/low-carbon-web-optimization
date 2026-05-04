/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Zap, 
  Monitor, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  BarChart3, 
  Wifi, 
  Image as ImageIcon,
  Sun,
  Moon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface StatProps {
  label: string;
  value: string;
  subtext: string;
  icon: React.ReactNode;
}

// --- Components ---

/**
 * StatCard: Displays conceptual sustainability metrics.
 */
const StatCard = ({ label, value, subtext, icon }: StatProps) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <div className="p-3 bg-emerald-50 rounded-lg text-emerald-600">
        {icon}
      </div>
      <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
        Optimization Pass
      </span>
    </div>
    <h3 className="text-3xl font-bold text-slate-900 mb-1">{value}</h3>
    <p className="text-sm font-semibold text-slate-700 mb-2">{label}</p>
    <p className="text-xs text-slate-500">{subtext}</p>
  </div>
);

/**
 * Main Application Component
 */
export default function App() {
  // 1. State for Low Carbon Mode (Persisted in LocalStorage)
  const [lowCarbonMode, setLowCarbonMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('lowCarbonPreference');
    return saved ? JSON.parse(saved) : false;
  });

  // 2. Persist preference whenever it changes
  useEffect(() => {
    localStorage.setItem('lowCarbonPreference', JSON.stringify(lowCarbonMode));
  }, [lowCarbonMode]);

  // 3. Toggle Handler
  const toggleMode = () => setLowCarbonMode(!lowCarbonMode);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${lowCarbonMode ? 'bg-slate-50' : 'bg-white'}`}>
      
      {/* --- TOP NAVIGATION --- */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <Leaf className="text-emerald-500 w-8 h-8" />
              <span className="text-xl font-bold tracking-tight text-slate-800">
                Eco<span className="text-emerald-500">Optima</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#overview" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Overview</a>
              <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">How It Works</a>
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#benefits" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Benefits</a>
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={toggleMode}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                  lowCarbonMode 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {lowCarbonMode ? <Sun size={16} /> : <Moon size={16} />}
                <span>{lowCarbonMode ? 'Normal Mode' : 'Low Carbon Mode'}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* --- HERO SECTION --- */}
        <section id="overview" className="relative overflow-hidden pt-20 pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl mb-6">
                  Sustainable <span className="text-emerald-500">Web Optimization</span> Framework
                </h1>
                <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  A research-oriented implementation demonstrating how web resource management can significantly reduce digital energy consumption while preserving core user experience.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                  <a 
                    href="#interaction"
                    className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10 shadow-lg shadow-emerald-100 transition-all font-semibold"
                  >
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                  <a 
                    href="#how-it-works"
                    className="flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-600 bg-white hover:bg-slate-50 md:py-4 md:text-lg md:px-10 transition-all font-semibold"
                  >
                    View Case Study
                  </a>
                </div>
              </div>

              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                <AnimatePresence mode="wait">
                  {lowCarbonMode ? (
                    <motion.div 
                      key="low-carbon-media"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.05 }}
                      className="w-full h-[400px] border-2 border-dashed border-emerald-300 bg-emerald-50/30 rounded-3xl flex flex-col items-center justify-center text-center p-8"
                    >
                      <ImageIcon className="w-16 h-16 text-emerald-200 mb-4" />
                      <h3 className="text-xl font-semibold text-emerald-800">Media Optimized</h3>
                      <p className="text-emerald-600 mt-2 max-w-xs">
                        High-resolution hero image replaced with lightweight placeholder to reduce bandwidth usage.
                        <br />
                        <span className="font-mono text-xs mt-4 py-1 px-2 bg-emerald-100 rounded inline-block">Impact: Reduced Payload</span>
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="high-carbon-media"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1000" 
                        alt="Sustainable Future" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* --- INTERACTIVE TOGGLE SECTION --- */}
        <section id="interaction" className="py-16 bg-emerald-600">
           <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Experience the Optimization</h2>
              <p className="text-emerald-100 mb-8 max-w-2xl mx-auto text-lg italic">Toggle the framework mode to see how the system dynamically adjusts resource delivery for digital sustainability.</p>
              <button 
                onClick={toggleMode}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-xl ${
                  lowCarbonMode 
                    ? 'bg-white text-emerald-600' 
                    : 'bg-emerald-800 text-emerald-100'
                }`}
              >
                {lowCarbonMode ? <Sun /> : <Moon />}
                {lowCarbonMode ? 'Switch to Normal Mode' : 'Activate Low Carbon Mode'}
              </button>
           </div>
        </section>

        {/* --- HOW IT WORKS (INFOGRAPHIC SECTION) --- */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">System Architecture & Workflow</h2>
              <p className="mt-4 text-lg text-slate-500 max-w-3xl mx-auto">The digital journey from resource-heavy consumption to streamlined, sustainable web delivery.</p>
            </div>

            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
                {/* Step 1: Problem */}
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md">
                    <Zap className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Problem</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Unoptimized scripts and high-res media increase server load and browsing energy consumption by 40-70%.</p>
                </div>

                {/* Step 2: Solution */}
                <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 shadow-lg shadow-emerald-50 flex flex-col items-center text-center transform lg:-translate-y-4">
                  <div className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Solution</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Dynamic asset stripping & placeholder replacement logic swaps heavy visuals for lightweight, CSS-driven alternatives.</p>
                </div>

                {/* Step 3: Outcome */}
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-md">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">The Outcome</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Reduced network payload, lower client-side CPU overhead, and improved device thermal performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FEATURES SECTION (IMPLEMENTATION) --- */}
        <section id="features" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 italic border-l-4 border-emerald-500 pl-6">
                  Core Project Features
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <ShieldCheck />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Lazy Loading Assets</h4>
                      <p className="text-slate-500">Images and components are only loaded when they enter the viewport, reducing initial bandwidth and CPU cycles.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Globe />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Adaptive Media Replacement</h4>
                      <p className="text-slate-500">A logic-driven approach to swap heavy bitmaps for SVG or themed CSS placeholders based on user preference.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                      <Zap />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">Reduced Rendering Cost</h4>
                      <p className="text-slate-500">Minimizing script execution time and complex CSS animations ensures lower power consumption for a greener experience.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 relative group border border-slate-200">
                  {lowCarbonMode ? (
                    <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-slate-300">
                      <ImageIcon className="text-slate-300" />
                    </div>
                  ) : (
                    <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                  )}
                  <div className="absolute bottom-4 left-4 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded">Asset 01</div>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 mt-8 relative group border border-slate-200">
                  {lowCarbonMode ? (
                    <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-slate-300">
                      <ImageIcon className="text-slate-300" />
                    </div>
                  ) : (
                    <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
                  )}
                  <div className="absolute bottom-4 left-4 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded">Asset 02</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PERFORMANCE BENEFITS SECTION (OUTCOMES) --- */}
        <section id="benefits" className="bg-slate-50/50 py-24 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Performance Benefits</h2>
            <p className="mt-4 text-lg text-slate-500">Observed outcomes of sustainability-focused code optimization.</p>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <StatCard 
                icon={<BarChart3 size={24} />}
                label="Resource Usage" 
                value={lowCarbonMode ? 'Optimized' : 'High'} 
                subtext="Payload size reduction through stripping"
              />
              <StatCard 
                icon={<Zap size={24} />}
                label="Efficiency Rating" 
                value={lowCarbonMode ? 'Eco-Safe' : 'Standard'} 
                subtext="Energy consumption per session"
              />
              <StatCard 
                icon={<Wifi size={24} />}
                label="Loading Priority" 
                value={lowCarbonMode ? 'Fast Path' : 'Full Load'} 
                subtext="Prioritizing text over heavy media"
              />
              <StatCard 
                icon={<Monitor size={24} />}
                label="Rendering Load" 
                value={lowCarbonMode ? 'Stable' : 'Dynamic'} 
                subtext="Impact on browser processing power"
              />
            </div>
          </div>
        </section>
      </main>

      {/* --- ACADEMIC FOOTER --- */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="text-emerald-400 w-6 h-6" />
                <span className="text-lg font-bold">Low Carbon Web</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                A software engineering final year submission focused on digital sustainability and 
                front-end architectural optimization patterns.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Development Stack</h5>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>React 19 & TypeScript</li>
                <li>Tailwind CSS Architecture</li>
                <li>Framer Motion Animations</li>
                <li>Lucide Icon Library</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Project Info</h5>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>Module: Web Technologies</li>
                <li>Focus: ESG Data Visualization</li>
                <li>Year: 2026 Academic Batch</li>
                <li>Contact: project-lead@university.edu</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
            <p>© 2026 Low Carbon Sustainability Web Optimization System. Developed for Academic Fulfillment.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Source Code</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">References</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
