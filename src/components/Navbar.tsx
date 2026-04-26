import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Sun, Moon, Accessibility, Languages, Menu, X, 
  Type, Contrast 
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';
import logo from '../assets/logo.png';

const Navbar = () => {
  const { 
    isDarkMode, isHighContrast, isLargeText, language,
    toggleDarkMode, toggleHighContrast, toggleLargeText, setLanguage 
  } = useAccessibility();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccOpen, setIsAccOpen] = useState(false);
  const location = useLocation();

  const t = translations[language].nav;
  const commonT = translations[language].common;

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/programs', label: t.programs },
    { path: '/admissions', label: t.admissions },
    { path: '/news', label: t.news },
    { path: '/contacts', label: t.contacts },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
            <span className="font-bold text-xl text-blue-800 dark:text-blue-400 hidden sm:block">ТЖКҚК</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Lang Toggle */}
            <div className="relative group">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Languages className="h-5 w-5" />
              </button>
              <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {(['ru', 'kk', 'en'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      language === lang ? 'font-bold text-blue-600' : ''
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Accessibility Toggle */}
            <div className="relative">
              <button 
                onClick={() => setIsAccOpen(!isAccOpen)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                title={commonT.settings}
              >
                <Accessibility className="h-5 w-5" />
              </button>
              {isAccOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl p-4 animate-in fade-in slide-in-from-top-2">
                  <h3 className="text-sm font-bold mb-3 border-b pb-2 text-left">{commonT.settings}</h3>
                  <div className="space-y-4">
                    <button 
                      onClick={toggleDarkMode}
                      className="flex items-center justify-between w-full text-sm p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="flex items-center gap-2">
                        {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        {commonT.darkMode}
                      </span>
                      {isDarkMode && <span className="text-blue-600 font-bold ml-2 text-[10px] uppercase tracking-widest">{commonT.on}</span>}
                    </button>
                    <button 
                      onClick={toggleHighContrast}
                      className="flex items-center justify-between w-full text-sm p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="flex items-center gap-2">
                        <Contrast className="h-4 w-4" />
                        {commonT.highContrast}
                      </span>
                      {isHighContrast && <span className="text-blue-600 font-bold ml-2 text-[10px] uppercase tracking-widest">{commonT.on}</span>}
                    </button>
                    <button 
                      onClick={toggleLargeText}
                      className="flex items-center justify-between w-full text-sm p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="flex items-center gap-2">
                        <Type className="h-4 w-4" />
                        {commonT.largeText}
                      </span>
                      {isLargeText && <span className="text-blue-600 font-bold ml-2 text-[10px] uppercase tracking-widest">{commonT.on}</span>}
                    </button>
                  </div>
                  <button 
                    onClick={() => setIsAccOpen(false)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            <Link
              to="/login"
              className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-md shadow-blue-500/20"
            >
              {t.login}
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 px-4 space-y-2 text-left">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setIsMenuOpen(false)}
            className="block px-4 py-2 text-base font-medium text-white bg-blue-600 rounded-lg text-center"
          >
            {t.login}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
