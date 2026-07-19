import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ["Software Engineer", "Full Stack Developer", "AI Enthusiast"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-20 pb-20">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] rounded-full border border-white/5 border-dashed absolute"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-[600px] h-[600px] rounded-full border border-[var(--color-electric-cyan)]/10 absolute"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-center gap-12 z-10">
        
        {/* Left Floating Cards */}
        <div className="hidden md:flex flex-col gap-6 w-64">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="glass-card p-4 text-sm font-medium tracking-wide"
          >
            <span className="text-[var(--color-electric-cyan)] block mb-1">Expertise</span>
            Full Stack Web Developer
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
            className="glass-card p-4 text-sm font-medium tracking-wide"
          >
            <span className="text-[var(--color-electric-cyan)] block mb-1">Core Langs</span>
            Java & Python Expert
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
            className="glass-card p-4 text-sm font-medium tracking-wide"
          >
            <span className="text-[var(--color-electric-cyan)] block mb-1">Databases</span>
            SQL & MongoDB
          </motion.div>
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center relative z-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 1.5 }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 mb-8"
          >
            <div className="absolute inset-0 rounded-full border-2 border-[var(--color-electric-cyan)] animate-spin-slow" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-2 rounded-full border border-white/20 animate-reverse-spin" style={{ animationDuration: '15s' }} />
            <div className="w-full h-full rounded-full overflow-hidden bg-white/10 backdrop-blur-sm p-1">
              {/* Profile Image Placeholder */}
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-[var(--color-royal-navy)] to-[var(--color-electric-cyan)]/20 flex items-center justify-center overflow-hidden relative">
                 <img src="/profile.jpg" alt="Ahmed Iqbal" className="w-full h-full object-cover rounded-full mix-blend-overlay opacity-80" onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                 }} />
                 <div className="absolute inset-0 flex items-center justify-center text-white/50 text-xs font-mono">
                    avatar
                 </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-4 text-glow"
          >
            AHMED IQBAL
          </motion.h1>
          
          <div className="h-8 mb-10 overflow-hidden">
            <motion.div
              key={titleIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              className="text-lg sm:text-xl md:text-2xl font-mono text-gray-300"
            >
              &gt; {titles[titleIndex]}_
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a href="#roadmap" className="interactive px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:bg-[var(--color-electric-cyan)] hover:text-white transition-all flex items-center gap-2">
              Explore My Journey <ChevronDown size={18} />
            </a>
            <button className="interactive px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2">
              Download CV <Download size={18} />
            </button>
          </div>
        </div>

        {/* Right Floating Cards */}
        <div className="hidden md:flex flex-col gap-6 w-64 items-end text-right">
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
            className="glass-card p-4 text-sm font-medium tracking-wide w-full"
          >
            <span className="text-[var(--color-electric-cyan)] block mb-1">Education</span>
            Undergraduate at SSUET
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
            className="glass-card p-4 text-sm font-medium tracking-wide w-full"
          >
            <span className="text-[var(--color-electric-cyan)] block mb-1">Focus</span>
            AI & Computer Vision Builder
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}
            className="glass-card p-4 text-sm font-medium tracking-wide w-full"
          >
            <span className="text-[var(--color-electric-cyan)] block mb-1">Business</span>
            Lead Generation Experience
          </motion.div>
        </div>

      </div>
    </section>
  );
}
