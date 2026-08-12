import { useRef, useState, type ChangeEvent } from 'react';
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

  // PDF Reader State
  const pdfInputRef = useRef<HTMLInputElement>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [pdfText, setPdfText] = useState('');
  const [pdfName, setPdfName] = useState('');
  const [pdfError, setPdfError] = useState('');
  
  // ABHIJEET ASSISTANCE
  const sendMessage = async (quickMessage?: string) => {
    const textToSend = quickMessage ?? message;

    if (!textToSend.trim() || loading) return;

    setLoading(true);
    setReply('');

    try {
      const response = await window.fetch('/api/ai', {
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

  //PDF UPLOAD + TEXT EXTRACTION

   const handlePdfUpload = async (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.type !== 'application/pdf') {
      setPdfError('Please select a PDF file.');
      return;
    }

    setPdfLoading(true);
    setPdfError('');
    setPdfText('');
    setPdfName(file.name);

    try {
      // Read PDF as ArrayBuffer
      const arrayBuffer = await file.arrayBuffer();

      // Convert ArrayBuffer to base64
      const bytes = new Uint8Array(arrayBuffer);

      let binary = '';
      
      for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
      }

      const base64 = window.btoa(binary);

      // Send PDF to backend
      const response = await window.fetch('/api/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          pdf: base64,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || 'Failed to read PDF.'
        );
      }

      setPdfText(data.text || '');
    } catch (error) {
      console.error('PDF upload error:', error);

      setPdfError(
        error instanceof Error
          ? error.message
          : 'Failed to read PDF.'
      );
    } finally {
      setPdfLoading(false);
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
           
           
            <div
                className="
                  flex min-h-[260px] 
                  flex-col items-center justify-center text-center 
                "
            >


                <div>
                    
                    <span className="text-[9px] font-mono tracking-[0.15em] text-[#00f0ff]">
                      ABHIJEET ASSISTANT
                    </span>

                    <h3 className="mt-2 text-lg font-semibold text-white">
                      Ask about Him.
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


            <div 
                className="
                  flex min-h-[260px] 
                  flex-col items-center justify-center 
                  text-center 
                "
            >


                <div
                    className="
                      items-center justify-center
                      rounded-2xl
                      bg-[#00f0ff]/10
                      border border-[#00f0ff]/20
                      text-[#00f0ff]
                      shadow-[0_0_20px_rgba(0,240,255,0.06)]
                    "
                >
                    
                <button
                    type="button"
                    onClick={() => pdfInputRef.current?.click()}
                    aria-label="Upload PDF"
                    className="
                      flex h-14 w-14
                      items-center justify-center
                      rounded-2xl
                      border border-[#00f0ff]/20
                      bg-[#00f0ff]/10
                      text-[#00f0ff]
                      shadow-[0_0_20px_rgba(0,240,255,0.06)]
                      hover:border-[#00f0ff]/40
                      hover:bg-[#00f0ff]/15
                      hover:shadow-[0_0_25px_rgba(0,240,255,0.12)]
                      transition-all duration-200
                      cursor-pointer
                    "
                >
                  <FileText size={24} />
                </button>            
                
                </div>

                {/* Pdf Label */}

                <span
                    className="
                      mt-4
                      text-[8px]
                      font-mono
                      font-medium
                      tracking-[0.18em]
                      text-slate-400
                    "
                >
                  PDF INTELLIGENCE
                </span>

                
                {/* Heading */}

                <h3 
                    className="
                      mt-4 
                      text-base
                      font-semibold
                      tracking-tight
                     text-white
                    "
                >
                  Veda PDF Reader
                </h3>

                {/* DESCRIPTION */}

                <p 
                    className="
                      mt-2 
                      max-w-[270px] 
                      text-xs 
                      leading-relaxed
                      text-slate-400
                    "
                >
                  Understand every page, get instant summaries, and ask anything about it.
                  
                </p>
                
               
                {/* UPLOAD BUTTON */}  
                
                <button
                    type="button"
                    onClick={() => pdfInputRef.current?.click()}
                    disabled={pdfLoading}
                    className="
                      items-center justify-center
                      mt-5 
                      rounded-2xl
                      border border-[#00f0ff]/40
                      bg-[#00f0ff]/10
                      px-4 py-2.5
                      text-[9px]
                      font-mono
                      font-medium
                      tracking-[0.08em]
                      text-[#00f0ff]
                      shadow-[0_0_16px_rgba(0,240,255,0.06)]
                      hover:bg-[#00f0ff]/15
                      hover:border-[#00f0ff]/70
                      hover:shadow-[0_0_22px_rgba(0,240,255,0.12)]
                      transition-all duration-200
                      disabled:opacity-50 
                    "
                >
                  {pdfLoading
                     ? 'VEDA IS READING...'
                     : 'DROP YOUR PDF, LET VEDA COOK ✨'}
                </button>

                {/* AI MICROCOPY */}

                <span 
                    className="
                      mt-4
                      rounded-full
                      border border-white/10
                      bg-white/[0.03]
                      px-3 py1.5
                      text-[9px]
                      font-mono 
                      tracking-[0.08em]
                      text-slate-400 
                    "
                >
                  Your PDF has lore — feed me, I’ll decode it 👀
                </span>

                {/* PDF INPUT */}
                  
                <input
                    ref={pdfInputRef}
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={handlePdfUpload}
                />
                
                {/* PDF STATUS */}
                 
                {pdfLoading && (
                    <p className="mt-4 text-[9px] font-mono text-[#00f0ff]">
                      VEDA IS READING YOUR PDF...
                    </p>
                )}

                {pdfName && !pdfLoading && !pdfError && (
                    <p className="mt-3 max-w-[270px] truncate text-[9px] font-mono text-slate-400">
                      {pdfName}
                    </p>
                )}

                {pdfError && (
                    <p className="mt-3 max-w-[270px] text-[9px] text-red-400">
                      {pdfError}
                    </p>
                )}

                {pdfText && !pdfLoading && (
                    <div className="mt-4 max-h-32 w-full overflow-y-auto rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left">
                      <p className="mb-2 text-[8px] font-mono tracking-[0.12em] text-[#00f0ff]">
                        PDF CONTENT EXTRACTED
                      </p>

                      <p className="whitespace-pre-wrap text-[9px] leading-relaxed text-slate-400">
                        {pdfText}
                      </p>
                    </div>
                )}

                
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