import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 md:bg-transparent md:border-transparent ${
          scrolled 
            ? 'md:py-4 md:bg-[#0b0f19]/50 md:backdrop-blur-3xl md:border-b md:border-white/10 md:shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'md:py-6'
        } p-4 md:p-0 pointer-events-none`}
      >
        <div className="max-w-7xl mx-auto md:px-6 flex items-center justify-center w-full relative pointer-events-auto">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="interactive hover:text-[var(--color-electric-cyan)] transition-colors relative group py-1 block"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--color-electric-cyan)] transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle & Actions */}
          <div className="md:hidden flex w-full justify-between items-center px-6 py-4 rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative">
            <div className="text-xl font-bold font-sans text-white tracking-tight">AI.</div>
            
            <a 
              href="#contact" 
              className="interactive absolute left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[var(--color-electric-cyan)] text-black text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors shadow-[0_0_15px_rgba(6,182,212,0.4)]"
            >
              Hire Me
            </a>

            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="interactive text-gray-300 hover:text-[var(--color-electric-cyan)] transition-colors p-1"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0b0f19]/80 backdrop-blur-3xl md:hidden"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="interactive absolute top-6 right-6 text-gray-400 hover:text-[var(--color-electric-cyan)] transition-colors p-2"
            >
              <X size={32} />
            </button>
            
            <ul className="flex flex-col gap-8 text-2xl font-medium text-center w-full px-6">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="border-b border-white/5 pb-4 last:border-0"
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="interactive text-gray-300 hover:text-[var(--color-electric-cyan)] transition-colors block"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
