import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Clock, 
  Sparkles, 
  Github, 
  Linkedin, 
  Bot, 
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const ContactView: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'Full-Stack Web Engineering',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Quick AI Chat simulator state
  const [aiInput, setAiInput] = useState('');
  const [aiChatMessages, setAiChatMessages] = useState<
    { sender: 'user' | 'assistant'; text: string }[]
  >([
    {
      sender: 'assistant',
      text: "Hi! I'm Ashmit's Portfolio Assistant. Ask me anything about Ashmit's full-stack projects, AI integrations, AR apps, or education at VIT Bhopal!",
    },
  ]);
  const [isAiThinking, setIsAiThinking] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: 'Full-Stack Web Engineering',
        message: '',
      });
    }, 1200);
  };

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiInput.trim()) return;

    const userText = aiInput;
    setAiChatMessages((prev) => [...prev, { sender: 'user', text: userText }]);
    setAiInput('');
    setIsAiThinking(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userText }),
      });

      if (response.ok) {
        const data = await response.json();
        setAiChatMessages((prev) => [...prev, { sender: 'assistant', text: data.reply }]);
      } else {
        throw new Error('API route fallback');
      }
    } catch {
      setTimeout(() => {
        let reply = `Ashmit is a Computer Science undergraduate at VIT Bhopal specializing in Full-Stack Web Development, Gemini AI integrations, and Unity AR experiences. Contact him at ${PERSONAL_INFO.email}!`;
        const lower = userText.toLowerCase();
        if (lower.includes('stack') || lower.includes('tech') || lower.includes('skills')) {
          reply = "Ashmit's tech stack includes C++, Python, JavaScript, TypeScript, C#, SQL, React, Node.js, Express, MongoDB, PostgreSQL, Prisma ORM, Unity, Vuforia, and Google Gemini AI.";
        } else if (lower.includes('project') || lower.includes('work') || lower.includes('mockmate')) {
          reply = "Ashmit has built 5+ featured projects including MockMate (AI mock interview platform with Gemini AI), MentorBoard (internship portal with Kanban & JWT), Smooth AI, EcoVerse AR (Unity + Vuforia), and AR Business Card.";
        } else if (lower.includes('college') || lower.includes('education') || lower.includes('vit')) {
          reply = "Ashmit is pursuing B.Tech in Computer Science & Engineering at VIT Bhopal University.";
        } else if (lower.includes('email') || lower.includes('contact') || lower.includes('hire')) {
          reply = `You can email Ashmit directly at ${PERSONAL_INFO.email} or connect via GitHub (github.com/ashmittt08) & LinkedIn!`;
        }
        setAiChatMessages((prev) => [...prev, { sender: 'assistant', text: reply }]);
      }, 1000);
    } finally {
      setIsAiThinking(false);
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-left space-y-3">
        <span className="font-code text-xs uppercase tracking-widest text-[#cebdff] block">
          Get In Touch
        </span>
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#dae2fd]">
          Let's build something <span className="gradient-text">extraordinary together.</span>
        </h1>
        <p className="font-sans text-base text-[#cac4d4] max-w-2xl">
          Whether you have a full-stack engineering role, an AI/AR project idea, or a collaboration inquiry, feel free to drop me a message!
        </p>
      </div>

      {/* Grid: Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card */}
        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/10 group hover:border-[#cebdff]/40">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#cebdff]/10 text-[#cebdff] flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-lg font-bold text-[#dae2fd] mb-1">Direct Email</h3>
            <p className="font-sans text-xs text-[#cac4d4] mb-4">Feel free to send an email anytime.</p>
          </div>
          <button
            onClick={copyEmail}
            className="w-full btn-secondary py-2.5 px-4 rounded-xl font-code text-xs flex items-center justify-between"
          >
            <span className="truncate">{PERSONAL_INFO.email}</span>
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-[#cebdff]" />}
          </button>
        </div>

        {/* Location Card */}
        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/10 group hover:border-[#adc6ff]/40">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#adc6ff]/10 text-[#adc6ff] flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-lg font-bold text-[#dae2fd] mb-1">Location & Education</h3>
            <p className="font-sans text-xs text-[#cac4d4] mb-4">{PERSONAL_INFO.location} ({PERSONAL_INFO.timezone})</p>
          </div>
          <div className="font-code text-xs text-[#adc6ff] flex items-center gap-2 pt-2 border-t border-white/5">
            <Clock className="w-3.5 h-3.5 text-[#a78bfa]" />
            <span>Computer Science & Engineering</span>
          </div>
        </div>

        {/* Work Status Card */}
        <div className="glass-card p-6 rounded-2xl flex flex-col justify-between border border-white/10 group hover:border-[#a78bfa]/40">
          <div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-headline text-lg font-bold text-[#dae2fd] mb-1">Availability</h3>
            <p className="font-sans text-xs text-[#cac4d4] mb-4">
              Open for full-stack engineering internships, AI/AR development projects, and software roles.
            </p>
          </div>
          <div className="flex items-center gap-2 font-code text-xs text-emerald-400">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Available for Opportunities</span>
          </div>
        </div>
      </div>

      {/* Main Section: Form + AI Assistant */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Form Column */}
        <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/10">
          <h2 className="font-headline text-2xl font-bold text-[#dae2fd] mb-2">Send a Message</h2>
          <p className="font-sans text-xs text-[#cac4d4] mb-6">
            Fill out the details below and I'll get back to you promptly.
          </p>

          {submitted ? (
            <div className="py-12 px-6 text-center bg-[#0b1326]/80 rounded-2xl border border-emerald-500/30 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h3 className="font-headline text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="font-sans text-xs text-[#cac4d4] max-w-sm mx-auto">
                Thank you for reaching out! Ashmit will review your message shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-secondary px-6 py-2 rounded-xl font-code text-xs"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-code text-xs text-[#cac4d4]">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#0b1326] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-[#dae2fd] focus:border-[#cebdff] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-code text-xs text-[#cac4d4]">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full bg-[#0b1326] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-[#dae2fd] focus:border-[#cebdff] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-code text-xs text-[#cac4d4]">Inquiry Subject</label>
                <select
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full bg-[#0b1326] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-[#dae2fd] focus:border-[#cebdff] outline-none"
                >
                  <option value="Full-Stack Web Engineering">Full-Stack Web Engineering</option>
                  <option value="AI Application / Integration">AI Application / Integration</option>
                  <option value="AR & Unity Development">AR & Unity Development</option>
                  <option value="Internship / Full-time Role">Internship / Full-time Role</option>
                  <option value="General Collaboration">General Collaboration</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between items-center font-code text-xs text-[#cac4d4]">
                  <label>Message</label>
                  <span>{formState.message.length} chars</span>
                </div>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project idea, role details, or questions..."
                  className="w-full bg-[#0b1326] border border-white/10 rounded-xl px-4 py-3 font-sans text-sm text-[#dae2fd] focus:border-[#cebdff] outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-3.5 rounded-xl font-code text-sm font-semibold flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Submit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* AI Portfolio Assistant Simulator */}
        <div className="lg:col-span-5 glass-card p-6 rounded-3xl border border-[#cebdff]/30 flex flex-col h-[520px]">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#cebdff]/20 text-[#cebdff]">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-headline text-base font-bold text-white">Ashmit's AI Assistant</h3>
                <span className="font-code text-[10px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Interactive Portfolio Q&A
                </span>
              </div>
            </div>
          </div>

          {/* Chat log */}
          <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs font-sans">
            {aiChatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#cebdff]/20 flex items-center justify-center text-[#cebdff] flex-shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#cebdff] text-[#21005e] font-medium rounded-tr-none'
                      : 'bg-[#0b1326] text-[#dae2fd] border border-white/10 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isAiThinking && (
              <div className="flex items-center gap-2 text-xs text-[#cebdff] font-code italic">
                <Bot className="w-4 h-4 animate-spin" />
                <span>AI assistant is processing...</span>
              </div>
            )}
          </div>

          {/* Chat input */}
          <form onSubmit={handleAiAsk} className="pt-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              value={aiInput}
              onChange={(e) => setAiInput(e.target.value)}
              placeholder="Ask about projects, stack, college..."
              className="flex-1 bg-[#0b1326] border border-white/10 rounded-xl px-3 py-2 text-xs text-[#dae2fd] outline-none focus:border-[#cebdff]"
            />
            <button type="submit" className="btn-primary px-3 py-2 rounded-xl text-xs font-code">
              Ask
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
