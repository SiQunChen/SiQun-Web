
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../contexts/LanguageContext';
import ParticleBackground from '../components/ParticleBackground';

const HomePage: React.FC = () => {
  const [glowStyle, setGlowStyle] = useState({ transform: 'translate(0px, 0px)' });
  const t = useTranslations();
  const tagline = t.portfolio.tagline;
  const [typewriterStyle, setTypewriterStyle] = useState({});

  useEffect(() => {
    const charCount = tagline.length || 1;
    // Base speed: 3.5s for 40 characters.
    const typingDuration = (3.5 / 40) * charCount;
    
    setTypewriterStyle({
      animation: `typing ${typingDuration}s steps(${charCount}, end), blink-caret .75s step-end infinite`,
    });
  }, [tagline]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) / 15;
      const y = (clientY - window.innerHeight / 2) / 15;
      setGlowStyle({ transform: `translate(${x}px, ${y}px)` });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative flex items-center justify-center text-center h-full min-h-[calc(100vh-14rem)]">
      <ParticleBackground />
      {/* Background Glows */}
      <div className="glow-effect w-96 h-96 bg-cyan-500 top-1/2 left-1/2 -translate-x-3/4 -translate-y-1/2" style={glowStyle}></div>
      <div className="glow-effect w-80 h-80 bg-indigo-500 top-1/2 left-1/2 -translate-x-1/4 -translate-y-3/4" style={glowStyle}></div>

      <div className="max-w-3xl z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-100">
          Hi, I'm <span className="text-cyan-400">{t.portfolio.name.split(' (')[0]}</span>
        </h1>
        <div className="mt-4 text-lg md:text-xl text-slate-300 h-8 typewriter-text-container flex justify-center">
          <div className="inline-block">
            <p className="typewriter-text" style={typewriterStyle}>
              {tagline}
            </p>
          </div>
        </div>
        <p className="mt-6 max-w-2xl mx-auto text-slate-400">
            {t.portfolio.bio[0]}
        </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <Link
            data-interactive
            to="/projects"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-md text-base font-medium hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            {t.buttons.viewWork}
          </Link>
          <Link
            data-interactive
            to="/contact"
            className="inline-block bg-slate-800 text-slate-300 px-8 py-3 rounded-md text-base font-medium hover:bg-slate-700 transition-all transform hover:scale-105 shadow-lg border border-slate-700"
          >
            {t.buttons.getInTouch}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
