import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('sanskriti_gurukul_lang');
      return saved === 'en' ? 'en' : 'hi';
    } catch {
      return 'hi';
    }
  });

  const setLanguage = (lang) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('sanskriti_gurukul_lang', lang);
    } catch (e) {
      console.warn('Could not save language to localStorage', e);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'hi' ? 'en' : 'hi');
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === 'hi' 
      ? 'संस्कृति आर्य गुरुकुलम | शिक्षा, संस्कार और संस्कृति का संगम'
      : 'Sanskriti Arya Gurukulam | Where Education Meets Values & Culture';
  }, [language]);

  const currentTranslations = translations[language] || translations.hi;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
