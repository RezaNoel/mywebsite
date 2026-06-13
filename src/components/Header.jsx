import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header({ darkMode, setDarkMode, changeLanguage }) {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language.split('-')[0];

  return (
    <header className={`interstate fixed bottom-0 left-0 right-0 md:sticky md:top-0 md:bottom-auto z-50 border-t md:border-t-0 md:border-b px-4 py-2 md:py-3 backdrop-blur-md transition-colors ${
      darkMode ? 'bg-dark-green/90 border-pine' : 'bg-white/90 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto flex md:justify-between md:items-center">
        
        {/* 💻 لوگو (فقط دسکتاپ) */}
        <div className="hidden md:flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-caribbean-green animate-pulse"></div>
          <span className="text-xl font-black tracking-wider">
            {t('logo')}<span className="text-caribbean-green">{t('logog')}</span>
          </span>
        </div>
        
        {/* 📱💻 سیستم ناوبری هوشمند با چیدمان ترتیب داینامیک */}
        <nav className={`w-full md:w-auto grid grid-cols-5 md:flex md:gap-8 font-medium text-[10px] md:text-sm items-center text-center ${
          darkMode ? 'text-pistachio' : 'text-slate-600'
        }`}>
          
          {/* ستون ۱ موبایل / اولویت دوم دسکتاپ: وبلاگ */}
          <a href="/?page=blog" className="order-1 md:order-none flex flex-col md:flex-row items-center gap-1.5 hover:text-caribbean-green transition-colors py-1 group">
            <svg className="w-4 h-4 md:w-4 md:h-4 transition-colors group-hover:stroke-caribbean-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2a2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            <span>{t('blog')}</span>
          </a>

          {/* ستون ۲ موبایل / اولویت سوم دسکتاپ: پروژه‌ها */}
          <a href="/#projects" className="order-2 md:order-none flex flex-col md:flex-row items-center gap-1.5 hover:text-caribbean-green transition-colors py-1 group">
            <svg className="w-4 h-4 md:w-4 md:h-4 transition-colors group-hover:stroke-caribbean-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span>{t('projects')}</span>
          </a>

          {/* ⭐ ستون ۳ موبایل (مرکز فلوت) / اولویت اول دسکتاپ (خانه) */}
          <a href="/" className="order-3 md:order-first flex flex-col md:flex-row items-center justify-center gap-1.5 transition-colors py-1 relative -top-3 md:top-0 group">
            <div className={`w-12 h-12 md:w-auto md:h-auto rounded-full flex items-center justify-center md:bg-transparent md:shadow-none shadow-lg transition-transform active:scale-95 ${
              darkMode ? 'bg-caribbean-green text-rich-black md:text-inherit' : 'bg-emerald-500 text-white md:text-inherit'
            }`}>
              <svg className="w-5 h-5 md:w-4 md:h-4 transition-colors group-hover:stroke-caribbean-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span>{t('home')}</span>
          </a>

          {/* ستون ۴ موبایل / اولویت چهارم دسکتاپ: درباره من */}
          <a href="/?page=about" className="order-4 md:order-none flex flex-col md:flex-row items-center gap-1.5 hover:text-caribbean-green transition-colors py-1 group">
            <svg className="w-4 h-4 md:w-4 md:h-4 transition-colors group-hover:stroke-caribbean-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>{t('about')}</span>
          </a>

          {/* 🛠️ ستون ۵ موبایل: کپسول تنظیمات (فقط در موبایل نمایش داده می‌شود) */}
          <div className="order-5 md:hidden flex flex-col items-center justify-center">
            <div className={`flex items-center p-0.5 rounded-full border scale-95 ${
              darkMode ? 'bg-pine/60 border-forest' : 'bg-slate-100 border-slate-300'
            }`}>
              <button onClick={() => setDarkMode(!darkMode)} className="w-6 h-6 flex items-center justify-center rounded-full text-xs">
                {darkMode ? (
                  <svg className="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 5.657a9 9 0 11-11.314 0z" /></svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-indigo-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 118.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                )}
              </button>
              <div className={`w-[1px] h-3 ${darkMode ? 'bg-forest' : 'bg-slate-300'}`}></div>
              <button onClick={() => changeLanguage(currentLng === 'en' ? 'fa' : 'en')} className={`w-6 h-6 flex items-center justify-center rounded-full text-[9px] font-bold ${darkMode ? 'text-white' : 'text-slate-700'}`}>
                {currentLng === 'en' ? 'FA' : 'EN'}
              </button>
            </div>
          </div>

        </nav>

        {/* 💻 ابزارها و دکمه تماس (فقط دسکتاپ) */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`flex items-center p-0.5 rounded-full border transition-all ${
            darkMode ? 'bg-pine/40 border-forest' : 'bg-slate-100 border-slate-200'
          }`}>
            <button 
              onClick={() => changeLanguage(currentLng === 'en' ? 'fa' : 'en')}
              className={`text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full transition-all active:scale-90 ${
                darkMode ? 'text-anti-flash-white hover:bg-pine' : 'text-slate-700 hover:bg-slate-200'
              }`}
            >
              {currentLng === 'en' ? 'FA' : 'EN'}
            </button>
            <div className={`w-[1px] h-4 ${darkMode ? 'bg-forest' : 'bg-slate-300'}`}></div>
            <button onClick={() => setDarkMode(!darkMode)} className="text-sm w-7 h-7 flex items-center justify-center rounded-full transition-all">
              <span className={`inline-block transition-transform duration-500 ${darkMode ? 'text-amber-400 rotate-[360deg]' : 'text-indigo-950'}`}>
                {darkMode ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
          <button className="bg-bangladesh-green hover:bg-frog text-anti-flash-white text-sm px-3.5 py-1.5 rounded-full font-semibold transition-all shadow-md">
            {t('contact')}
          </button>
        </div>

      </div>
    </header>
  );
}