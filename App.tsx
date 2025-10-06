
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest('[data-interactive]')) {
        setIsHoveringInteractive(true);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
       if ((e.target as Element).closest('[data-interactive]')) {
        setIsHoveringInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <HashRouter>
      <div className="cursor-dot" style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>
      <div className={`cursor-outline ${isHoveringInteractive ? 'interactive' : ''}`} style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}></div>
      
      <div className="bg-slate-900 text-slate-300 min-h-screen flex flex-col font-sans selection:bg-cyan-300 selection:text-cyan-900">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;