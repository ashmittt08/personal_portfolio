import React, { useState } from 'react';
import { 
  Mail, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Code2, 
  Atom, 
  FileCode, 
  Database, 
  GitBranch, 
  Box, 
  Server, 
  Cpu, 
  Palette, 
  CheckCircle2,
  Terminal,
  Gamepad2,
  Eye,
  Flame,
  ShieldCheck,
  BarChart3,
  Globe,
  Send,
  Layers,
  Cloud
} from 'lucide-react';
import { NavigationTab } from '../../types';
import { PERSONAL_INFO, TECH_SKILLS, EXPERIENCES, EDUCATION, CORE_COMPETENCIES, PASSIONS } from '../../data/portfolioData';

interface AboutViewProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ setActiveTab }) => {
  const [selectedTechCategory, setSelectedTechCategory] = useState<string>('All');

  const techCategories = ['All', 'Languages', 'Frontend', 'Backend', 'Database & ORM', 'Tools & AR'];

  const filteredSkills = TECH_SKILLS.filter(
    (skill) => selectedTechCategory === 'All' || skill.category === selectedTechCategory
  );

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return <Terminal className="w-6 h-6 text-[#cebdff]" />;
      case 'Code2': return <Code2 className="w-6 h-6 text-[#adc6ff]" />;
      case 'Atom': return <Atom className="w-6 h-6 text-[#cebdff]" />;
      case 'FileCode': return <FileCode className="w-6 h-6 text-[#adc6ff]" />;
      case 'Database': return <Database className="w-6 h-6 text-[#a78bfa]" />;
      case 'GitBranch': return <GitBranch className="w-6 h-6 text-[#ddb8ff]" />;
      case 'Box': return <Box className="w-6 h-6 text-[#cebdff]" />;
      case 'Server': return <Server className="w-6 h-6 text-[#a78bfa]" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-[#adc6ff]" />;
      case 'Palette': return <Palette className="w-6 h-6 text-[#cebdff]" />;
      case 'Gamepad2': return <Gamepad2 className="w-6 h-6 text-[#cebdff]" />;
      case 'Eye': return <Eye className="w-6 h-6 text-[#adc6ff]" />;
      case 'Flame': return <Flame className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#adc6ff]" />;
      case 'Globe': return <Globe className="w-6 h-6 text-[#cebdff]" />;
      case 'Send': return <Send className="w-6 h-6 text-[#a78bfa]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#ddb8ff]" />;
      default: return <Sparkles className="w-6 h-6 text-[#cebdff]" />;
    }
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto space-y-24">
      
