import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { ProjectsView } from './components/views/ProjectsView';
import { AboutView } from './components/views/AboutView';
import { ContactView } from './components/views/ContactView';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { NavigationTab, Project } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  // Synchronize dark/light theme class on html document root
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.style.backgroundColor = '#0b1326';
      root.style.color = '#dae2fd';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f4f6fc';
      root.style.color = '#1b1b2f';
    }
  }, [isDarkMode]);

  const renderCurrentView = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeView
            setActiveTab={setActiveTab}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenResume={() => setResumeOpen(true)}
          />
        );
      case 'projects':
        return (
          <ProjectsView
            setActiveTab={setActiveTab}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        );
      case 'about':
        return (
          <AboutView
            setActiveTab={setActiveTab}
            onOpenResume={() => setResumeOpen(true)}
          />
        );
      case 'contact':
        return <ContactView />;
      default:
        return (
          <HomeView
            setActiveTab={setActiveTab}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenResume={() => setResumeOpen(true)}
          />
        );
    }
  };

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-[#0b1326] text-[#dae2fd]' : 'bg-[#f4f6fc] text-[#1b1b2f]'}`}>
      {/* Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main View Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
