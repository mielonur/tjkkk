import { 
  Users, GraduationCap, BookOpen, School, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';
import collageImg from '../assets/collage.jpeg';

const Home = () => {
  const { language } = useAccessibility();
  const t = translations[language].home;
  const navT = translations[language].nav;

  const stats = [
    { icon: Users, label: t.stats.students, value: '1867' },
    { icon: GraduationCap, label: t.stats.teachers, value: '156' },
    { icon: BookOpen, label: t.stats.programs, value: '11' },
    { icon: School, label: t.stats.graduates, value: '50000+' },
  ];

  const whyUsList = language === 'kk' ? [
    "Заманауи зертханалар мен жабдықтар",
    "Тәжірибелі оқытушылар",
    "Оқуды бітіргеннен кейін жұмысқа орналасу",
    "Мемлекеттік диплом",
    "Қала орталығында ыңғайлы орналасу",
  ] : language === 'en' ? [
    "Modern laboratories and equipment",
    "Practicing teachers",
    "Employment after graduation",
    "State diploma",
    "Convenient location in the city center",
  ] : [
    "Современные лаборатории и оборудование",
    "Преподаватели-практики",
    "Трудоустройство после окончания",
    "Государственный диплом",
    "Удобное расположение в центре города",
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={collageImg} 
            alt="Hero Background" 
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl ml-0 px-4 sm:px-8 lg:px-12 text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold max-w-4xl leading-tight mb-6 animate-in slide-in-from-left duration-700">
            {t.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 animate-in slide-in-from-left duration-700 delay-200">
            {t.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-4 animate-in slide-in-from-left duration-700 delay-400">
            <Link to="/admissions" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-blue-900/20">
              {navT.admissions} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/programs" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-bold transition-all">
              {navT.programs}
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              <div className="inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 dark:bg-gray-800/50 py-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">{t.whyUs}</h2>
              <div className="space-y-4">
                {whyUsList.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src={collageImg} alt="Students" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
                <div className="bg-blue-600 rounded-2xl p-6 text-white text-center">
                  <div className="text-4xl font-bold">#1</div>
                  <div className="text-sm">{t.topRegion}</div>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-left">
                  <div className="text-blue-600 font-bold">83%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 text-xs uppercase font-bold tracking-wider">{t.graduatesWork}</div>
                </div>
                <img src={collageImg} alt="Library" className="rounded-2xl h-64 w-full object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {language === 'kk' ? 'Галерея' : language === 'en' ? 'Gallery' : 'Галерея'}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {language === 'kk' ? 'Колледж өмірінен көріністер' : language === 'en' ? 'Moments from college life' : 'Моменты из жизни колледжа'}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 16 }).map((_, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-2xl aspect-square shadow-sm hover:shadow-xl transition-all">
              <img 
                src={`/tjkkk/albom/photo_${idx + 1}.jpeg`} 
                alt={`Gallery photo ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