      {/* 1. HERO JOURNEY SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Story */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#cebdff]/10 border border-[#cebdff]/20 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#cebdff]" />
            <span className="font-code text-xs font-semibold uppercase tracking-wider text-[#cebdff]">
              ABOUT ME
            </span>
          </div>

          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#dae2fd] leading-tight">
            Building Modern Software & Immersive Products
          </h1>

          <div className="font-sans text-base text-[#cac4d4] space-y-4 leading-relaxed">
            <p>
              I'm <span className="text-[#cebdff] font-semibold">{PERSONAL_INFO.name}</span>, a Computer Science undergraduate with a passion for software engineering, artificial intelligence, and immersive technologies.
            </p>
            <p>
              I specialize in full-stack web development using React, Node.js, Express.js, MongoDB, PostgreSQL, and TypeScript, while also building AI-powered applications (powered by Gemini AI) and augmented reality experiences using Unity 3D engine, Vuforia SDK, and Blender.
            </p>
            <p>
              I enjoy solving real-world problems, learning new technologies, and creating impactful digital products that seamlessly bridge frontend aesthetics with reliable backend infrastructure.
            </p>
          </div>

          {/* Quick Stats Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
            <div className="glass-card p-3.5 rounded-xl border border-white/10">
              <span className="font-headline text-2xl font-bold text-[#cebdff] block">5+</span>
              <span className="font-code text-xs text-[#cac4d4]">Featured Projects</span>
            </div>
            <div className="glass-card p-3.5 rounded-xl border border-white/10">
              <span className="font-headline text-2xl font-bold text-[#adc6ff] block">B.Tech CSE</span>
              <span className="font-code text-xs text-[#cac4d4]">Undergraduate Degree</span>
            </div>
            <div className="glass-card p-3.5 rounded-xl border border-white/10">
              <span className="font-headline text-2xl font-bold text-[#a78bfa] block">MERN + AI + AR</span>
              <span className="font-code text-xs text-[#cac4d4]">Core Tech Focus</span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="btn-primary px-7 py-3 rounded-xl font-code text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#21005e]" />
              <span>Get In Touch</span>
            </button>
          </div>
        </div>

        {/* Right Column: Circular Portrait Card */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden glass-card border-4 border-[#cebdff]/30 shadow-2xl group">
            <img
              src="/profile.jpg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-500 rounded-full"
            />
          </div>
        </div>

      </section>

      {/* 2. TECH STACK BADGES SECTION */}
      <section className="space-y-8">
        <div>
          <span className="font-code text-xs uppercase tracking-widest text-[#a78bfa] block mb-1">
            TECH STACK BADGES
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#dae2fd]">
            Tech Stack Overview
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Languages */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-headline text-lg font-bold text-white flex items-center gap-2">
              <Code2 className="w-5 h-5 text-[#cebdff]" />
              Languages
            </h3>
            <div>
              <img src="https://skillicons.dev/icons?i=cpp,cs,python,js,ts" alt="Languages" className="h-12" />
            </div>
          </div>

          {/* Frontend */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-headline text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#adc6ff]" />
              Frontend
            </h3>
            <div>
              <img src="https://skillicons.dev/icons?i=html,css,react,tailwind" alt="Frontend" className="h-12" />
            </div>
          </div>

          {/* Backend & Database */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-headline text-lg font-bold text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-[#a78bfa]" />
              Backend & Database
            </h3>
            <div>
              <img src="https://skillicons.dev/icons?i=nodejs,express,firebase,mongodb,mysql,postgres" alt="Backend & Database" className="h-12" />
            </div>
          </div>

          {/* Cloud & Tools */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-headline text-lg font-bold text-white flex items-center gap-2">
              <Cloud className="w-5 h-5 text-[#ddb8ff]" />
              Cloud & Tools
            </h3>
            <div>
              <img src="https://skillicons.dev/icons?i=git,github,vscode,postman,vercel" alt="Cloud & Tools" className="h-12" />
            </div>
          </div>

          {/* Game Development */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4 md:col-span-2">
            <h3 className="font-headline text-lg font-bold text-white flex items-center gap-2">
              <Gamepad2 className="w-5 h-5 text-[#cebdff]" />
              Game Development & AR
            </h3>
            <div>
              <img src="https://skillicons.dev/icons?i=unity" alt="Game Development" className="h-12" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MY DETAILED TECH ARSENAL */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="font-code text-xs uppercase tracking-widest text-[#a78bfa] block mb-1">
              SKILLS & STACK
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#dae2fd]">
              Detailed Skill Breakdown
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {techCategories.map((cat) => {
              const isActive = selectedTechCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedTechCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl font-code text-xs transition-all ${
                    isActive
                      ? 'bg-[#cebdff] text-[#21005e] font-bold shadow-md shadow-[#cebdff]/20'
                      : 'bg-white/5 text-[#cac4d4] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Bento Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#cebdff]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-[#0b1326] rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="font-code text-xs text-[#cebdff] font-semibold bg-[#cebdff]/10 px-2.5 py-1 rounded-md border border-[#cebdff]/20">
                    {skill.proficiency}%
                  </span>
                </div>

                <h3 className="font-headline text-xl font-bold text-[#dae2fd] mb-2 group-hover:text-[#cebdff] transition-colors">
                  {skill.name}
                </h3>
                <p className="font-sans text-xs text-[#cac4d4] leading-relaxed mb-4">
                  {skill.description}
                </p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#0b1326] h-1.5 rounded-full overflow-hidden border border-white/5">
                <div
                  className="bg-gradient-to-r from-[#cebdff] to-[#adc6ff] h-full rounded-full transition-all duration-1000"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE & EDUCATION TIMELINE */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Work / Projects Experience Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#cebdff]/10 text-[#cebdff] rounded-xl">
              <Briefcase className="w-5 h-5" />
            </div>
            <h2 className="font-headline text-2xl font-bold text-[#dae2fd]">Development Focus</h2>
          </div>

          <div className="space-y-6 relative pl-6 border-l-2 border-[#cebdff]/20">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative group">
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0b1326] border-2 border-[#cebdff] group-hover:bg-[#cebdff] transition-colors"></span>
                <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h3 className="font-headline text-lg font-bold text-white">{exp.role}</h3>
                      <p className="font-code text-xs text-[#adc6ff]">{exp.company}</p>
                    </div>
                    <span className="font-code text-xs px-2.5 py-1 bg-[#cebdff]/10 text-[#cebdff] rounded-md border border-[#cebdff]/20">
                      {exp.period}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-[#cac4d4] leading-relaxed">{exp.description}</p>
                  <ul className="space-y-1.5 pt-2">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="font-sans text-xs text-[#cac4d4] flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] mt-1.5 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Competencies Column */}
        <div className="space-y-8">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#adc6ff]/10 text-[#adc6ff] rounded-xl">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h2 className="font-headline text-2xl font-bold text-[#dae2fd]">Education</h2>
            </div>

            <div className="space-y-6 relative pl-6 border-l-2 border-[#adc6ff]/20">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative group">
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0b1326] border-2 border-[#adc6ff] group-hover:bg-[#adc6ff] transition-colors"></span>
                  <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-3">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <div>
                        <h3 className="font-headline text-lg font-bold text-white">{edu.role}</h3>
                        <p className="font-code text-xs text-[#adc6ff]">{edu.company}</p>
                      </div>
                      <span className="font-code text-xs px-2.5 py-1 bg-[#adc6ff]/10 text-[#adc6ff] rounded-md border border-[#adc6ff]/20">
                        {edu.period}
                      </span>
                    </div>
                    <p className="font-sans text-xs text-[#cac4d4] leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies Box */}
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <h3 className="font-headline text-lg font-bold text-[#dae2fd] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#cebdff]" />
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {CORE_COMPETENCIES.map((comp, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-[#0b1326] border border-white/10 rounded-xl font-code text-xs text-[#dae2fd]"
                >
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUOTE BANNER */}
      <section className="glass-card p-10 rounded-3xl text-center border border-[#cebdff]/20 bg-gradient-to-r from-[#131b2e] via-[#171f33] to-[#131b2e]">
        <p className="font-headline text-xl sm:text-2xl font-semibold text-[#cebdff] max-w-3xl mx-auto italic mb-3">
          {PERSONAL_INFO.quote}
        </p>
        <span className="font-code text-xs text-[#cac4d4]/70 uppercase tracking-widest">
          — Ashmit Saxena
        </span>
      </section>

    </div>
  );
};
