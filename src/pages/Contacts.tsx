import React from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  MessageSquare, Globe
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';
import { translations } from '../i18n/translations';

const Contacts = () => {
  const { language } = useAccessibility();
  const navT = translations[language].nav;
  const t = translations[language].contacts;

  const contactInfo = language === 'kk' ? [
    { 
      icon: MapPin, 
      title: "Біздің мекен-жайымыз", 
      details: ["Түркістан қ., Мусабеков көш., 27", "Түркістан жоғары көпсалалы қолөнер колледжі"],
      color: "text-red-500"
    },
    { 
      icon: Phone, 
      title: "Телефондар", 
      details: ["8-725-33-4-06-48"],
      color: "text-green-500"
    },
    { 
      icon: Mail, 
      title: "Email", 
      details: ["turkestan.koloner@gmail.com"],
      color: "text-blue-500"
    },
    { 
      icon: Clock, 
      title: "Жұмыс режимі", 
      details: ["Дс-Жм: 09:00 - 18:00", "Сб: 10:00 - 14:00"],
      color: "text-orange-500"
    },
  ] : language === 'en' ? [
    { 
      icon: MapPin, 
      title: "Our Address", 
      details: ["27 Musabekov St., Turkestan", "Turkestan Higher Multidisciplinary Craft College"],
      color: "text-red-500"
    },
    { 
      icon: Phone, 
      title: "Phones", 
      details: ["8-725-33-4-06-48"],
      color: "text-green-500"
    },
    { 
      icon: Mail, 
      title: "Email", 
      details: ["turkestan.koloner@gmail.com"],
      color: "text-blue-500"
    },
    { 
      icon: Clock, 
      title: "Working Hours", 
      details: ["Mon-Fri: 09:00 - 18:00", "Sat: 10:00 - 14:00"],
      color: "text-orange-500"
    },
  ] : [
    { 
      icon: MapPin, 
      title: "Наш адрес", 
      details: ["г. Туркестан, ул. Мусабекова 27", "Түркістан жоғары көпсалалы қолөнер колледжі"],
      color: "text-red-500"
    },
    { 
      icon: Phone, 
      title: "Телефоны", 
      details: ["8-725-33-4-06-48"],
      color: "text-green-500"
    },
    { 
      icon: Mail, 
      title: "Email", 
      details: ["turkestan.koloner@gmail.com"],
      color: "text-blue-500"
    },
    { 
      icon: Clock, 
      title: "Режим работы", 
      details: ["Пн-Пт: 09:00 - 18:00", "Сб: 10:00 - 14:00"],
      color: "text-orange-500"
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-extrabold text-blue-900 dark:text-blue-400">{navT.contacts}</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {language === 'kk' ? 'Біз әрқашан байланыстамыз және кез келген сұрақтарыңызға жауап беруге дайынбыз. Бізбен өзіңізге ыңғайлы тәсілмен хабарласыңыз.' :
           language === 'en' ? 'We are always in touch and ready to answer any of your questions. Contact us in any way convenient for you.' :
           'Мы всегда на связи и готовы ответить на любые ваши вопросы. Свяжитесь с нами удобным для вас способом.'}
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Info Column */}
        <div className="lg:col-span-1 space-y-6">
          {contactInfo.map((info, i) => (
            <div key={i} className="flex gap-5 p-6 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
              <div className={`shrink-0 p-3 rounded-2xl bg-gray-50 dark:bg-gray-900/50 ${info.color}`}>
                <info.icon className="h-6 w-6" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{info.title}</h3>
                {info.details.map((line, j) => (
                  <p key={j} className="text-sm text-gray-600 dark:text-gray-400">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2">
          <form className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-gray-700 space-y-6 text-left">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-blue-600" /> {t.writeToUs}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.nameLabel}</label>
                <input 
                  type="text" 
                  placeholder={language === 'kk' ? "Аты-жөніңіз" : language === 'en' ? "Your Name" : "Иван Иванов"} 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.emailLabel}</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.subjectLabel}</label>
              <input 
                type="text" 
                placeholder={language === 'kk' ? "Сұрақ тақырыбы" : language === 'en' ? "Subject" : "Вопрос по поступлению"} 
                className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">{t.messageLabel}</label>
              <textarea 
                rows={5} 
                placeholder={language === 'kk' ? "Хабарламаңыз..." : language === 'en' ? "Your message..." : "Ваше сообщение..."} 
                className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-blue-500/20">
              {t.sendBtn} <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <section className="rounded-[3rem] overflow-hidden h-96 border border-gray-200 dark:border-gray-700 shadow-inner relative">
        <iframe 
          src="https://yandex.ru/map-widget/v1/?mode=search&text=Туркестан%2C%20Мусабекова%2027" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowFullScreen={true}
          style={{ position: 'relative' }}
        ></iframe>
      </section>
    </div>
  );
};

export default Contacts;
