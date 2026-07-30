import React from 'react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { NavigationTab } from '../types';

interface FooterProps {
  setActiveTab: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-16 bg-[#060e20] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Brand & Identity */}
        <div className="space-y-3">
          <button 
            onClick={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left group focus:outline-none"
          >
            <span className="font-headline text-2xl font-bold text-[#dae2fd] group-hover:text-[#cebdff] transition-colors">
              {PERSONAL_INFO.name}
            </span>
          </button>
          
          <div className="flex items-center gap-2 text-[#adc6ff] text-sm font-code">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <MapPin className="w-3.5 h-3.5 text-[#a78bfa]" />
            <span>{PERSONAL_INFO.location}</span>
          </div>

          <p className="font-code text-xs text-[#cac4d4]/60">
            © {currentYear} {PERSONAL_INFO.shortName}. All rights reserved.
          </p>
        </div>

        {/* Quick Nav & Social Links */}
        <div className="flex flex-col md:items-end gap-4">
          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-code text-sm text-[#adc6ff] hover:text-[#cebdff] transition-colors opacity-80 hover:opacity-100"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-code text-sm text-[#adc6ff] hover:text-[#cebdff] transition-colors opacity-80 hover:opacity-100"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.socials.email}
              className="flex items-center gap-1.5 font-code text-sm text-[#adc6ff] hover:text-[#cebdff] transition-colors opacity-80 hover:opacity-100"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          <p className="font-code text-xs text-[#cac4d4]/60 text-left md:text-right max-w-xs">
            Built with React, TypeScript, Node.js & Tailwind CSS.
          </p>
        </div>

      </div>
    </footer>
  );
};
