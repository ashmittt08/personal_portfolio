import React, { useState } from 'react';
import { Moon, Sun, Menu, X, Sparkles } from 'lucide-react';
import { NavigationTab } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0b1326]/60 backdrop-blur-xl border-b border-white/10 transition-colors duration-300">
      <nav className="flex justify-between items-center px-4 sm:px-8 md:px-16 py-4 max-w-7xl mx-auto">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2 text-left focus:outline-none"
        >
          <span className="font-headline text-xl md:text-2xl font-bold text-[#cebdff] tracking-tight group-hover:text-white transition-colors">
            {PERSONAL_INFO.brandName}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#a78bfa] animate-pulse"></span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative font-code text-sm font-medium transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-[#cebdff] font-semibold'
                    : 'text-[#cac4d4] hover:text-[#cebdff]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#cebdff] to-[#adc6ff] rounded-full shadow-[0_0_8px_rgba(206,189,255,0.6)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Actions (Theme Toggle & Mobile Menu) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle theme mode"
            className="p-2.5 rounded-full text-[#cebdff] hover:bg-white/10 transition-all active:scale-95 duration-200 border border-white/5 hover:border-[#cebdff]/30"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDarkMode ? (
              <Moon className="w-5 h-5 text-[#cebdff] hover:rotate-12 transition-transform" />
            ) : (
              <Sun className="w-5 h-5 text-[#adc6ff] hover:rotate-45 transition-transform" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-lg text-[#dae2fd] hover:bg-white/10 transition-all border border-white/5"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#cebdff]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1326]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-headline text-lg text-left transition-all ${
                    isActive
                      ? 'bg-[#a78bfa]/20 text-[#cebdff] border border-[#cebdff]/30 font-bold'
                      : 'text-[#cac4d4] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#cebdff]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
