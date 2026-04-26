import React from 'react';
import { History, Calendar, Users } from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';
import directorImg from '../assets/director.jpg';
import buildingImg from '../assets/collage.jpeg';

const About = () => {
  const { language } = useAccessibility();
  const t = translations[language].about;
  const navT = translations[language].nav;

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400">{navT.about}</h1>
        <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
      </div>

      {/* History Section (Based on Photo) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative group">
          <div className="absolute -inset-4 bg-blue-100 dark:bg-blue-900/20 rounded-[2.5rem] rotate-2 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-all duration-500" />
          <img 
            src={buildingImg} 
            alt="College Building" 
            className="relative rounded-[2rem] shadow-2xl w-full h-[450px] object-cover"
          />
        </div>
        
        <div className="space-y-8 pl-4 lg:pl-8">
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm">
              <History className="h-4 w-4" />
              {t.historyTitle}
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {t.historyHeading}
            </h2>
          </div>

          <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            <p>{t.historyText1}</p>
            <p>{t.historyText2}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-blue-900 dark:text-blue-400 flex items-center gap-2">
                <Calendar className="h-6 w-6 text-blue-600" /> 1934
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.historyStat1}</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl font-extrabold text-blue-900 dark:text-blue-400 flex items-center gap-2">
                <Users className="h-6 w-6 text-blue-600" /> 150 000+
              </div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t.historyStat2}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy/Director Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 lg:order-2 text-left">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t.philosophyTitle}</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.directorText1}
          </p>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {t.directorText2}
          </p>
        </div>
        <div className="relative lg:order-1">
          <div className="absolute -inset-4 bg-gray-100 dark:bg-gray-800 rounded-3xl" />
          <img 
            src={directorImg} 
            alt="Director" 
            className="relative rounded-2xl shadow-xl w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* Mission & Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: t.mission, desc: t.missionDesc },
          { title: t.vision, desc: t.visionDesc },
          { title: t.values, desc: t.valuesDesc },
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow text-left">
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
