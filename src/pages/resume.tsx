import { Helmet } from '@dr.pogodin/react-helmet';
import { Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function ResumePage() {
  return (
    <>
      <Helmet>
        <title>Resume — Abhijeet Singh Khichi</title>
      </Helmet>

      <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="fixed top-1/4 right-0 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Header */}
          <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff] block mb-2">
                  CURRICULUM VITAE // 2026
                </span>
                <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-2">
                  Abhijeet <span className="text-gradient-cyan-purple">Singh Khichi</span>
                </h1>
                <p className="text-sm font-mono text-slate-300">
                  CS Engineer · Full Stack &amp; AI Systems Developer
                </p>
              </div>

              <a
                href="/data/Abhijeet Singh Khichi_Resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#0099bb] text-xs font-mono font-bold text-[#030308] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all shrink-0"
              >
                <Download size={15} /> Download PDF
              </a>
            </div>

            {/* Quick Contact Bar */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <a href="mailto:abhijeetsinghkhichi64@gmail.com" className="flex items-center gap-1.5 hover:text-[#00f0ff]">
                <Mail size={13} className="text-[#00f0ff]" /> abhijeetsinghkhichi64@gmail.com
              </a>
              <a href="https://github.com/abhijeet4dev" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#00f0ff]">
                <Github size={13} className="text-[#00f0ff]" /> github.com/abhijeet4dev
              </a>
              <a href="https://www.linkedin.com/in/abhijeet-singh-khichi-6087962b1/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#00f0ff]">
                <Linkedin size={13} className="text-[#00f0ff]" /> linkedin.com/in/abhijeet-singh-khichi
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-[#00f0ff]" /> India
              </span>
            </div>
          </div>

          {/* Section 01: Summary */}
          <section className="glass-card rounded-2xl p-8 border border-white/10 space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
              01 // EXECUTIVE SUMMARY
            </h2>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
              B.Tech Computer Science student specializing in Artificial Intelligence and Software Engineering. Demonstrated expertise in building production full-stack React/Node.js web applications, Gen-AI tools with LangChain and vector databases, and containerized cloud services. Passionate about clean code, high-velocity performance, and scalable system design. Seeking engineering roles &amp; internships.
            </p>
          </section>

          {/* Section 02: Work Experience */}
          <section className="glass-card rounded-2xl p-8 border border-white/10 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
              02 // EXPERIENCE
            </h2>

            <div className="space-y-8">
              <div className="border-l-2 border-[#00f0ff] pl-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-white">
                    Google Summer of Code Intern
                  </h3>
                  <span className="text-xs font-mono text-[#00f0ff]">Summer 2026</span>
                </div>
                <div className="text-xs font-mono text-slate-400">Google India // Hyderabad, India</div>
                <ul className="text-xs text-slate-300 font-light space-y-1.5 pt-2">
                  <li>• Engineered internal developer tooling using React, Express, and Redis, adopted by 40+ internal developers.</li>
                  <li>• Reduced CI/CD pipeline execution time by 35% through test suite parallelization and artifact caching.</li>
                  <li>• Built a reactive telemetry dashboard surfacing review bottlenecks, reducing PR turnaround time.</li>
                </ul>
              </div>

              <div className="border-l-2 border-white/20 pl-4 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-heading text-lg font-bold text-white">
                    Open Source Builder &amp; Maintainer
                  </h3>
                  <span className="text-xs font-mono text-slate-400">2026 – Present</span>
                </div>
                <div className="text-xs font-mono text-slate-400">GitHub Community</div>
                <ul className="text-xs text-slate-300 font-light space-y-1.5 pt-2">
                  <li>• Authored FullStack Starter Kit monorepo (200+ GitHub stars), used by international developers.</li>
                  <li>• Merged PRs into popular developer repositories fixing security bugs and performance issues.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 03: Education */}
          <section className="glass-card rounded-2xl p-8 border border-white/10 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#a78bfa]">
              03 // EDUCATION
            </h2>

            <div className="border-l-2 border-[#a78bfa] pl-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-heading text-lg font-bold text-white">
                  B.Tech in Computer Science &amp; Engineering
                </h3>
                <span className="text-xs font-mono text-[#a78bfa]">2025 – Present</span>
              </div>
              <div className="text-xs font-mono text-slate-400">MediCaps University // CGPA: 8.01 / 10</div>
              <p className="text-xs text-slate-300 font-light pt-2 leading-relaxed">
                Specialization in Artificial Intelligence &amp; Software Engineering. Coursework: Data Structures &amp; Algorithms, System Design, Full Stack Development, DBMS, Operating Systems, Computer Networks, Machine Learning.
              </p>
            </div>
          </section>

          {/* Section 04: Technical Skills */}
          <section className="glass-card rounded-2xl p-8 border border-white/10 space-y-6">
            <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff]">
              04 // TECHNICAL SKILLS
            </h2>

            <div className="grid sm:grid-cols-2 gap-6 text-xs font-mono">
              <div>
                <span className="text-slate-400 block mb-2 uppercase">Languages:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['TypeScript', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML5/CSS3'].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 block mb-2 uppercase">Frameworks &amp; Libraries:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['React 19', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'FastAPI', 'LangChain'].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff]">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 block mb-2 uppercase">Databases &amp; DevOps:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS', 'Git/GitHub'].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-white">{s}</span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-slate-400 block mb-2 uppercase">AI / ML:</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Generative AI', 'LLMs', 'RAG Pipelines', 'Vector Databases', 'PyTorch'].map((s) => (
                    <span key={s} className="px-2.5 py-1 rounded bg-[#a78bfa]/10 border border-[#a78bfa]/30 text-[#a78bfa]">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* PDF Download Prompt */}
          <div className="text-center glass-card rounded-2xl p-8 border border-white/10">
            <p className="text-xs font-mono text-slate-300 mb-4">
              Need an official PDF copy for review or application submissions?
            </p>
            <a
              href="/data/Abhijeet Singh Khichi_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00f0ff] to-[#0099bb] text-xs font-mono font-bold text-[#030308] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              <Download size={15} /> Download Official PDF Resume
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
