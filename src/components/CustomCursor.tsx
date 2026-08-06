import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on fine pointer / desktop devices
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer ambient spotlight aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-40 rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - (isHovered ? 40 : 25),
          y: mousePosition.y - (isHovered ? 40 : 25),
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.6 : 0.35,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.3 }}
        style={{
          width: isHovered ? '80px' : '50px',
          height: isHovered ? '80px' : '50px',
          background: 'radial-gradient(circle, rgba(0,240,255,0.4) 0%, rgba(167,139,250,0.15) 50%, transparent 70%)',
        }}
      />
      {/* Center dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-[#00f0ff]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 500, mass: 0.1 }}
        style={{
          width: '6px',
          height: '6px',
          boxShadow: '0 0 10px #00f0ff, 0 0 20px #00f0ff',
        }}
      />
    </>
  );
}
