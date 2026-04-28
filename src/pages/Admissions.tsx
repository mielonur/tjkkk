import React from 'react';
import { 
  ClipboardCheck, Calendar, FileText, UserPlus, HelpCircle 
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';

const Admissions = () => {
  const { language } = useAccessibility();
  const t = translations[language].admissions;
  const navT = translations[language].nav;

  const steps = language === 'kk' ? [
    { title: "Құжаттарды тапсыру", desc: "Қажетті құжаттар топтамасын жинап, оларды онлайн немесе жеке тапсырыңыз.", icon: ClipboardCheck },
    { title: "Қабылдау емтихандары", desc: "Кестеге сәйкес бейіндік пәндер бойынша тестілеуден өтіңіз.", icon: FileText },
    { title: "Оқуға қабылдау", desc: "Оқуға қабылдауға ұсынылғандар тізімінің жариялануын күтіңіз.", icon: UserPlus },
  ] : language === 'en' ? [
    { title: "Submission of Documents", desc: "Collect the package of necessary documents and submit them online or in person.", icon: ClipboardCheck },
    { title: "Entrance Exams", desc: "Take tests in specialized subjects according to the schedule.", icon: FileText },
    { title: "Enrollment", desc: "Wait for the publication of the lists of recommended for enrollment.", icon: UserPlus },
  ] : [
    { title: "Подача документов", desc: "Соберите пакет необходимых документов и подайте их онлайн или лично.", icon: ClipboardCheck },
    { title: "Вступительные экзамены", desc: "Пройдите тестирование по профильным предметам в соответствии с графиком.", icon: FileText },
    { title: "Зачисление", desc: "Дождитесь публикации списков рекомендованных к зачислению.", icon: UserPlus },
  ];

  const docs = language === 'kk' ? [
    "Жеке куәлік / Туу туралы куәлік",
    "Мектепті бітіргені туралы аттестат",
    "075-У нысанындағы медициналық анықтама",
    "6 фотосурет (3x4 см)",
    "Белгіленген үлгідегі өтініш",
    "Абитуриенттің ЖСН",
  ] : language === 'en' ? [
    "ID card / Birth certificate",
    "School leaving certificate",
    "Medical certificate form 075-U",
    "6 photos (3x4 cm)",
    "Application of the established sample",
    "Applicant's IIN",
  ] : [
    "Удостоверение личности / Свидетельство о рождении",
    "Аттестат об окончании школы",
    "Медицинская справка формы 075-У",
    "6 фотографий (3x4 см)",
    "Заявление установленного образца",
    "ИИН абитуриента",
  ];

  const helpT = language === 'kk' ? {
    title: "Сұрақтарыңыз бар ма?",
    desc: "Біздің қабылдау комиссиясы жұмыс уақытында барлық сұрақтарыңызға жауап беруге дайын.",
    btn: "Қоңырау шалуға тапсырыс беру"
  } : language === 'en' ? {
    title: "Have questions?",
    desc: "Our admissions committee is ready to answer all your questions during working hours.",
    btn: "Request a call"
  } : {
    title: "Есть вопросы?",
    desc: "Наша приемная комиссия готова ответить на все ваши вопросы в рабочее время.",
    btn: "Заказать звонок"
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      {/* Header */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400">{navT.admissions}</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {language === 'kk' ? 'Біздің команданың бір бөлігі болыңыз! Біз сіз үшін оқуға түсудің қарапайым және түсінікті нұсқаулығын дайындадық.' : 
           language === 'en' ? 'Become part of our team! We have prepared a simple and clear admission guide for you.' :
           'Станьте частью нашей команды! Мы подготовили для вас простую и понятную инструкцию по поступлению.'}
        </p>
      </section>

      {/* Steps */}
      <section className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 dark:bg-blue-900 -z-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 text-center relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl shadow-lg">
                {i + 1}
              </div>
              <div className="mt-4 mb-4 inline-flex p-3 rounded-2xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documents */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6 text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <ClipboardCheck className="h-6 w-6 text-blue-600" /> {language === 'kk' ? 'Қажетті құжаттар' : language === 'en' ? 'Required Documents' : 'Необходимые документы'}
          </h2>
          <ul className="space-y-3">
            {docs.map((doc, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-50 dark:border-gray-700 pb-2 last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                {doc}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-3xl border border-blue-100 dark:border-blue-800 text-left">
            <h3 className="font-bold mb-4 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" /> {language === 'kk' ? 'Маңызды күндер' : language === 'en' ? 'Important Dates' : 'Важные даты'}
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">{t.dates.start}</span>
                <span className="font-bold text-blue-600">{t.dates.june20}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">{t.dates.endFull}</span>
                <span className="font-bold text-blue-600">{t.dates.aug20}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">{t.dates.endPart}</span>
                <span className="font-bold text-blue-600">{t.dates.sept20}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-8 rounded-3xl space-y-4 text-left">
            <h3 className="font-bold flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-blue-400" /> {helpT.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {helpT.desc}
            </p>
            <button className="w-full bg-blue-600 py-3 rounded-xl font-bold hover:bg-blue-700 transition">
              {helpT.btn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
