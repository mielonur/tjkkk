import React from 'react';
import { 
  Calendar, Share2, ArrowUpRight, Megaphone, 
  Clock, Bookmark 
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';
import news1Img from '../assets/news1.jpg';
import nauryz1Img from '../assets/nauryz1.png';
import referendumImg from '../assets/referendum.jpg';
import news1_img from '../assets/news_1.jpg';
import nauryz_img from '../assets/news_nauryz.jpg';

const News = () => {
  const { language } = useAccessibility();
  const navT = translations[language].nav;
  const commonT = translations[language].common;

  const news = language === 'kk' ? [
    {
      id: 4,
      title: "Студенттерге арналған маңызды ақпараттық кездесу",
      date: "08 сәуір 2026",
      category: "Оқиғалар",
      img: news1_img,
      excerpt: "Түркістан жоғары көпсалалы, қолөнер колледжі базасында Жастар ресурстық орталығы КММ-нің ұйымдастыруымен АИТВ-инфекциясының алдын алу, «Құмар ойынға құмартпа» және «Есірткіге жол жоқ» тақырыптарында кездесу өтті."
    },
    {
      id: 5,
      title: "Колледжімізде Наурыз мейрамы жоғары деңгейде аталып өтті",
      date: "22 наурыз 2026",
      category: "Оқиғалар",
      img: nauryz_img,
      excerpt: "Ұлттық дәстүрлеріміз дәріптеліп, студенттер мен оқытушылар белсенділік танытты. Мерекелік шара барысында ұлттық ойындар ойналып, ән мен күй шырқалып, ұлттық тағамдар ұсынылды."
    },
    {
      id: 1,
      title: "Колледжде Наурыз мейрамын тойлау",
      date: "22 наурыз 2026",
      category: "Оқиғалар",
      img: nauryz1Img,
      excerpt: "Біздің колледжде көктемгі күн мен түннің теңелуі — Наурыз мейрамына арналған салтанатты іс-шаралар өтті."
    },
    {
      id: 2,
      title: "Ашық есік күні: Сенің табысқа барар жолың",
      date: "15 наурыз 2026",
      category: "Талапкерлерге",
      img: news1Img,
      excerpt: "Біз барлық ниет білдірушілерді колледжімізге келуге, оқытушылармен танысуға және мамандықтар туралы білуге шақырамыз."
    },
    {
      id: 3,
      title: "Республикалық референдумға қатысу",
      date: "05 наурыз 2026",
      category: "Қоғам",
      img: referendumImg,
      excerpt: "Колледж студенттері мен қызметкерлері дауыс беруге белсенді қатысып, өздерінің азаматтық ұстанымдарын білдірді."
    }
  ] : language === 'en' ? [
    {
      id: 4,
      title: "Important Information Meeting for Students",
      date: "April 08, 2026",
      category: "Events",
      img: news1_img,
      excerpt: "An information meeting on HIV prevention, 'No to Gambling' and 'No to Drugs' was held at the college, organized by the Youth Resource Center."
    },
    {
      id: 5,
      title: "Nauryz Meiram Was Celebrated at a High Level",
      date: "March 22, 2026",
      category: "Events",
      img: nauryz_img,
      excerpt: "National traditions were promoted, and students and teachers were active. During the event, national games were played, and national dishes were offered."
    },
    {
      id: 1,
      title: "Celebration of Nauryz Meiram in the College",
      date: "March 22, 2026",
      category: "Events",
      img: nauryz1Img,
      excerpt: "Solemn events dedicated to the spring equinox holiday — Nauryz — were held in our college."
    },
    {
      id: 2,
      title: "Open Day: Your Path to Success",
      date: "March 15, 2026",
      category: "Applicants",
      img: news1Img,
      excerpt: "We invite everyone to visit our college, get to know the teachers, and learn about the specialties."
    },
    {
      id: 3,
      title: "Participation in the Republic Referendum",
      date: "March 05, 2026",
      category: "Society",
      img: referendumImg,
      excerpt: "Students and employees of the college took an active part in the voting, showing their civic position."
    }
  ] : [
    {
      id: 4,
      title: "Важная информационная встреча для студентов",
      date: "08 апреля 2026",
      category: "События",
      img: news1_img,
      excerpt: "На базе колледжа прошла встреча, организованная Молодежным ресурсным центром, посвященная профилактике ВИЧ, игровой зависимости и наркомании."
    },
    {
      id: 5,
      title: "Празднование Наурыз мейрамы прошло на высоком уровне",
      date: "22 марта 2026",
      category: "События",
      img: nauryz_img,
      excerpt: "Пропагандировались национальные традиции, студенты и преподаватели проявили активность. В программе были национальные игры, песни и праздничные угощения."
    },
    {
      id: 1,
      title: "Празднование Наурыз мейрамы в колледже",
      date: "22 марта 2026",
      category: "События",
      img: nauryz1Img,
      excerpt: "В нашем колледже прошли торжественные мероприятия, посвященные празднику весеннего равноденствия — Наурыз."
    },
    {
      id: 2,
      title: "День открытых дверей: Твой путь к успеху",
      date: "15 марта 2026",
      category: "Абитуриентам",
      img: news1Img,
      excerpt: "Мы приглашаем всех желающих посетить наш колледж, познакомиться с преподавателями и узнать о специальностях."
    },
    {
      id: 3,
      title: "Участие в республиканском референдуме",
      date: "05 марта 2026",
      category: "Общество",
      img: referendumImg,
      excerpt: "Студенты и сотрудники колледжа приняли активное участие в голосовании, проявив свою гражданскую позицию."
    }
  ];

  const categories = language === 'kk' ? ["Барлығы", "Оқиғалар", "Оқу", "Спорт", "Хабарландырулар"] :
                   language === 'en' ? ["All", "Events", "Study", "Sports", "Announcements"] :
                   ["Все", "События", "Учеба", "Спорт", "Анонсы"];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Featured Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-100 dark:border-gray-800 pb-10">
        <div className="space-y-2 text-left">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
            <Megaphone className="h-4 w-4" /> {language === 'kk' ? 'Назарда' : language === 'en' ? 'In the spotlight' : 'В центре внимания'}
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">{navT.news}</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                i === 0 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {news.map((item) => (
          <article 
            key={item.id} 
            className="group bg-white dark:bg-gray-800 rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  {item.category}
                </span>
              </div>
              <button className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
                <Bookmark className="h-4 w-4" />
              </button>
            </div>
            <div className="p-8 space-y-4 flex-grow flex flex-col text-left">
              <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-blue-500" /> {item.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-blue-500" /> 2 {commonT.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 leading-relaxed flex-grow">
                {item.excerpt}
              </p>
              <div className="pt-6 mt-auto flex justify-between items-center border-t border-gray-50 dark:border-gray-700/50">
                <a 
                  href="https://www.facebook.com/TUR.COLLEGE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn"
                >
                  {language === 'kk' ? 'Толығырақ оқу' : language === 'en' ? 'Read full story' : 'Читать полностью'}
                  <ArrowUpRight className="h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
                <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex justify-center pt-8 border-b border-gray-100 dark:border-gray-800 pb-12">
        <button className="px-10 py-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-sm">
          {language === 'kk' ? 'Көбірек жаңалық жүктеу' : language === 'en' ? 'Load more news' : 'Загрузить больше новостей'}
        </button>
      </div>

      {/* Facebook News Section */}
      <div className="pt-8">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest mb-8">
          <Share2 className="h-4 w-4" /> 
          {language === 'kk' ? 'Әлеуметтік желілерде' : language === 'en' ? 'On Social Media' : 'В социальных сетях'}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-items-center">
          <div className="w-full flex justify-center overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FTUR.COLLEGE%2Fposts%2Fpfbid0DTy5QT7LdfDR7cUiFK2stReUG22ouc5KoVwPWTYnzM9xRfAo7WPR12cRBhhZ9rEFl&show_text=true&width=500" width="500" height="805" style={{border:"none", overflow:"hidden", maxWidth: "100%"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
          <div className="w-full flex justify-center overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FTUR.COLLEGE%2Fposts%2Fpfbid02f8Pfcd8fnmtdBnUMVB5dJ9P52tb7hEzWoBHiAKpDqRZAJsYccTU4kYRj8AZiW8s8l&show_text=true&width=500" width="500" height="736" style={{border:"none", overflow:"hidden", maxWidth: "100%"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
          <div className="w-full flex justify-center overflow-hidden bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 p-4">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FTUR.COLLEGE%2Fposts%2Fpfbid029VCt4zTPZDLkejCJgMvijwJcu7upupvgLkJUqL674FpMuDXju8in3iQciTwBZHhMl&show_text=true&width=500" width="500" height="250" style={{border:"none", overflow:"hidden", maxWidth: "100%"}} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
