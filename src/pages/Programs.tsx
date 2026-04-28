import React, { useState } from 'react';
import { 
  Terminal, ShieldCheck, PieChart, Briefcase, Settings, Landmark, 
  Search, Filter, Baby, Scissors, Code, Cpu, Navigation, Dumbbell, 
  Palette, BookOpen, Languages, Clock, Hash, Sparkles, X
} from 'lucide-react';
import { programDetails } from '../data/programDetails';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';

const Programs = () => {
  const { language } = useAccessibility();
  const t = translations[language].programs;
  const navT = translations[language].nav;
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState<any>(null);

  // Mapping icons to program IDs
  const getIcon = (id: number) => {
    switch(id) {
      case 1: return Baby;
      case 2: return BookOpen;
      case 3: return Scissors;
      case 4: return Code;
      case 5: return Cpu;
      case 6: return Navigation;
      case 7: return Dumbbell;
      case 8: return Palette;
      case 9: return Languages;
      case 10: return Sparkles;
      default: return Terminal;
    }
  };

  const filteredPrograms = t.list.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.code.includes(searchTerm)
  );

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="space-y-4 text-left">
          <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400">{navT.programs}</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl">
            {t.subtitle}
          </p>
        </div>
        
        {/* Search & Filter */}
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input 
              type="text" 
              placeholder={t.searchPlaceholder} 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            />
          </div>
          <button className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 transition-colors">
            <Filter className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((program) => {
          const Icon = getIcon(program.id);
          return (
            <div 
              key={program.id} 
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative background circle */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-50 dark:bg-blue-900/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-600 text-white mb-6 group-hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
                  <Icon className="h-7 w-7" />
                </div>
                
                <div className="space-y-1 mb-6">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-blue-600 dark:text-blue-400 tracking-widest uppercase">
                    <Hash className="h-3 w-3" /> {program.code}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {program.name}
                  </h3>
                </div>

                <div className="space-y-3 pt-6 border-t border-gray-50 dark:border-gray-700/50">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span className="font-medium">{t.duration}:</span>
                    <span className="text-gray-900 dark:text-gray-100">{t.yearsMonths}</span>
                  </div>
                  <button 
                    onClick={() => setSelectedProgram(program)}
                    className="w-full mt-4 bg-gray-50 dark:bg-gray-900/50 hover:bg-blue-600 hover:text-white text-gray-900 dark:text-white py-3 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 uppercase tracking-widest"
                  >
                    {translations[language].common.more} <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 text-center text-white space-y-6 shadow-2xl shadow-blue-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold">{t.ctaTitle}</h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg mt-4">
            {t.ctaDesc}
          </p>
          <button className="mt-8 bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl">
            {t.ctaBtn}
          </button>
        </div>
      </section>

      {/* Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
            <button 
              onClick={() => setSelectedProgram(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
            
            <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white pr-10">
              {selectedProgram.name}
            </h2>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold mb-6 tracking-widest text-sm">
              <Hash className="h-4 w-4" /> {selectedProgram.code}
            </div>

            {programDetails[selectedProgram.code] ? (
              <div className="space-y-6 text-gray-700 dark:text-gray-300">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                    {language === 'kk' ? 'Біліктілік:' : language === 'ru' ? 'Квалификация:' : 'Qualifications:'}
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
                    {programDetails[selectedProgram.code].qualifications.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
                <div className="prose dark:prose-invert max-w-none text-sm md:text-base leading-relaxed">
                  {programDetails[selectedProgram.code].content.split('\n').map((paragraph, idx) => (
                    paragraph.trim() ? <p key={idx} className="mb-4">{paragraph.trim()}</p> : null
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-gray-500 text-center py-12">
                {language === 'kk' ? 'Бұл мамандық бойынша ақпарат әзірге жоқ.' : language === 'ru' ? 'Информация по этой специальности пока отсутствует.' : 'Information for this program is currently unavailable.'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Internal icon for Arrow
const ArrowRight = ({ className }: { className: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default Programs;
