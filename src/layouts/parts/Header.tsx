import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-8 pt-4 pb-2 pointer-events-none transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-[#030308]/40' : ''}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group relative flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 hover:border-[#00f0ff]/40 transition-all duration-300"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-pulse shadow-[0_0_10px_#00f0ff]" />
          <span className="font-display font-bold text-sm tracking-wider text-white">
            ABHIJEET<span className="text-[#00f0ff]">.DEV</span>
          </span>
        </Link>

        {/* Desktop Nav Floating Pill Capsule */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full glass-card border border-white/10 shadow-2xl backdrop-blur-2xl">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`relative px-4 py-1.5 text-xs font-mono tracking-wider transition-colors duration-300 ${
                  isActive ? 'text-[#00f0ff]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-[#00f0ff]/15 border border-[#00f0ff]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Right CTA / Social */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/abhijeet4dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full glass-card border border-white/10 text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all duration-300"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/abhijeet-singh-khichi-6087962b1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full glass-card border border-white/10 text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all duration-300"
          >
            <Linkedin size={16} />
          </a>
          <Link
            to="/contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#0099bb] text-xs font-mono font-bold text-[#030308] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300"
          >
            <Sparkles size={13} /> Hire Me
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2.5 rounded-full glass-card border border-white/10 text-white"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pointer-events-auto mt-3 mx-2 p-6 rounded-2xl glass-card border border-white/10 bg-[#070814]/95 backdrop-blur-2xl shadow-2xl"
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-mono py-2 px-3 rounded-lg transition-all duration-200 ${
                    location.pathname === item.href
                      ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex gap-3">
                  <a
                    href="https://github.com/abhijeet4dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 text-slate-300"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/abhijeet-singh-khichi-6087962b1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/5 text-slate-300"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-2 rounded-full bg-[#00f0ff] text-xs font-mono font-bold text-[#030308]"
                >
                  Contact Me
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
