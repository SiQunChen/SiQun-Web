import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import ScrambleText from './ScrambleText';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslations } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cvDropdownOpen, setCvDropdownOpen] = useState(false);
  const [mobileCvDropdownOpen, setMobileCvDropdownOpen] = useState(false);
  const cvDropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations();

  const navLinks = [
    { to: '/about', text: t.nav.about },
    { to: '/resume', text: t.nav.resume },
    { to: '/projects', text: t.nav.projects },
    { to: '/contact', text: t.nav.contact },
  ];

  const activeLinkStyle = {
    color: '#22d3ee', // cyan-400
    fontWeight: 600,
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target as Node)) {
        setCvDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const resumeOptions = [
    { label: '中文', href: '/resume_zh.pdf' },
    { label: 'English', href: '/resume_en.pdf' },
  ];

  return (
    <header className="bg-slate-900/80 backdrop-blur-md shadow-lg shadow-black/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Left section */}
          <div className="flex-1 flex justify-start">
            <div className="flex-shrink-0">
              <Link data-interactive to="/" className="text-xl font-bold text-slate-200 hover:text-cyan-400 transition-colors">
                <ScrambleText>{t.portfolio.name.split(' ')[0]}</ScrambleText>
              </Link>
            </div>
          </div>

          {/* Middle section (Navigation) */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  data-interactive
                  key={link.to}
                  to={link.to}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
                >
                  <ScrambleText>{link.text}</ScrambleText>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              {/* CV Download Dropdown */}
              <div className="relative" ref={cvDropdownRef}>
                <button
                  data-interactive
                  onClick={() => setCvDropdownOpen(!cvDropdownOpen)}
                  className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-md text-sm font-medium hover:bg-cyan-400/10 transition-all transform hover:scale-105 flex items-center gap-1.5"
                >
                  {t.buttons.downloadCV}
                  <svg
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${cvDropdownOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                <div
                  className={`cv-dropdown ${cvDropdownOpen ? 'cv-dropdown-open' : ''}`}
                >
                  {resumeOptions.map((option) => (
                    <a
                      data-interactive
                      key={option.label}
                      href={option.href}
                      download
                      onClick={() => setCvDropdownOpen(false)}
                      className="cv-dropdown-item"
                    >
                      <span className="material-symbols-outlined text-base" aria-hidden="true">download</span>
                      {option.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex md:hidden">
              <button
                data-interactive
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-slate-800 inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-cyan-400 hover:bg-slate-700 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                data-interactive
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800 block px-3 py-2 rounded-md text-base font-medium"
                style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
              >
                {link.text}
              </NavLink>
            ))}
            <div className="flex justify-center py-2">
              <LanguageSwitcher />
            </div>
            {/* Mobile CV Download */}
            <button
              data-interactive
              onClick={() => setMobileCvDropdownOpen(!mobileCvDropdownOpen)}
              className="border border-cyan-400 text-cyan-400 block w-full text-center mt-2 px-4 py-2 rounded-md text-base font-medium hover:bg-cyan-400/10 transition-all flex items-center justify-center gap-2"
            >
              {t.buttons.downloadCV}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileCvDropdownOpen ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileCvDropdownOpen && (
              <div className="mt-1 space-y-1 px-2">
                {resumeOptions.map((option) => (
                  <a
                    data-interactive
                    key={option.label}
                    href={option.href}
                    download
                    onClick={() => { setMobileCvDropdownOpen(false); setIsOpen(false); }}
                    className="cv-dropdown-item-mobile"
                  >
                    <span className="material-symbols-outlined text-base" aria-hidden="true">download</span>
                    {option.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
