import React, { useState } from 'react';
import { 
  Mail, 
  Terminal, 
  Send, 
  MapPin, 
  Github, 
  Linkedin, 
  Grid, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Code2,
  Gamepad2,
  Check,
  Copy,
  Layers,
  Database,
  Cloud
} from 'lucide-react';
import { NavigationTab, Project } from '../../types';
import { PERSONAL_INFO, PROJECTS_DATA } from '../../data/portfolioData';

interface HomeViewProps {
  setActiveTab: (tab: NavigationTab) => void;
  onSelectProject: (project: Project) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, onSelectProject }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'config' | 'stack' | 'goals'>('config');

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const featuredProjects = PROJECTS_DATA.filter((p) => p.featured);

  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      {/* Mesh Background Glows */}
      <div className="hero-mesh" />
      <div className="glow-effect top-32 -left-20" />
      <div className="glow-effect bottom-40 -right-20" />

      {/* 1. PROFESSIONAL SHORT HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-16 max-w-4xl mx-auto py-12">
        {/* Profile Image - Circular Frame */}
        <div className="mb-6 relative group">
          <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[#cebdff]/40 p-1 bg-[#171f33] shadow-2xl shadow-[#cebdff]/20 transition-all duration-300 group-hover:scale-105 group-hover:border-[#cebdff]">
            <img
              src="/profile.jpg"
              alt="Ashmit Saxena"
              className="w-full h-full object-cover rounded-full filter contrast-105 brightness-105"
            />
          </div>
        </div>

        {/* Hero Title */}
        <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight mb-3 text-[#dae2fd]">
          Ashmit Saxena
        </h1>

        {/* Professional Subheading */}
        <p className="font-code text-sm sm:text-base font-semibold text-[#cebdff] mb-4">
          Full-Stack Developer &bull; AI Enthusiast &bull; AR & Game Developer
        </p>

        {/* Short Bio */}
        <p className="font-sans text-base sm:text-lg text-[#cac4d4] max-w-2xl mb-8 leading-relaxed">
          Building modern web applications, AI solutions, and immersive AR experiences combining clean user interfaces with scalable backends.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab('projects')}
            className="btn-primary px-7 py-3 rounded-xl font-code text-sm flex items-center gap-2 shadow-lg shadow-[#cebdff]/10 group"
          >
            <Grid className="w-4 h-4 text-[#21005e]" />
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 text-[#21005e] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className="btn-secondary px-7 py-3 rounded-xl font-code text-sm flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#adc6ff]" />
            <span>Contact Me</span>
          </button>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center justify-center gap-6 text-[#cac4d4] opacity-90 hover:opacity-100 transition-opacity pt-4 border-t border-white/10 w-full max-w-sm">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-[#cebdff] hover:bg-white/5 transition-colors flex items-center gap-2 font-code text-xs"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="w-px h-4 bg-white/20"></span>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:text-[#cebdff] hover:bg-white/5 transition-colors flex items-center gap-2 font-code text-xs"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <span className="w-px h-4 bg-white/20"></span>
          <button
            onClick={copyEmail}
            className="p-2 rounded-lg hover:text-[#cebdff] hover:bg-white/5 transition-colors flex items-center gap-1.5 font-code text-xs"
            title="Copy Direct Email"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copiedEmail ? 'Copied!' : 'Email'}</span>
          </button>
        </div>
      </section>

      {/* 2. TECH STACK (WITH SKILL ICONS) SECTION */}
      <section className="py-16 px-4 sm:px-8 md:px-16 max-w-6xl mx-auto relative z-10">
        <div className="mb-12 text-center">
          <span className="font-code text-xs uppercase tracking-widest text-[#a78bfa] block mb-2">Technical Arsenal</span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#dae2fd]">
            Tech Stack & Tools
          </h2>
          <p className="font-sans text-sm text-[#cac4d4] mt-2">
            Technologies and frameworks I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#cebdff]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#cebdff]/10 text-[#cebdff] flex items-center justify-center">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[#dae2fd]">Languages</h3>
              </div>
              <p className="font-sans text-xs text-[#cac4d4] mb-5">
                C++, C#, Python, JavaScript, TypeScript
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=cpp,cs,python,js,ts"
                alt="Languages Tech Stack"
                className="h-12 hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Frontend */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#adc6ff]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#adc6ff]/10 text-[#adc6ff] flex items-center justify-center">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[#dae2fd]">Frontend</h3>
              </div>
              <p className="font-sans text-xs text-[#cac4d4] mb-5">
                React, HTML5, CSS3, Tailwind CSS
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=html,css,react,tailwind"
                alt="Frontend Tech Stack"
                className="h-12 hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Backend & Database */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#a78bfa]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a78bfa]/10 text-[#a78bfa] flex items-center justify-center">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[#dae2fd]">Backend & Database</h3>
              </div>
              <p className="font-sans text-xs text-[#cac4d4] mb-5">
                Node.js, Express, Firebase, MongoDB, PostgreSQL, Prisma
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=nodejs,express,firebase,mongodb,mysql,postgres"
                alt="Backend Tech Stack"
                className="h-12 hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Cloud & Tools */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#cebdff]/40 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#cebdff]/10 text-[#cebdff] flex items-center justify-center">
                  <Cloud className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[#dae2fd]">Cloud & Developer Tools</h3>
              </div>
              <p className="font-sans text-xs text-[#cac4d4] mb-5">
                Git, GitHub, VS Code, Postman, Vercel, Render
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=git,github,vscode,postman,vercel"
                alt="Cloud and Tools Stack"
                className="h-12 hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Game Development */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#ddb8ff]/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#ddb8ff]/10 text-[#ddb8ff] flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5" />
                </div>
                <h3 className="font-headline text-lg font-bold text-[#dae2fd]">Game & AR Development</h3>
              </div>
              <p className="font-sans text-xs text-[#cac4d4] mb-5">
                Unity Engine, Vuforia AR SDK, Blender 3D
              </p>
            </div>
            <div className="pt-3 border-t border-white/5 flex justify-center">
              <img
                src="https://skillicons.dev/icons?i=unity"
                alt="Game Development Tech Stack"
                className="h-12 hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DEV TERMINAL SECTION */}
      <section className="py-12 px-4 sm:px-8 md:px-16 max-w-5xl mx-auto relative z-10">
        <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Terminal Titlebar */}
          <div className="bg-[#0b1326] px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 font-code text-xs text-[#cac4d4] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#cebdff]" />
                ashmit_developer_card.ts
              </span>
            </div>
            
            {/* Code Tabs */}
            <div className="flex gap-1 bg-[#171f33] p-1 rounded-lg border border-white/5">
              <button
                onClick={() => setActiveCodeTab('config')}
                className={`px-3 py-1 rounded text-xs font-code transition-colors ${
                  activeCodeTab === 'config' ? 'bg-[#a78bfa]/20 text-[#cebdff] font-semibold' : 'text-[#cac4d4] hover:text-white'
                }`}
              >
                config.ts
              </button>
              <button
                onClick={() => setActiveCodeTab('stack')}
                className={`px-3 py-1 rounded text-xs font-code transition-colors ${
                  activeCodeTab === 'stack' ? 'bg-[#a78bfa]/20 text-[#cebdff] font-semibold' : 'text-[#cac4d4] hover:text-white'
                }`}
              >
                tech_stack.json
              </button>
              <button
                onClick={() => setActiveCodeTab('goals')}
                className={`px-3 py-1 rounded text-xs font-code transition-colors ${
                  activeCodeTab === 'goals' ? 'bg-[#a78bfa]/20 text-[#cebdff] font-semibold' : 'text-[#cac4d4] hover:text-white'
                }`}
              >
                focus.md
              </button>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="p-6 font-code text-xs sm:text-sm bg-[#060e20]/90 leading-relaxed text-[#dae2fd] overflow-x-auto">
            {activeCodeTab === 'config' && (
              <pre className="text-left">
                <span className="text-[#a78bfa]">const</span> <span className="text-[#adc6ff]">ashmit</span> = {'{\n'}
                {'  '}name: <span className="text-emerald-400">'Ashmit Saxena'</span>,{'\n'}
                {'  '}specializations: [{'\n'}
                {'    '}<span className="text-emerald-400">'Full-Stack Web Development (MERN / Prisma / PostgreSQL)'</span>,{'\n'}
                {'    '}<span className="text-emerald-400">'Generative AI & Gemini API Integration'</span>,{'\n'}
                {'    '}<span className="text-emerald-400">'Augmented Reality (Unity + Vuforia SDK)'</span>,{'\n'}
                {'    '}<span className="text-emerald-400">'Game Development & 3D Modeling (Blender)'</span>{'\n'}
                {'  '}],{'\n'}
                {'  '}status: <span className="text-emerald-400">'Building scalable apps & exploring AI workflows'</span>{'\n'}
                {'}'};
              </pre>
            )}

            {activeCodeTab === 'stack' && (
              <pre className="text-left">
                {`{\n`}
                {`  "languages": ["C++", "C#", "Python", "JavaScript", "TypeScript"],\n`}
                {`  "frontend": ["React", "HTML5", "CSS3", "Tailwind CSS", "Zustand"],\n`}
                {`  "backend": ["Node.js", "Express.js", "REST APIs", "Firebase", "MongoDB", "PostgreSQL"],\n`}
                {`  "tools_and_ar": ["Unity Engine", "Vuforia SDK", "Blender", "Git", "VS Code", "Postman"]\n`}
                {`}`}
              </pre>
            )}

            {activeCodeTab === 'goals' && (
              <div className="text-left space-y-2 text-[#cac4d4]">
                <p className="text-[#cebdff] font-semibold"># Developer Focus</p>
                <p>&rarr; Building responsive, production-ready full-stack applications.</p>
                <p>&rarr; Integrating generative AI APIs for intelligent user interactions.</p>
                <p>&rarr; Designing interactive 3D spatial experiences using Unity & Vuforia SDK.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS SHOWCASE */}
      <section className="py-16 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="font-code text-xs uppercase tracking-widest text-[#a78bfa] block mb-2">Featured Work</span>
            <h2 className="font-headline text-3xl font-bold text-[#dae2fd]">Featured Projects</h2>
          </div>
          <button
            onClick={() => setActiveTab('projects')}
            className="font-code text-sm text-[#cebdff] hover:underline flex items-center gap-1.5"
          >
            Explore all {PROJECTS_DATA.length} projects &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer flex flex-col group border border-white/10 hover:border-[#cebdff]/40 transition-all duration-300"
            >
              <div className="aspect-video relative overflow-hidden bg-[#131b2e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 bg-[#0b1326]/90 text-[10px] font-code font-semibold text-[#cebdff] rounded-md border border-white/10 uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-lg font-bold text-[#dae2fd] mb-2 group-hover:text-[#cebdff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#cac4d4] line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack?.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white/5 text-[10px] font-code text-[#adc6ff] rounded border border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 font-code text-xs text-[#adc6ff]">
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT / CTA SECTION */}
      <section className="py-16 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-[#cebdff]/20">
          
          {/* Left Hero Message */}
          <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-[#131b2e] to-[#0b1326]">
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#3c1989]/30 blur-[80px] rounded-full pointer-events-none"></div>
            
            <h2 className="font-headline text-3xl sm:text-4xl font-bold mb-4 leading-tight text-[#dae2fd]">
              Let's build something<br />
              <span className="gradient-text">extraordinary together</span>
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#cac4d4] mb-8 leading-relaxed">
              Whether you want to discuss full-stack web engineering, generative AI solutions, AR experiences, or collaboration opportunities — feel free to send a message!
            </p>

            <div className="space-y-4 font-code text-sm text-[#dae2fd]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#cebdff]">
                  <Mail className="w-5 h-5" />
                </div>
                <span>{PERSONAL_INFO.email}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#cebdff]">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-[#171f33]/90 p-8 md:p-12 border-t lg:border-t-0 lg:border-l border-white/10">
            {submitted ? (
              <div className="h-full min-h-[300px] flex flex-col items-center justify-center text-center p-6 bg-[#0b1326]/60 rounded-2xl border border-emerald-500/30">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mb-3 animate-bounce" />
                <h3 className="font-headline text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="font-sans text-sm text-[#cac4d4] max-w-sm">
                  Thanks for getting in touch, Ashmit will review your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <label className="font-code text-xs text-[#cac4d4]">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-[#0b1326] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#dae2fd] focus:border-[#cebdff] focus:ring-1 focus:ring-[#cebdff]/30 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-code text-xs text-[#cac4d4]">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="your.email@domain.com"
                    className="w-full bg-[#0b1326] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#dae2fd] focus:border-[#cebdff] focus:ring-1 focus:ring-[#cebdff]/30 outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-code text-xs text-[#cac4d4]">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your inquiry or project details..."
                    className="w-full bg-[#0b1326] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#dae2fd] focus:border-[#cebdff] focus:ring-1 focus:ring-[#cebdff]/30 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3.5 rounded-xl font-code text-sm font-semibold flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};
