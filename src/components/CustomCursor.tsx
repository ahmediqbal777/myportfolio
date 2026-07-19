import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] mix-blend-screen"
      animate={{
        x: mousePosition.x - (isHovering ? 24 : 12),
        y: mousePosition.y - (isHovering ? 24 : 12),
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.4)' : 'rgba(255, 255, 255, 0.8)',
        border: isHovering ? '1px solid rgba(6, 182, 212, 0.8)' : '0px solid transparent',
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      style={{
        boxShadow: isHovering ? '0 0 20px rgba(6, 182, 212, 0.6)' : '0 0 10px rgba(255, 255, 255, 0.5)',
      }}
    />
  );
}
