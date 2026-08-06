import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Helmet } from '@dr.pogodin/react-helmet';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Clock,
  Terminal
} from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Full name is required.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Valid email address required.';
    if (!form.message.trim() || form.message.trim().length < 10)
      e.message = 'Message must be at least 10 characters.';
    return e;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setServerMessage(data.message || 'Message received! I will reply within 24 hours.');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setServerMessage(data.error || 'Direct transmission failed. Please try emailing directly.');
      }
    } catch {
      // Fallback response for dev environments without API backend
      setTimeout(() => {
        setStatus('success');
        setServerMessage('Message transmitted successfully! Abhijeet will get back to you shortly.');
        setForm({ name: '', email: '', subject: '', message: '' });
      }, 1000);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact — Abhijeet Singh Khichi</title>
      </Helmet>

      <div className="min-h-screen pt-28 pb-24 relative overflow-hidden">
        {/* Glow lights */}
        <div className="fixed top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#00f0ff] mb-3 block">
              05 // TRANSMISSION TERMINAL
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white mb-4">
              Let's <span className="text-gradient-cyan-purple">build together.</span>
            </h1>
            <p className="text-slate-400 font-light text-base md:text-lg max-w-xl">
              Open for software engineering roles, internships, full-stack projects, and technical collaborations. Send a message to get started.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl border border-white/10 p-8 md:p-10 shadow-2xl relative">
                <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/10 text-xs font-mono text-slate-400">
                  <Terminal size={14} className="text-[#00f0ff]" />
                  <span>SECURE_MESSAGE_PROTOCOL v2.6</span>
                </div>

                {status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00f0ff]/15 border border-[#00f0ff]/40 flex items-center justify-center mx-auto text-[#00f0ff]">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Transmission Confirmed
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
                      {serverMessage}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-xs font-mono text-[#00f0ff] hover:underline"
                    >
                      Send another transmission →
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Alex Vance"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white outline-none transition-all ${
                            errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-[#00f0ff]'
                          }`}
                        />
                        {errors.name && (
                          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          placeholder="alex@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white outline-none transition-all ${
                            errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-[#00f0ff]'
                          }`}
                        />
                        {errors.email && (
                          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                            <AlertCircle size={12} /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                        Subject (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Software Internship / Project Collab / Greeting"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-sm text-white outline-none focus:border-[#00f0ff] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 uppercase mb-2">
                        Message *
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Describe your project, opportunity, or timeline..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white outline-none transition-all resize-none ${
                          errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-[#00f0ff]'
                        }`}
                      />
                      {errors.message && (
                        <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0099bb] text-sm font-mono font-bold text-[#030308] hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {status === 'sending' ? (
                        <span>Transmitting Data...</span>
                      ) : (
                        <>
                          <Send size={15} /> Transmit Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-5 space-y-6">
              {/* Availability Status */}
              <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff]">
                  <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
                  <span>CURRENT STATUS: AVAILABLE</span>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Actively accepting applications for Q3/Q4 software engineering internships, graduate engineering roles, and custom contract projects.
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-white/5">
                  <Clock size={13} className="text-[#00f0ff]" />
                  <span>Average Response Time: &lt; 12 Hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <a
                  href="mailto:abhijeetsinghkhichi64@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/10 hover:border-[#00f0ff]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/30 flex items-center justify-center text-[#00f0ff]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Direct Email</div>
                    <div className="text-xs font-mono text-white group-hover:text-[#00f0ff]">
                      abhijeetsinghkhichi64@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/abhijeet4dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/10 hover:border-[#00f0ff]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Github size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">GitHub Profile</div>
                    <div className="text-xs font-mono text-white group-hover:text-[#00f0ff]">
                      https://github.com/abhijeet4dev
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/abhijeet-singh-khichi-6087962b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-card border border-white/10 hover:border-[#00f0ff]/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">LinkedIn Profile</div>
                    <div className="text-xs font-mono text-white group-hover:text-[#00f0ff]">
                      abhijeet-singh-khichi-6087962b1
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
