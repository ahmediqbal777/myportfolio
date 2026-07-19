import { motion } from 'motion/react';

export default function SectionDivider() {
  return (
    <div className="w-full flex justify-center relative z-10 py-4 -my-8 md:-my-12 pointer-events-none">
      <svg width="100" height="120" viewBox="0 0 100 120" className="opacity-80">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="var(--color-electric-cyan)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        
        <motion.line
          x1="50" y1="0" x2="50" y2="120"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        <motion.circle
          cx="50" cy="0" r="3"
          fill="var(--color-electric-cyan)"
          className="filter drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]"
          initial={{ cy: 0, opacity: 0 }}
          whileInView={{ cy: [0, 120], opacity: [0, 1, 0] }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
