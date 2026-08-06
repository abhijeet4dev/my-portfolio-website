import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Terminal,
  Zap,
  Layers,
  Code,
  Cpu,
  Maximize2
} from 'lucide-react';
import { Helmet } from '@dr.pogodin/react-helmet';
import ProjectModal, { ProjectData } from '@/components/ProjectModal';

// ─── Terminal Typewriter ──────────────────────────────────────────────────────
const roles = [
  'CS Student @ MediCaps University',
  'Open Source Builder & Contributor',
  'Full Stack MERN & AI Systems Developer',
  'Generative AI & LLM Infrastructure Engineer',
];

function TerminalText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 50);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 25);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl glass-card border border-white/10 font-mono text-xs md:text-sm text-slate-300">
      <Terminal size={15} className="text-[#00f0ff]" />
      <span className="text-[#00f0ff] opacity-70">root@abhi4dev:~#</span>
      <span className="text-white font-medium">{displayed}</span>
      <span className="w-2 h-4 bg-[#00f0ff] animate-pulse inline-block" />
    </div>
  );
}

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const featuredProjects: ProjectData[] = [
    {
      title: 'AI Code Review Assistant',
      description:
        'An LLM-powered autonomous code review engine that inspects pull requests, pinpoints security vulnerabilities, and generates contextual optimization PRs using GPT-4 & LangChain.',
      longDescription:
        'Built to automate repetitive pull request inspection, this tool parses git diffs, analyzes AST structures, evaluates security patterns against OWASP top 10, and generates precise inline GitHub comments with unit test recommendations.',
      tags: ['Python', 'LangChain', 'OpenAI API', 'FastAPI', 'GitHub Actions'],
      category: 'AI / ML',
      image: '/assets/projects/ai_reviewer.jpg',
      github: 'https://github.com/abhijeet4dev',
      live: 'https://aicodereviewassistant.com/abhi4dev',
      featured: true,
      status: 'Live',
      highlights: [
        '60% reduction in average pull request turnaround time',
        'Integrated AST parsing for zero false-positive syntax feedback',
        'Automatic vector DB caching for code context memory',
      ],
    },
    {
      title: 'DevMetrics Telemetry Dashboard',
      description:
        'Real-time analytics & engineering velocity platform. Tracks deployment frequency, PR cycle time, and DORA engineering metrics.',
      longDescription:
        'Engineered for engineering managers and team leads, DevMetrics connects directly into GitHub and CI/CD webhooks to stream live telemetry metrics onto a reactive dashboard with zero page reloads.',
      tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
      category: 'Full Stack',
      image: '/assets/projects/dev_metrics.jpg',
      github: 'https://github.com/abhijeet4dev',
      live: 'https://devmetrics.com/abhi4dev',
      featured: true,
      status: 'In Progress',
      highlights: [
        'Sub-100ms WebSocket metrics streaming',
        'High-density charts using custom SVG graphics',
        'Role-based security & workspace access control',
      ],
    },
    {
      title: 'FullStack Starter Kit Monorepo',
      description:
        'Production-ready full stack template featuring Next.js, Prisma ORM, Docker Compose, and automated CI/CD pipelines. 200+ GitHub stars.',
      longDescription:
        'A battle-tested architecture template crafted for developers launching web apps. Includes out-of-the-box OAuth, transactional email templates, database migration workflows, and zero-downtime deployment scripts.',
      tags: ['Next.js', 'Prisma', 'Docker', 'GitHub Actions', 'TypeScript'],
      category: 'Open Source',
      image: '/assets/projects/starter_kit.jpg',
      github: 'https://github.com/abhijeet4dev',
      live: 'https://fullstackstarterkit.com/abhi4dev',
      featured: false,
      status: 'Live',
      highlights: [
        'Adopted by 200+ open-source developers',
        'Complete end-to-end type safety from DB to UI',
        'Containerized Docker Compose environment',
      ],
    },
    {
      title: 'NLP Sentiment Analyzer',
      description:
        'Fine-tuned BERT Transformer for multi-class emotion and sentiment extraction across high-throughput streaming datasets.',
      longDescription:
        'Leverages PyTorch and HuggingFace Transformers fine-tuned on multi-class customer telemetry data. Deployed as an async FastAPI service behind Docker containers.',
      tags: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Scikit-Learn'],
      category: 'AI / ML',
      image: '/assets/projects/nlp_sentiment.jpg',
      github: 'https://github.com/abhijeet4dev',
      featured: false,
      status: 'Live',
      highlights: [
        '91% accuracy benchmark on multi-class dataset',
        'Asynchronous batch inference queue',
      ],
    },
  ];

  const skillCategories = [
    {
      title: 'Core Languages',
      icon: Code,
      skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML5/CSS3'],
    },
    {
      title: 'Frontend & UI',
      icon: Layers,
      skills: ['React 19', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Zustand', 'Vite'],
    },
    {
      title: 'Backend & Cloud',
      icon: Cpu,
      skills: ['Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
    },
    {
      title: 'AI & Data Systems',
      icon: Zap,
      skills: ['Generative AI', 'LLMs', 'LangChain', 'RAG Pipelines', 'Vector Databases', 'PyTorch'],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Abhijeet Singh Khichi — 2026 Futuristic Software Engineer</title>
      </Helmet>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* Deep ambient glow spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-[#a78bfa]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 text-center md:text-left">
          <div className="max-w-4xl mx-auto md:mx-0">
            {/* Status Beacon */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-[#00f0ff]/30 text-xs font-mono text-[#00f0ff] mb-8 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
              <span>Available for Software Engineering Roles &amp; Internships 2026</span>
            </motion.div>

            {/* Editorial Main Heading */}
            <div className="space-y-2 mb-6">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[0.95]"
              >
                Abhijeet
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight text-gradient-cyan-purple leading-[0.95]"
              >
                Singh Khichi
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl font-sans font-light leading-relaxed mb-8"
            >
              Computer Science Engineer building intelligent AI platforms, scalable web architectures, and seamless digital products designed for the future.
            </motion.p>

            {/* Terminal typewriter line */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mb-10"
            >
              <TerminalText />
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4"
            >
              <Link
                to="/projects"
                className="group flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#0099bb] text-sm font-mono font-bold text-[#030308] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="/data/Abhijeet Singh Khichi_Resume.pdf"
                download
                className="flex items-center gap-2 px-7 py-3.5 rounded-full glass-card border border-white/20 text-sm font-mono font-medium text-white hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all duration-300"
              >
                <Download size={16} /> Resume PDF
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 ml-3">
                <a
                  href="https://github.com/abhijeet4dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full glass-card border border-white/10 text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhijeet-singh-khichi-6087962b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full glass-card border border-white/10 text-slate-400 hover:text-[#00f0ff] hover:border-[#00f0ff]/30 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SKILLS MATRIX SECTION ── */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
              01 // CAPABILITIES MATRIX
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
          </div>

          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
              Architecting with cutting-edge tools &amp; frameworks.
            </h2>
            <p className="text-slate-400 text-sm md:text-base font-light">
              Mastering full-stack web technologies, distributed backend services, and machine learning models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => {
              const IconComp = cat.icon;
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#00f0ff]/10 border border-[#00f0ff]/25 flex items-center justify-center mb-5 text-[#00f0ff] group-hover:scale-110 transition-transform duration-300">
                    <IconComp size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-4">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 group-hover:border-[#00f0ff]/30 group-hover:text-[#00f0ff] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS SHOWCASE (BENTO GRID) ── */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
              02 // FEATURED WORK
            </span>
            <div className="flex-1 h-px bg-gradient-to-r from-[#00f0ff]/40 to-transparent" />
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-3">
                Selected Product Showcase
              </h2>
              <p className="text-slate-400 text-sm md:text-base font-light">
                Click any project card to open full architecture breakdown and live links.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:flex items-center gap-2 font-mono text-xs text-[#00f0ff] hover:underline"
            >
              View All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer glass-card glass-card-hover rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between"
              >
                {/* Thumbnail Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d18] via-transparent to-transparent opacity-90" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono border bg-black/60 backdrop-blur-md border-white/15 text-slate-200">
                      {project.category}
                    </span>
                  </div>

                  {/* Expand Overlay Indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={15} />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tag Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#a78bfa]/10 border border-[#a78bfa]/20 text-[#a78bfa]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-[#00f0ff]">
                    <span>Inspect Details &amp; Live Demo</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-[#00f0ff] hover:underline"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ── METRICS & HIGHLIGHTS ── */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '08+', label: 'Shipped Systems & Apps' },
              { num: '8.01', label: 'B.Tech CS CGPA' },
              { num: '200+', label: 'GitHub Stars Earned' },
              { num: '100%', label: 'Commitment to Excellence' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="font-display text-4xl md:text-5xl font-extrabold text-gradient-cyan-purple mb-2">
                  {stat.num}
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT BANNER CTA ── */}
      <section className="py-24 relative z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="relative rounded-3xl glass-card border border-white/10 p-10 md:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/10 via-[#a78bfa]/10 to-transparent pointer-events-none" />

            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff] mb-4 inline-block">
              03 // INITIATE CONTACT
            </span>

            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
              Let's create something extraordinary.
            </h2>

            <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base font-light mb-8 leading-relaxed">
              Available for software engineering roles, full-stack projects, AI consulting, and technical collaborations.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#0099bb] text-sm font-mono font-bold text-[#030308] hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300"
              >
                <Mail size={16} /> Send Direct Message
              </Link>
              <a
                href="mailto:abhijeetsinghkhichi64@gmail.com"
                className="flex items-center gap-2 px-8 py-4 rounded-full glass-card border border-white/20 text-sm font-mono text-white hover:border-[#00f0ff] transition-all duration-300"
              >
                Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
