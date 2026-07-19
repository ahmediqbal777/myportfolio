import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Roadmap from './components/Roadmap';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SectionDivider from './components/SectionDivider';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (!containerRef.current) return;
    
    const sections = gsap.utils.toArray('.section-bg-morph');
    
    // Default background is obsidian
    // Morph to different colors based on sections
    const colorStops = [
      '#0b0f19', // Hero - Obsidian
      '#1e152a', // About - Midnight Purple
      '#0d221a', // Skills - Dark Emerald
      '#1e1b4b', // Roadmap - Deep Indigo
      '#000000', // Contact - Pure Black
    ];

    sections.forEach((section: any, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => gsap.to(document.body, { backgroundColor: colorStops[i], duration: 1 }),
        onEnterBack: () => gsap.to(document.body, { backgroundColor: colorStops[i], duration: 1 }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <SmoothScroll>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-electric-cyan)] origin-left z-[9999] shadow-[0_0_10px_rgba(6,182,212,0.8)]"
        style={{ scaleX }}
      />
      <CustomCursor />
      <Navbar />
      
      {/* Background Ambient SVG */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20 mix-blend-screen">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <main ref={containerRef} className="relative w-full overflow-hidden">
        <div className="section-bg-morph"><Hero /></div>
        <SectionDivider />
        <div className="section-bg-morph"><About /></div>
        <SectionDivider />
        <div className="section-bg-morph"><Skills /></div>
        <SectionDivider />
        <div className="section-bg-morph"><Roadmap /></div>
        <SectionDivider />
        <div className="section-bg-morph"><Projects /></div>
        <SectionDivider />
        <div className="section-bg-morph"><Contact /></div>
      </main>
    </SmoothScroll>
  );
}
