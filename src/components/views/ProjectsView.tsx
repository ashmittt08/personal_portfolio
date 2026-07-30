import React, { useState } from 'react';
import { 
  Search, 
  Grid, 
  List, 
  ExternalLink, 
  Github, 
  Sparkles, 
  ArrowUpRight,
  Code2
} from 'lucide-react';
import { NavigationTab, Project } from '../../types';
import { PROJECTS_DATA } from '../../data/portfolioData';

interface ProjectsViewProps {
  setActiveTab: (tab: NavigationTab) => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ setActiveTab, onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'Fullstack', 'AI', 'AR & Gaming'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (project.techStack && project.techStack.some((ts) => ts.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="mb-12 text-left">
        <span className="font-code text-xs uppercase tracking-widest text-[#cebdff] block mb-2">
          Featured Engineering Portfolio
        </span>
        <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#dae2fd] mb-4">
          Projects & Code Repositories
        </h1>
        <p className="font-sans text-base text-[#cac4d4] max-w-3xl leading-relaxed">
          A collection of full-stack web applications, AI tools, and immersive augmented reality experiences built using React, Node.js, Express, MongoDB, PostgreSQL, Prisma, Unity, and Google Gemini AI.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="glass-card p-4 rounded-2xl mb-10 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
        
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#cac4d4] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by tech (React, Unity, Gemini, Node)..."
            className="w-full bg-[#0b1326]/80 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 font-code text-xs text-[#dae2fd] placeholder-[#cac4d4]/50 focus:border-[#cebdff] outline-none"
          />
        </div>

        {/* Category Pills & Layout Toggle */}
        <div className="flex flex-wrap items-center justify-between md:justify-end gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-xl font-code text-xs transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-[#cebdff] text-[#21005e] font-bold shadow-md shadow-[#cebdff]/20'
                      : 'bg-white/5 text-[#cac4d4] hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="hidden sm:flex items-center bg-[#0b1326] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-[#cebdff]/20 text-[#cebdff]' : 'text-[#cac4d4] hover:text-white'
              }`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-[#cebdff]/20 text-[#cebdff]' : 'text-[#cac4d4] hover:text-white'
              }`}
              title="List View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Projects Grid / List */}
      {filteredProjects.length === 0 ? (
        <div className="glass-card p-12 text-center rounded-2xl my-12 max-w-md mx-auto">
          <Code2 className="w-12 h-12 text-[#cebdff] mx-auto mb-3" />
          <h3 className="font-headline text-lg font-bold text-white mb-1">No Projects Found</h3>
          <p className="font-sans text-xs text-[#cac4d4] mb-4">
            Try adjusting your search query or category filter.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSearchQuery('');
            }}
            className="btn-secondary px-4 py-2 rounded-lg font-code text-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden flex flex-col group border border-white/10 hover:border-[#cebdff]/40 transition-all duration-300"
            >
              {/* Project Image */}
              <div 
                onClick={() => onSelectProject(project)}
                className="aspect-video relative overflow-hidden bg-[#131b2e] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-70" />
                
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 bg-[#0b1326]/80 backdrop-blur-md text-[10px] font-code font-semibold text-[#cebdff] rounded-md border border-white/10 uppercase">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 
                    onClick={() => onSelectProject(project)}
                    className="font-headline text-xl font-bold text-[#dae2fd] mb-2 cursor-pointer group-hover:text-[#cebdff] transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs text-[#cac4d4] line-clamp-3 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-[#0b1326] text-[10px] font-code text-[#adc6ff] rounded border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/5 font-code text-xs">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-[#cebdff] hover:underline flex items-center gap-1 font-semibold"
                  >
                    Details & Features
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-white/5 rounded-lg text-[#cac4d4] hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-[11px]"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 bg-[#cebdff]/10 rounded-lg text-[#cebdff] hover:bg-[#cebdff]/20 transition-colors flex items-center gap-1 text-[11px]"
                        title="Live Application"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card p-4 sm:p-6 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer hover:border-[#cebdff]/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-[#131b2e] hidden sm:block">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 bg-[#cebdff]/20 text-[#cebdff] text-[10px] font-code rounded">
                      {project.category}
                    </span>
                    <h3 className="font-headline text-lg font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="font-sans text-xs text-[#cac4d4] max-w-xl line-clamp-1">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 border-white/5 pt-3 sm:pt-0">
                <div className="hidden lg:flex gap-1.5">
                  {project.tags.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#0b1326] text-[10px] font-code text-[#adc6ff] rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <button className="btn-secondary px-4 py-2 rounded-lg font-code text-xs flex items-center gap-1.5">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="mt-20 glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-[#cebdff]/30">
        <div className="max-w-2xl mx-auto space-y-4">
          <Sparkles className="w-8 h-8 text-[#cebdff] mx-auto animate-pulse" />
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#dae2fd]">
            Interested in collaborating or discussing technical roles?
          </h2>
          <p className="font-sans text-sm text-[#cac4d4]">
            I am open to software development internships, full-stack projects, and AI/AR initiatives.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setActiveTab('contact')}
              className="btn-primary px-8 py-3 rounded-xl font-code text-sm font-semibold inline-flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
