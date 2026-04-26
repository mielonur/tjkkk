import React from 'react';
import { 
  Facebook, Instagram, Twitter, Mail, Phone, MapPin 
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';

const Footer = () => {
  const { language } = useAccessibility();
  const t = translations[language].footer;
  const navT = translations[language].nav;

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Column */}
          <div className="col-span-1 md:col-span-2 text-left">
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-4">ТЖКҚК</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm max-w-sm mb-6">
              {t.desc}
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-blue-600 dark:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-pink-100 dark:hover:bg-pink-900 transition-colors text-pink-600 dark:text-pink-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="text-left">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-white uppercase tracking-wider text-xs">{t.navTitle}</h3>
            <ul className="space-y-2">
              <li><a href="#/" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">{navT.home}</a></li>
              <li><a href="#/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">{navT.about}</a></li>
              <li><a href="#/programs" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">{navT.programs}</a></li>
              <li><a href="#/admissions" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">{navT.admissions}</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="text-left">
            <h3 className="font-bold mb-4 text-gray-900 dark:text-white uppercase tracking-wider text-xs">{t.contactTitle}</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">{t.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">+7 (xxx) xxx-xx-xx</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-blue-600 shrink-0" />
                <span className="text-sm text-gray-600 dark:text-gray-400">turkestan.koloner@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            {t.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
