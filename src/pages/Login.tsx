import React from 'react';
import { 
  Lock, User, ArrowRight, ShieldCheck, 
  HelpCircle, ChevronLeft 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';
import logo from '../assets/logo.png';

const Login = () => {
  const { language } = useAccessibility();
  const t = translations[language].login;

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-md w-full space-y-8">
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" /> 
          {language === 'kk' ? 'Басты бетке оралу' : language === 'en' ? 'Back to home' : 'Вернуться на главную'}
        </Link>

        {/* Card */}
        <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-800 space-y-8 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 dark:bg-blue-400/5 rounded-bl-[100%] pointer-events-none" />

          <div className="text-center space-y-2">
            <img src={logo} alt="Logo" className="h-16 w-16 mx-auto mb-4" />
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">{t.title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">{t.subtitle}</p>
          </div>

          <form className="space-y-6 text-left">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest ml-1">{t.loginLabel}</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                    <User className="h-5 w-5" />
                  </div>
                  <input 
                    type="text" 
                    placeholder="user@example.com"
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{t.passLabel}</label>
                  <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700">{t.forgot}</a>
                </div>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-blue-600 focus:bg-white dark:focus:bg-gray-900 outline-none transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 px-1">
              <input type="checkbox" id="remember" className="rounded-md border-gray-300 text-blue-600 focus:ring-blue-500" />
              <label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-400">{t.remember}</label>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] shadow-xl shadow-blue-500/25">
              {t.submit} <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-gray-50 dark:bg-gray-800/50 px-4 py-2 rounded-full border border-gray-100 dark:border-gray-700">
              <ShieldCheck className="h-3.5 w-3.5 text-green-500" /> 
              {language === 'kk' ? 'Қауіпсіз байланыс шифрланған' : language === 'en' ? 'Secure connection is encrypted' : 'Безопасное соединение зашифровано'}
            </div>
          </div>
        </div>

        {/* Help */}
        <div className="text-center group cursor-pointer">
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1.5 group-hover:text-blue-600 transition-colors">
            <HelpCircle className="h-4 w-4" /> 
            {language === 'kk' ? 'Кіру мәселелері бар ма? IT-бөліміне хабарласыңыз' : 
             language === 'en' ? 'Login issues? Contact IT-department' : 
             'Проблемы со входом? Свяжитесь с IT-отделом'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
