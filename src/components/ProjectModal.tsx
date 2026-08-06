import { motion, AnimatePresence } from 'motion/react';
import { X, Github, ExternalLink, ShieldCheck, Zap, Cpu } from 'lucide-react';

export interface ProjectData {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  category: string;
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
  status?: string;
  highlights?: string[];
  architecture?: string[];
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#030308]/80 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card rounded-2xl border border-white/10 overflow-hidden z-10 shadow-2xl my-8 bg-[#0b0c16]"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              <span className="ml-3 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                {project.category} // PROJECT_INSPECT
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Project Preview Image */}
          <div className="relative h-64 md:h-80 w-full overflow-hidden bg-black">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c16] via-[#0b0c16]/40 to-transparent" />
            
            {/* Status Pill */}
            {project.status && (
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono border backdrop-blur-md bg-black/60 border-[#00f0ff]/30 text-[#00f0ff]">
                ● {project.status}
              </div>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div>
                <h3 className="text-xs uppercase font-mono tracking-widest text-[#00f0ff] mb-3 flex items-center gap-2">
                  <Zap size={14} /> Key Engineering Breakthroughs
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-white/5 bg-white/[0.02] text-xs text-slate-300 flex items-start gap-2"
                    >
                      <ShieldCheck size={14} className="text-[#00f0ff] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Stack */}
            <div>
              <h3 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-3 flex items-center gap-2">
                <Cpu size={14} /> Architecture &amp; Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-md text-xs font-mono border bg-[#a78bfa]/10 border-[#a78bfa]/30 text-[#a78bfa]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/20 bg-white/5 text-xs font-mono font-medium text-white hover:border-[#00f0ff] hover:text-[#00f0ff] transition-all duration-200"
                  >
                    <Github size={15} /> Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#00f0ff] to-[#0099bb] text-xs font-mono font-semibold text-[#030308] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-200"
                  >
                    <ExternalLink size={15} /> Launch Live Demo
                  </a>
                )}
              </div>

              <span className="text-xs font-mono text-muted-foreground">
                Press ESC to exit
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
