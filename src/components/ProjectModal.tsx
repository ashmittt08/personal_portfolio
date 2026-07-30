import React, { useState } from 'react';
import { X, ExternalLink, Github, Zap, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'demo'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0b1326]/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#131b2e] border border-[#cebdff]/30 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0b1326]/80 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-[#cebdff]/20 text-[#cebdff] border border-[#cebdff]/30">
              {project.category}
            </span>
            <h2 className="font-headline text-xl font-bold text-[#dae2fd]">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#cac4d4] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Subbar */}
        <div className="flex border-b border-white/5 bg-[#171f33]/60 px-6">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-4 font-code text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'overview'
                ? 'border-[#cebdff] text-[#cebdff]'
                : 'border-transparent text-[#cac4d4] hover:text-white'
            }`}
          >
            Project Overview
          </button>
          <button
            onClick={() => setActiveTab('demo')}
            className={`py-3 px-4 font-code text-sm font-medium border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'demo'
                ? 'border-[#cebdff] text-[#cebdff]'
                : 'border-transparent text-[#cac4d4] hover:text-white'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-[#a78bfa]" />
            Live Preview Simulator
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {activeTab === 'overview' ? (
            <div className="space-y-8">
              {/* Media Preview Banner */}
              <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-[#0b1326]/90 text-xs font-code text-[#adc6ff] rounded-md border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-headline text-lg font-bold text-[#dae2fd] mb-2">About the Project</h3>
                <p className="font-sans text-[#cac4d4] leading-relaxed text-base">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.keyFeatures && (
                <div>
                  <h3 className="font-headline text-lg font-bold text-[#dae2fd] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#cebdff]" />
                    Key Architecture & Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="glass-card-static p-3.5 rounded-xl border border-white/5 flex items-start gap-2.5">
                        <span className="w-2 h-2 rounded-full bg-[#a78bfa] mt-2 flex-shrink-0" />
                        <span className="text-sm font-sans text-[#dae2fd]">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Performance Metrics */}
              {project.metrics && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-[#171f33] p-4 rounded-xl border border-[#cebdff]/20 text-center">
                      <Zap className="w-5 h-5 text-[#a78bfa] mx-auto mb-1" />
                      <span className="font-code text-sm font-bold text-[#cebdff]">{metric}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack List */}
              {project.techStack && (
                <div>
                  <h3 className="font-headline text-lg font-bold text-[#dae2fd] mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-[#adc6ff]" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-[#060e20] text-[#dae2fd] border border-white/10 rounded-lg text-xs font-code font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Interactive Live Preview Simulator */
            <div className="space-y-6">
              <div className="p-4 bg-[#0b1326] rounded-xl border border-white/10 flex items-center justify-between font-code text-xs text-[#cac4d4]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 text-[#adc6ff]">{project.title.toLowerCase().replace(/\s+/g, '-')}.ashmit.dev</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Live Simulator Active
                </span>
              </div>

              <div className="aspect-video bg-[#0b1326] rounded-xl border border-[#cebdff]/20 p-8 flex flex-col items-center justify-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3c1989]/30 to-[#004395]/30 opacity-50 pointer-events-none"></div>
                <Code2 className="w-16 h-16 text-[#cebdff] mb-4 animate-bounce" />
                <h4 className="font-headline text-2xl font-bold text-white mb-2">
                  {project.title} Dynamic Workspace
                </h4>
                <p className="font-sans text-sm text-[#cac4d4] max-w-md mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href={project.demoUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-2.5 rounded-lg font-code text-sm flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Open Fullscreen Live App
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary px-6 py-2.5 rounded-lg font-code text-sm flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[#0b1326]/80 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
          <p className="font-code text-xs text-[#cac4d4]">
            Project ID: <span className="text-[#cebdff]">{project.id}</span>
          </p>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-4 py-2 rounded-lg font-code text-xs flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                Source
              </a>
            )}
            <a
              href={project.demoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2 rounded-lg font-code text-xs flex items-center gap-1.5"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
