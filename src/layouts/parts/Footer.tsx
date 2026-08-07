import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUpRight, Radio } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-white/10 bg-[#030308] overflow-hidden z-10">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#00f0ff]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block font-display text-xl font-extrabold text-white tracking-wide">
              ABHIJEET4<span className="text-[#00f0ff]">.DEV</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Full-Stack & AI Engineer specializing in MERN Stack, GEN-AI, LLM Chatbots. Building Scalable AI Integrateds Web Applications, Custom LLM Chatbots Powered by Strong C++ DSA Fundamentals .
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f0ff]"></span>
              </span>
              <span>IST LOCAL TIME: {istTime || '18:09:52 PM'} (UTC+5:30)</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#00f0ff] mb-4">
              Navigation
            </h4>

            <ul className="space-y-2.5 text-sm font-sans">
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Projects' },
                { href: '/about', label: 'About' },
                { href: '/resume', label: 'Resume' },
                { href: '/contact', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-slate-400 hover:text-[#00f0ff] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#a78bfa] mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://github.com/abhijeet4dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Github size={15} /> GitHub <ArrowUpRight size={12} />
              </a>
              <a
                href="https://www.linkedin.com/in/abhijeet-singh-khichi-6087962b1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin size={15} /> LinkedIn <ArrowUpRight size={12} />
              </a>
              <a
                href="mailto:abhijeetsinghkhichi64@gmail.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail size={15} /> Direct Email
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} Abhijeet Singh Khichi. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <Radio size={12} className="text-[#00f0ff] animate-pulse" />
            <span><>AVAILABLE FOR STACKS:</> MERN + LLM + GEN-AI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
