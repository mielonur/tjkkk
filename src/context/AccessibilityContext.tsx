import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ru' | 'kk' | 'en';

interface AccessibilityContextType {
  isDarkMode: boolean;
  isHighContrast: boolean;
  isLargeText: boolean;
  language: Language;
  toggleDarkMode: () => void;
  toggleHighContrast: () => void;
  toggleLargeText: () => void;
  setLanguage: (lang: Language) => void;
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const body = window.document.body;
    if (isHighContrast) {
      body.classList.add('accessibility-high-contrast');
    } else {
      body.classList.remove('accessibility-high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    const body = window.document.body;
    if (isLargeText) {
      body.classList.add('accessibility-large-text');
    } else {
      body.classList.remove('accessibility-large-text');
    }
  }, [isLargeText]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleHighContrast = () => setIsHighContrast(!isHighContrast);
  const toggleLargeText = () => setIsLargeText(!isLargeText);

  return (
    <AccessibilityContext.Provider
      value={{
        isDarkMode,
        isHighContrast,
        isLargeText,
        language,
        toggleDarkMode,
        toggleHighContrast,
        toggleLargeText,
        setLanguage,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within an AccessibilityProvider');
  }
  return context;
};
