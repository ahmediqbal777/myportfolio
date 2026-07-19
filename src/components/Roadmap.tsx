import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
  {
    period: "Fall 2023 - Present",
    title: "Bachelor of Software Engineering",
    subtitle: "Sir Syed University of Engineering & Technology (SSUET)",
    type: "Education",
    desc: "Currently pursuing a degree in Software Engineering, building a strong foundation in algorithms, system design, and software development lifecycles."
  },
  {
    period: "Aug 2024 - Feb 2025",
    title: "Lead Generation Executive",
    subtitle: "Impel Marketing",
    type: "Work Experience",
    desc: "Conducted outbound calls to approach potential clients and present tourism packages, clearly explaining benefits and addressing queries. Qualified leads based on customer interest and response, transferring serious prospects to senior management for deal closing. Strengthened communication, persuasion, and client-handling skills."
  },
  {
    period: "Completed 2022",
    title: "Intermediate (Pre-Engineering)",
    subtitle: "St. Joseph's College, Karachi",
    type: "Education",
    desc: "Completed Pre-Engineering with Grade A."
  }
];

export default function Roadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGLineElement>(null);
  const arrowRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pathRef.current || !arrowRef.current) return;

    const path = pathRef.current;
    const length = path.getTotalLength ? path.getTotalLength() : 1000;

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 30%",
        end: "bottom 80%",
        scrub: 1,
      }
    });

    tl.to(path, {
      strokeDashoffset: 0,
      ease: "none"
    }, 0);

    tl.fromTo(arrowRef.current, 
      { top: 0 },
      { top: "100%", ease: "none" },
      0
    );

    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item: any, i) => {
      gsap.fromTo(item, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, y: 0, 
          duration: 0.5,
          scrollTrigger: {
            trigger: item,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="roadmap" ref={containerRef} className="py-24 px-6 min-h-screen relative">
      <div className="text-center mb-20 relative z-10">
        <h2 className="text-sm font-mono text-[var(--color-electric-cyan)] tracking-widest uppercase mb-2">&gt; JOURNEY</h2>
        <h3 className="text-4xl md:text-5xl font-bold font-sans tracking-tight">Experience & Education</h3>
      </div>

      <div className="max-w-5xl mx-auto relative">
        
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-4 h-full z-0">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 20 1000">
             <line 
               ref={pathRef}
               x1="10" y1="0" x2="10" y2="1000" 
               fill="none" 
               stroke="rgba(6, 182, 212, 0.3)" 
               strokeWidth="4"
               strokeLinecap="round"
             />
          </svg>
        </div>

        <div 
          ref={arrowRef} 
          className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-6 h-6 flex flex-col items-center justify-center opacity-100 z-10"
        >
          <div className="w-3 h-3 bg-[#06b6d4] rounded-full filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
          <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#06b6d4] mt-1 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        </div>

        <div className="relative z-10 flex flex-col gap-16 md:gap-32">
          {timelineData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`timeline-item flex flex-col md:flex-row w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
                
                <div className={`w-full md:w-[45%] relative pl-16 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="glass-panel p-6 md:p-8 interactive hover:border-[var(--color-electric-cyan)]/50 transition-colors">
                    <div className="flex items-center gap-3 mb-2 justify-start md:justify-normal" style={{ flexDirection: isLeft ? 'row-reverse' : 'row' }}>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-[var(--color-electric-cyan)]">
                        {item.type}
                      </span>
                      <span className="text-sm text-gray-400 font-mono">{item.period}</span>
                    </div>
                    <h4 className="text-2xl font-bold mb-1 text-white">{item.title}</h4>
                    <div className="text-lg text-gray-300 mb-4">{item.subtitle}</div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  );
}
