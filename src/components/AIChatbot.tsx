import { useState } from 'react';
import { Sparkles, X, UserRound, FileText, Globe } from 'lucide-react';

type Section = 'assistant' | 'pdf' | 'general';

export default function AIChatBox() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] =
    useState<Section>('assistant');

  // AI Chat State
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (quickMessage?: string) => {
    const textToSend = quickMessage ?? message;

    if (!textToSend.trim() || loading) return;

    setLoading(true);
    setReply('');

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: textToSend.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Failed to get AI response.'
        );
      }

      setReply(data.reply || 'No response received.');
      setMessage('');
    } catch (error) {
      console.error('AI chat error:', error);
      setReply(
        'Sorry, I could not get a response right now.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* VEDA AI — FLOATING BUTTON */}
      <div className="fixed bottom-6 right-6 z-[100]">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Open Veda AI"
          className="
            group
            flex items-center gap-3
            px-4 py-3
            rounded-full
            border border-[#00f0ff]/30
            bg-[#071116]/95
            backdrop-blur-xl
            shadow-[0_0_25px_rgba(0,240,255,0.12)]
            hover:border-[#00f0ff]/70
            hover:shadow-[0_0_35px_rgba(0,240,255,0.25)]
            transition-all duration-300
          "
        >
          {/* AI CORE */}
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span
              className="
                absolute inset-0
                rounded-full
                bg-[#00f0ff]/15
                border border-[#00f0ff]/30
                animate-pulse
              "
            />

            <span
              className="
                relative z-10
                flex h-6 w-6
                items-center justify-center
                rounded-full
                bg-[#00f0ff]/10
                text-[#00f0ff]
                shadow-[0_0_15px_rgba(0,240,255,0.35)]
              "
            >
              <Sparkles size={13} />
            </span>
          </span>

          {/* VEDA BRANDING */}
          <span className="text-left">
            <span className="block text-sm font-semibold tracking-wide text-white">
              Veda AI
            </span>

            <span className="block text-[8px] font-mono tracking-[0.12em] text-slate-400">
              INTELLIGENCE INSPIRED BY AGES
            </span>

            <span className="block mt-1 text-[7px] font-mono tracking-[0.08em] text-slate-400/80">
              Carried forward by{' '}
              <span className="text-[#00f0ff]/80">
                Abhijeet4Dev
              </span>
            </span>
          </span>
        </button>

        {/* CHAT WINDOW */}
        {open && (
          <div
            className="
              absolute bottom-16 right-0
              w-[390px]
              max-w-[calc(100vw-32px)]
              overflow-hidden
              rounded-2xl
              border border-white/10
              bg-[#070b10]/95
              backdrop-blur-2xl
              shadow-[0_20px_70px_rgba(0,0,0,0.55)]
            "
          >
            {/* HEADER */}
            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00f0ff] opacity-50" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00f0ff]" />
                    </span>

                    <span className="text-sm font-semibold text-white">
                      Veda AI
                    </span>
                  </div>

                  <p className="mt-1 text-[9px] font-mono tracking-[0.12em] text-slate-400">
                    INTELLIGENCE INSPIRED BY AGES
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="
                    rounded-lg p-2
                    text-slate-400
                    hover:bg-white/5
                    hover:text-white
                    transition
                  "
                  aria-label="Close Veda AI"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* THREE SECTIONS */}
            <div className="grid grid-cols-3 gap-1 border-b border-white/10 bg-black/20 p-2">

              {/* ABHIJEET ASSISTANT */}
              <button
                onClick={() => setActiveSection('assistant')}
                className={`
                  flex flex-col items-center gap-1.5
                  rounded-xl px-2 py-3
                  transition-all duration-200
                  ${
                    activeSection === 'assistant'
                      ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30'
                      : 'text-slate-500 border border-transparent hover:text-slate-300 hover:bg-white/[0.03]'
                  }
                `}
              >
                <UserRound size={16} />

                <span className="text-[9px] font-mono">
                  ABHIJEET
                </span>

                <span className="text-[7px] text-slate-500">
                  Assistant
                </span>
              </button>

              {/* PDF READER */}
              <button
                onClick={() => setActiveSection('pdf')}
                className={`
                  flex flex-col items-center gap-1.5
                  rounded-xl px-2 py-3
                  transition-all duration-200
                  ${
                    activeSection === 'pdf'
                      ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30'
                      : 'text-slate-500 border border-transparent hover:text-slate-300 hover:bg-white/[0.03]'
                  }
                `}
              >
                <FileText size={16} />

                <span className="text-[9px] font-mono">
                  PDF
                </span>

                <span className="text-[7px] text-slate-500">
                  Reader
                </span>
              </button>

              {/* GENERAL AI */}
              <button
                onClick={() => setActiveSection('general')}
                className={`
                  flex flex-col items-center gap-1.5
                  rounded-xl px-2 py-3
                  transition-all duration-200
                  ${
                    activeSection === 'general'
                      ? 'bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30'
                      : 'text-slate-500 border border-transparent hover:text-slate-300 hover:bg-white/[0.03]'
                  }
                `}
              >
                <Globe size={16} />

                <span className="text-[9px] font-mono">
                  GENERAL
                </span>

                <span className="text-[7px] text-slate-500">
                  AI
                </span>
              </button>
            </div>

            {/* MAIN CONTENT */}
            <div className="px-5 py-6 min-h-[280px]">

              {/* SECTION 1 — ABHIJEET ASSISTANT */}
              {activeSection === 'assistant' && (
                <div className="space-y-5">

                  <div>
                    <span className="text-[9px] font-mono tracking-[0.15em] text-[#00f0ff]">
                      ABHIJEET ASSISTANT
                    </span>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Ask about Abhijeet.
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      Ask about Abhijeet's education, skills,
                      coding journey, projects, goals, or
                      technical interests.
                    </p>
                  </div>

                  {/* QUICK QUESTIONS */}
                  <div>
                    <p className="mb-2 text-[9px] font-mono text-slate-500">
                      QUICK QUESTIONS
                    </p>

                    <div className="flex flex-wrap gap-2">




                      <button
                      onClick={() => sendMessage("Specific question")}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.03]
                          px-1.2 py-1
                          text-[8px] text-slate-400
                          hover:border-[#00f0ff]/40
                          hover:text-[#00f0ff]
                          transition
                        "
                      >
                      </button>


                   

                      <button
                        onClick={() => sendMessage("Who is Abhijeet?")}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.03]
                          px-3 py-1.5
                          text-[9px] text-slate-400
                          hover:border-[#00f0ff]/40
                          hover:text-[#00f0ff]
                          transition
                        "
                      >
                        Who is Abhijeet?
                      </button>


                    

                      <button
                        onClick={() => sendMessage("What are his skills?")}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.03]
                          px-3 py-1.5
                          text-[9px] text-slate-400
                          hover:border-[#00f0ff]/40
                          hover:text-[#00f0ff]
                          transition
                        "
                      >
                        What are his skills?
                      </button>


                     

                      <button
                        onClick={() => sendMessage("What is Abhijeet Learning?")}
                        className="
                          rounded-full
                          border border-white/10
                          bg-white/[0.03]
                          px-3 py-1.5
                          text-[9px] text-slate-400
                          hover:border-[#00f0ff]/40
                          hover:text-[#00f0ff]
                          transition
                        "
                      >
                        What is he learning?
                      </button>
                        
                      


                    </div>
                  </div>



               {(reply || loading) && (
                 <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                   <p className="text-[9px] font-mono text-[#00f0ff] mb-1">
                     VEDA AI
                   </p>
               
                   <p className="text-xs leading-relaxed text-slate-300">
                     {loading ? "Thinking..." : reply}
                   </p>
                 </div>
               )}


                  {/* CHAT INPUT */}
                  <div className="flex items-center gap-2 pt-2">

                    <input
                      type="text"
                      placeholder="Ask about Abhijeet..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          sendMessage();
                        }
                      }}
                      className="
                        flex-1
                        rounded-xl
                        border border-white/10
                        bg-white/[0.03]
                        px-4 py-3
                        text-xs text-white
                        placeholder:text-slate-600
                        outline-none
                        focus:border-[#00f0ff]/50
                        transition
                      "
                    />

                    <button
                     onClick={() => sendMessage()}
                     disabled={loading}
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-xl
                        bg-[#00f0ff]/10
                        border border-[#00f0ff]/30
                        text-[#00f0ff]
                        hover:bg-[#00f0ff]/20
                        transition
                      "
                    >
                      <Sparkles size={15} />
                    </button>

                  </div>
                </div>
              )}

              {/* SECTION 2 — PDF READER */}
              {activeSection === 'pdf' && (
                <div className="flex min-h-[260px] flex-col items-center justify-center text-center">

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-[#00f0ff]/10
                      border border-[#00f0ff]/20
                      text-[#00f0ff]
                    "
                  >
                    <FileText size={24} />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    Veda PDF Reader
                  </h3>

                  <p className="mt-2 max-w-[260px] text-xs leading-relaxed text-slate-500">
                    Upload a PDF and ask questions about
                    its contents.
                  </p>

                  <span className="mt-5 rounded-full border border-[#00f0ff]/20 bg-[#00f0ff]/5 px-3 py-1 text-[8px] font-mono tracking-wider text-[#00f0ff]">
                    COMING NEXT
                  </span>

                </div>
              )}

              {/* SECTION 3 — GENERAL AI */}
              {activeSection === 'general' && (
                <div className="flex min-h-[260px] flex-col items-center justify-center text-center">

                  <div
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      bg-[#a78bfa]/10
                      border border-[#a78bfa]/20
                      text-[#a78bfa]
                    "
                  >
                    <Globe size={24} />
                  </div>

                  <h3 className="mt-4 text-sm font-semibold text-white">
                    Veda General Intelligence
                  </h3>

                  <p className="mt-2 max-w-[260px] text-xs leading-relaxed text-slate-500">
                    Ask general questions and get concise
                    AI-powered answers.
                  </p>

                  <span className="mt-5 rounded-full border border-[#a78bfa]/20 bg-[#a78bfa]/5 px-3 py-1 text-[8px] font-mono tracking-wider text-[#a78bfa]">
                    FUTURE MODULE
                  </span>

                </div>
              )}
            </div>

            {/* FOOTER */}
            <div className="border-t border-white/10 px-5 py-4 text-center">

              <p className="text-[9px] font-mono tracking-[0.12em] text-slate-400">
                INTELLIGENCE INSPIRED BY AGES
              </p>

              <p className="mt-1 text-[9px] font-mono tracking-[0.08em] text-slate-500">
                BEYOND BOUNDARIES
              </p>

              <div className="mt-3 h-px w-12 mx-auto bg-[#00f0ff]/20" />

              <p className="mt-3 text-[9px] font-mono tracking-[0.08em] text-slate-400">
                Carried forward by{' '}
                <span className="text-[#00f0ff]/80">
                  Abhijeet4Dev
                </span>
              </p>

            </div>

          </div>
        )}
      </div>
    </>
  );
}