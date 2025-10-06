
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../contexts/LanguageContext';

const NotFoundPage: React.FC = () => {
  const t = useTranslations();
  
  return (
    <div className="flex flex-col items-center justify-center text-center h-full min-h-[calc(100vh-14rem)]">
      <h1 className="text-6xl font-bold text-cyan-400">404</h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{t.notFound.title}</h2>
      <p className="mt-4 text-lg text-slate-400">{t.notFound.subtitle}</p>
      <div className="mt-8">
        <Link
          to="/"
          className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-md text-base font-medium hover:from-cyan-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
        >
          {t.buttons.goHome}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
