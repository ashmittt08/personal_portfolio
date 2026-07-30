import React, { useState } from 'react';
import { X, Download, FileText, Check, Printer, Briefcase, GraduationCap, Code } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, CORE_COMPETENCIES, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Create text blob download for CV
    const cvText = `
${PERSONAL_INFO.name.toUpperCase()}
Full-Stack Developer | AI Enthusiast | AR & Game Developer
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location} (${PERSONAL_INFO.timezone})
GitHub: ${PERSONAL_INFO.socials.github}
LinkedIn: ${PERSONAL_INFO.socials.linkedin}

SUMMARY:
${PERSONAL_INFO.bio}

EDUCATION:
${EDUCATION.map(
  (edu) => `
- ${edu.role} @ ${edu.company} (${edu.period})
  Location: ${edu.location}
  ${edu.description}
`
).join('\n')}

FEATURED PROJECTS:
${PROJECTS_DATA.map(
  (proj) => `
- ${proj.title} [${proj.category}]
  ${proj.description}
  Tech Stack: ${proj.techStack?.join(', ')}
  GitHub: ${proj.githubUrl || 'N/A'}
  Live Demo: ${proj.demoUrl || 'N/A'}
`
).join('\n')}

EXPERIENCE & ACTIVITIES:
${EXPERIENCES.map(
  (exp) => `
- ${exp.role} @ ${exp.company} (${exp.period})
  ${exp.description}
  Highlights:
  ${exp.highlights.map((h) => `  * ${h}`).join('\n')}
`
).join('\n')}

CORE COMPETENCIES:
${CORE_COMPETENCIES.join(', ')}
`;

    const blob = new Blob([cvText.trim()], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${PERSONAL_INFO.shortName}_Resume.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0b1326]/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-[#131b2e] border border-[#cebdff]/30 rounded-2xl shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0b1326] border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#cebdff]" />
            <h2 className="font-headline text-lg font-bold text-[#dae2fd]">
              {PERSONAL_INFO.name} — Resume & Profile
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#cac4d4] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6 font-sans">
          {/* Header Info */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="font-headline text-2xl font-bold text-white mb-1">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-[#cebdff] font-code text-xs sm:text-sm mb-3">
              Full-Stack Developer | AI Enthusiast | AR & Game Developer
            </p>
            <p className="text-[#cac4d4] text-xs sm:text-sm leading-relaxed mb-4">
              {PERSONAL_INFO.bio}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-code text-[#adc6ff]">
              <span>✉ {PERSONAL_INFO.email}</span>
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>🌐 {PERSONAL_INFO.timezone}</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-headline text-base font-bold text-[#cebdff] mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#adc6ff]" />
              Education
            </h3>
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="bg-[#0b1326]/60 p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                  <h4 className="font-headline text-sm font-bold text-[#dae2fd]">{edu.role}</h4>
                  <span className="font-code text-xs text-[#a78bfa]">{edu.period}</span>
                </div>
                <p className="font-code text-xs text-[#adc6ff]">{edu.company}</p>
                <p className="text-xs text-[#cac4d4] mt-2">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Featured Projects Summary */}
          <div>
            <h3 className="font-headline text-base font-bold text-[#cebdff] mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#ddb8ff]" />
              Key Projects
            </h3>
            <div className="space-y-3">
              {PROJECTS_DATA.slice(0, 4).map((proj) => (
                <div key={proj.id} className="bg-[#0b1326]/60 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                    <h4 className="font-headline text-sm font-bold text-white">{proj.title}</h4>
                    <span className="font-code text-[10px] text-[#cebdff] px-2 py-0.5 bg-[#cebdff]/10 rounded border border-[#cebdff]/20">
                      {proj.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#cac4d4] mb-2">{proj.description}</p>
                  <p className="font-code text-[11px] text-[#adc6ff]">
                    Tech: {proj.techStack?.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-headline text-base font-bold text-[#cebdff] mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#a78bfa]" />
              Development Focus & Experience
            </h3>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="bg-[#0b1326]/60 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-start mb-1 flex-wrap gap-2">
                    <h4 className="font-headline text-sm font-bold text-[#dae2fd]">{exp.role}</h4>
                    <span className="font-code text-xs text-[#a78bfa]">{exp.period}</span>
                  </div>
                  <p className="font-code text-xs text-[#adc6ff] mb-2">{exp.company}</p>
                  <p className="text-xs text-[#cac4d4] mb-3 leading-relaxed">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#cac4d4]/90">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Competencies */}
          <div>
            <h3 className="font-headline text-base font-bold text-[#cebdff] mb-3 flex items-center gap-2">
              <Code className="w-4 h-4 text-[#ddb8ff]" />
              Core Competencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {CORE_COMPETENCIES.map((comp, i) => (
                <span key={i} className="px-3 py-1 bg-[#171f33] text-xs font-code text-[#dae2fd] rounded-lg border border-white/10">
                  {comp}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-[#0b1326] border-t border-white/10 flex justify-between items-center">
          <button
            onClick={() => window.print()}
            className="btn-secondary px-4 py-2 rounded-lg font-code text-xs flex items-center gap-2"
          >
            <Printer className="w-3.5 h-3.5" />
            Print Resume
          </button>

          <button
            onClick={handleDownload}
            className="btn-primary px-6 py-2 rounded-lg font-code text-xs flex items-center gap-2"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-emerald-950" />
                <span>Downloaded CV</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Save Resume (.txt)</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
