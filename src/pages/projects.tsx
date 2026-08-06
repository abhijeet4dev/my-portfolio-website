import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Maximize2 } from 'lucide-react';
import { Helmet } from '@dr.pogodin/react-helmet';
import ProjectModal, { ProjectData } from '@/components/ProjectModal';

const projectsList: ProjectData[] = [
  {
    title: 'AI Code Review Assistant',
    description:
      'An LLM-powered tool that automatically reviews pull requests, detects bugs, suggests improvements, and enforces code style using GPT-4 and GitHub Actions.',
    longDescription:
      'Engineered to reduce developer review bottlenecks, this system hooks directly into GitHub PR webhooks. It parses git diffs, runs static code AST analysis, evaluates potential security bugs against OWASP patterns, and posts inline automated review feedback.',
    tags: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'GitHub API'],
    category: 'AI / ML',
    image: '/assets/projects/ai_reviewer.jpg',
    github: 'https://github.com/abhijeet4dev',
    live: 'https://aicodereviewassistant.com/abhi4dev',
    featured: true,
    status: 'Live',
    highlights: [
      '60% reduction in average pull request turnaround time',
      'Zero false-positive AST evaluation pipeline',
      'Automated unit test code snippet generation',
    ],
  },
  {
    title: 'DevMetrics Telemetry Dashboard',
    description:
      'Real-time analytics dashboard for engineering teams. Tracks velocity, PR cycle time, deployment frequency, and DORA metrics.',
    longDescription:
      'A real-time telemetry dashboard designed for high-performing engineering teams. Built with React and Node.js with PostgreSQL backend for aggregating developer metrics.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    category: 'Full Stack',
    image: '/assets/projects/dev_metrics.jpg',
    github: 'https://github.com/abhijeet4dev',
    live: 'https://devmetrics.com/abhi4dev',
    featured: true,
    status: 'In Progress',
    highlights: [
      'Sub-100ms WebSocket metric streaming',
      'Custom SVG reactive charts',
    ],
  },
  {
    title: 'FullStack Starter Kit Monorepo',
    description:
      'Production-ready monorepo template with authentication, CI/CD pipelines, Docker Compose setup, and Prisma ORM. Used by 200+ developers.',
    longDescription:
      'A complete full-stack boilerplate featuring Next.js, Prisma ORM, PostgreSQL, Docker Compose, OAuth authentication, transactional email templates, and automated CI/CD.',
    tags: ['Next.js', 'Prisma', 'Docker', 'GitHub Actions', 'TypeScript'],
    category: 'Open Source',
    image: '/assets/projects/starter_kit.jpg',
    github: 'https://github.com/abhijeet4dev',
    live: 'https://fullstackstarterkit.com/abhi4dev',
    featured: false,
    status: 'Live',
    highlights: [
      '200+ GitHub stars',
      'Full end-to-end type safety',
    ],
  },
  {
    title: 'NLP Sentiment Analyzer',
    description:
      'Fine-tuned BERT model for multi-class sentiment analysis on product reviews. Achieved 91% accuracy on the Amazon Reviews dataset.',
    longDescription:
      'NLP deep learning model fine-tuned using PyTorch and Hugging Face Transformers for multi-class sentiment extraction.',
    tags: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'scikit-learn'],
    category: 'AI / ML',
    image: '/assets/projects/nlp_sentiment.jpg',
    github: 'https://github.com/abhijeet4dev',
    featured: false,
    status: 'Live',
    highlights: [
      '91% benchmark accuracy on Amazon Reviews dataset',
    ],
  },
  {
    title: 'Distributed Task Queue Engine',
    description:
      'A lightweight distributed task queue built from scratch using Redis pub/sub and worker processes with retry logic and dead-letter queues.',
    longDescription:
      'Designed for high concurrency job execution, this distributed worker pool handles retries, rate limiting, task priorities, and exponential backoff.',
    tags: ['Node.js', 'Redis', 'TypeScript', 'Docker'],
    category: 'Systems',
    image: '/assets/projects/dev_metrics.jpg',
    github: 'https://github.com/abhijeet4dev',
    featured: false,
    status: 'Archived',
  },
  {
    title: 'ShopEase E-Commerce Suite',
    description:
      'A fully responsive e-commerce storefront with cart management, search & filter, and sleek checkout interactions.',
    longDescription:
      'Modern frontend e-commerce solution featuring reactive cart management, instant fuzzy product search, category filtering, and responsive CSS design.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    category: 'Frontend',
    image: '/assets/projects/ai_reviewer.jpg',
    github: 'https://github.com/abhijeet4dev',
    live: 'https://shopease.com/abhi4dev',
    featured: false,
    status: 'Live',
  },
];

const categories = ['All', 'AI / ML', 'Full Stack', 'Frontend', 'Systems', 'Open Source'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsList
      : projectsList.filter((p) => p.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Projects — Abhijeet Singh Khichi</title>
      </Helmet>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <div className="min-h-screen pt-28 pb-24 relative">
        {/* Glow backdrop */}
        <div className="fixed top-1/4 right-0 w-[600px] h-[600px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="mb-14">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff] mb-3 block">
              02 // PROJECTS PORTFOLIO
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white mb-4">
              Things I've <span className="text-gradient-cyan-purple">built &amp; shipped.</span>
            </h1>
            <p className="text-slate-400 font-light text-base md:text-lg max-w-2xl">
              An engineering catalog of artificial intelligence applications, high-scale full-stack systems, developer tooling, and open source monorepos.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00f0ff]/15 border border-[#00f0ff] text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                      : 'glass-card border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Bento Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  key={project.title}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between"
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d18] via-transparent to-transparent opacity-90" />

                    {/* Status Pill */}
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono border bg-black/60 backdrop-blur-md border-white/15 text-slate-200">
                      {project.status}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f0ff] block mb-1">
                        {project.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-white group-hover:text-[#00f0ff] transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-xs text-[#00f0ff]">
                      <span>Inspect Architecture</span>
                      <Maximize2 size={13} className="group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <div className="mt-20 text-center glass-card rounded-2xl border border-white/10 p-10 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Interested in more source code?
            </h3>
            <p className="text-slate-400 text-xs font-mono mb-6">
              Explore 20+ additional repositories, experiments, and scripts on my GitHub.
            </p>
            <a
              href="https://github.com/abhijeet4dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#0099bb] text-xs font-mono font-bold text-[#030308] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all"
            >
              <Github size={15} /> Visit GitHub Profile <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
