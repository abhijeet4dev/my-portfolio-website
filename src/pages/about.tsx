import { motion, useScroll, useTransform } from 'motion/react';
import { Helmet } from '@dr.pogodin/react-helmet';
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  Compass,
  Zap,
  Target
} from 'lucide-react';
import { useRef } from 'react';

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for cinematic image scaling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.3], [0, -2]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 0.8]);

  const education = [
    {
      year: '2025 – Present',
      title: 'B.Tech in Computer Science & Engineering',
      org: 'MediCaps University',
      description:
        'Specializing in Artificial Intelligence and Software Engineering. Core coursework includes Data Structures & Algorithms, Operating Systems, Database Management Systems, System Design, Computer Networks, Distributed Systems, Machine Learning, and Cloud Computing. Current CGPA: 8.01 / 10.',
      icon: GraduationCap,
    },
    {
      year: '2022 – 2024',
      title: 'Higher Secondary (PCM + Computer Science)',
      org: 'Vijay Jyoti Academy Senior Secondary School',
      description:
        'Physics, Chemistry, Mathematics, and Computer Science. Secured 87% in state board examinations.',
      icon: GraduationCap,
    },
  ];

  const experience = [
    {
      year: 'Summer 2026',
      title: 'Google Summer of Code Intern',
      org: 'Google India',
      description:
        'Developed high-performance internal developer tooling with React, Node.js, and Redis. Reduced CI test pipeline execution time by 35% through intelligent test parallelization and artifact caching.',
      icon: Briefcase,
    },
    {
      year: '2026 – Present',
      title: 'Open Source Contributor & Maintainer',
      org: 'GitHub Community',
      description:
        'Author of FullStack Starter Kit (200+ GitHub stars). Active contributor to open-source developer tools, pull request reviewers, and distributed utilities.',
      icon: Code2,
    },
    {
      year: '2025 – Present',
      title: 'Full Stack Software Engineer (Freelance)',
      org: 'Independent',
      description:
        'Architected and delivered custom full-stack web applications, SaaS MVPs, and automated workflows for international clients and early-stage ventures.',
      icon: Briefcase,
    },
  ];

  const values = [
    {
      icon: Compass,
      title: 'Curiosity-Driven Engineering',
      body: 'Understanding systems down to the metal. Learning the exact "why" behind memory management, AST compilation, and protocol design makes better engineers.',
    },
    {
      icon: Target,
      title: 'Relentless Problem Solving',
      body: 'Tackling complex algorithmic challenges with structured logic. Every bottleneck is simply an unoptimized mathematical problem waiting for a solution.',
    },
    {
      icon: Code2,
      title: 'Clean Architecture First',
      body: 'Code is read 10x more than it is written. Clean abstraction layers, comprehensive type signatures, and low coupling ensure long-term scalability.',
    },
    {
      icon: Zap,
      title: 'Continuous Velocity & Learning',
      body: 'Rapidly adopting next-generation AI models, compiler optimizations, and modern web paradigms to ship state-of-the-art products faster.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>About — Abhijeet Singh Khichi</title>
        <meta
          name="description"
          content="Background, education, experience, and engineering principles of Abhijeet Singh Khichi."
        />
      </Helmet>

      <div ref={containerRef} className="min-h-screen pt-28 pb-24 relative overflow-hidden">
        {/* Background glows */}
        <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none" />
        <div className="fixed bottom-1/4 left-0 w-[500px] h-[500px] bg-[#a78bfa]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          {/* ── CINEMATIC PROFILE HERO SECTION ── */}
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-32">
            {/* Editorial Bio Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]"
              >
                03 // BIOGRAPHY &amp; IDENTITY
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl font-extrabold text-white leading-tight"
              >
                Building software at the edge of{' '}
                <span className="text-gradient-cyan-purple">what's possible.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4 text-slate-300 font-light text-base md:text-lg leading-relaxed"
              >
                <p>
                  I am a Computer Science Engineer at Medi-Caps University with an obsessive focus on full-stack web platforms, distributed backends, and Generative AI infrastructure.
                </p>
                <p>
                  My goal is simple: engineer software that is incredibly fast, visually arresting, and deeply reliable. Whether training NLP sentiment transformers or crafting sub-100ms real-time web applications, I bring high engineering standards to every project.
                </p>
                <p>
                  I spend my time building developer tooling, contributing to open-source monorepos, and exploring how Large Language Models and Retrieval-Augmented Generation (RAG) can solve complex data processing challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 pt-4"
              >
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <MapPin size={15} className="text-[#00f0ff]" />
                  <span>Based in India // Global Remote</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff]">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                  <span>Seeking Q3/Q4 Software Engineering Opportunities</span>
                </div>
              </motion.div>
            </div>

            {/* Scroll-scaling Profile Image Container */}
            <div className="lg:col-span-5 relative">
              <motion.div
                style={{ scale: imageScale, rotate: imageRotate }}
                className="relative rounded-3xl overflow-hidden glass-card border border-white/20 p-2 shadow-2xl max-w-md mx-auto"
              >
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-black">
                  <img
                    src="/assets/DSC_0346.JPG.jpeg"
                    alt="Abhijeet Singh Khichi"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030308] via-transparent to-transparent opacity-80" />

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl glass-card backdrop-blur-md border border-white/10 text-xs font-mono flex items-center justify-between text-slate-200">
                    <span>ABHIJEET S. KHICHI</span>
                    <span className="text-[#00f0ff]">ENG_PORTRAIT.RAW</span>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Glowing Aura Ring */}
              <motion.div
                style={{ opacity: glowOpacity }}
                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#00f0ff]/20 via-[#a78bfa]/20 to-transparent blur-2xl pointer-events-none -z-10"
              />
            </div>
          </div>

          {/* ── CORE ENGINEERING VALUES ── */}
          <section className="py-20 mb-28">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
                HOW I OPERATE
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-12">
              Core Engineering Principles
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, idx) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="glass-card glass-card-hover rounded-2xl p-6 relative group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff] mb-4 group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-white mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-light leading-relaxed">
                      {v.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── TIMELINE: EXPERIENCE & EDUCATION ── */}
          <section className="py-20 mb-28">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Experience Column */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
                    CAREER &amp; WORK
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-8">
                  Work &amp; Experience
                </h2>

                <div className="space-y-8 relative border-l border-white/10 pl-6 ml-2">
                  {experience.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="relative group">
                        {/* Timeline Node */}
                        <div className="absolute -left-[35px] top-1 w-6 h-6 rounded-full bg-[#030308] border-2 border-[#00f0ff] flex items-center justify-center text-[#00f0ff] group-hover:bg-[#00f0ff] group-hover:text-[#030308] transition-colors">
                          <Icon size={11} />
                        </div>

                        <span className="text-xs font-mono text-[#00f0ff] block mb-1">
                          {item.year}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mb-2">
                          {item.org}
                        </p>
                        <p className="text-sm text-slate-300 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Education Column */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#a78bfa]">
                    ACADEMICS
                  </span>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#a78bfa]/40 to-transparent" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white mb-8">
                  Education &amp; Credentials
                </h2>

                <div className="space-y-8 relative border-l border-white/10 pl-6 ml-2">
                  {education.map((item, idx) => {
                    return (
                      <div key={item.title} className="relative group">
                        {/* Timeline Node */}
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#030308] border-2 border-[#a78bfa] group-hover:bg-[#a78bfa] transition-colors" />

                        <span className="text-xs font-mono text-[#a78bfa] block mb-1">
                          {item.year}
                        </span>
                        <h3 className="font-heading text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-400 mb-2">
                          {item.org}
                        </p>
                        <p className="text-sm text-slate-300 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ── BEYOND CODE ── */}
          <section className="py-16 mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
                INTERESTS
              </span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
            </div>

            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Beyond the Code editor
            </h2>

            <div className="flex flex-wrap gap-3">
              {[
                'Generative AI & LLM Fine-Tuning',
                'Distributed Systems Architecture',
                'AST & Compiler Mechanics',
                'Open Source Infrastructure',
                'Photography & Cinematic Visuals',
                'Competitive Chess',
                'Badminton & Fitness',
                'Technical Writing & Documentation',
              ].map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full glass-card border border-white/10 text-xs font-mono text-slate-300 hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
