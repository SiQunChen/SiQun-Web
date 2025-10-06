
import React, { createContext, useState, useMemo, useContext } from 'react';
import { TranslationData } from '../types';
import { translations as zhData } from '../locales/zh';
import { translations as enData } from '../locales/en';
import { translations as jaData } from '../locales/ja';

type Language = 'zh' | 'en' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: TranslationData;
}

const translationsData: { [key in Language]: TranslationData } = {
  zh: zhData,
  en: enData,
  ja: jaData,
};

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Check browser language, fallback to 'zh'
  const getInitialLanguage = (): Language => {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('en')) return 'en';
    if (browserLang.startsWith('ja')) return 'ja';
    return 'zh';
  }

  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  const value = useMemo(() => ({
    language,
    setLanguage,
    translations: translationsData[language],
  }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslations must be used within a LanguageProvider');
  }
  return context.translations;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return { language: context.language, setLanguage: context.setLanguage };
};
