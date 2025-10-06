
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: 'zh' | 'en' | 'ja', label: string }[] = [
    { code: 'zh', label: '繁' },
    { code: 'en', label: 'EN' },
    { code: 'ja', label: '日' },
  ];

  return (
    <div data-interactive className="flex items-center bg-slate-800 rounded-full p-1 border border-slate-700">
      {languages.map((lang, index) => (
        <React.Fragment key={lang.code}>
          <button
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1 text-sm rounded-full transition-colors focus:outline-none ${
              language === lang.code 
                ? 'bg-slate-700 text-cyan-300 font-semibold' 
                : 'text-slate-400 hover:text-slate-200'
            }`}
            aria-pressed={language === lang.code}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && <div className="w-px h-4 bg-slate-600"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
