import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Header({ darkMode, setDarkMode, changeLanguage }) {
  const { t, i18n } = useTranslation();

  // پیدا کردن زبان فعلی پروژه
  const currentLng = i18n.language.split('-')[0];

  return (
    <header className={`animate-header interstate sticky top-0 z-50 border-b px-6 py-3 backdrop-blur-md transition-colors ${
      darkMode ? 'bg-dark-green/90 border-pine' : 'bg-white/90 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* لوگو */}
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-caribbean-green animate-pulse"></div>
          <span className="text-xl font-black tracking-wider">
            {t('logo')}<span className="text-caribbean-green">{t('logog')}</span>
          </span>
        </div>
        
        {/* منو */}
        <nav className={`hidden md:flex gap-8 font-medium text-sm ${darkMode ? 'text-pistachio' : 'text-slate-600'}`}>
        {/* لینک خانه: کاربر را به صفحه اصلی و بدون کوئری برمی‌گرداند */}
        <a href="/" className="hover:text-caribbean-green transition-colors">
            {t('home')}
        </a>

        {/* لینک پروژه‌ها: به بخش پروژه‌ها در صفحه اصلی اسکرول می‌کند */}
        <a href="/#projects" className="hover:text-caribbean-green transition-colors">
            {t('projects')}
        </a>

        {/* لینک وبلاگ: صفحه آرشیو وبلاگ‌ها را باز می‌کند */}
        <a href="/?page=blog" className="hover:text-caribbean-green transition-colors">
            {t('blog')}
        </a>

        {/* لینک درباره من: به بخش فوتر یا ویژگی‌ها اسکرول می‌کند */}
        <a href="/#about" className="hover:text-caribbean-green transition-colors">
            {t('about')}
        </a>
        </nav>

        {/* بخش ابزارها: دکمه تماس و گجت کپسولی */}
        <div className="flex items-center gap-4">
          
          {/* 👈 پک کپسولی و یکپارچه برای زبان و تم (فوق مینی‌مال) */}
          <div className={`flex items-center p-0.5 rounded-full border transition-all ${
            darkMode ? 'bg-pine/40 border-forest' : 'bg-slate-100 border-slate-200'
          }`}>
            
            {/* دکمه زبان داخل پک */}
            <button 
              onClick={() => changeLanguage(currentLng === 'en' ? 'fa' : 'en')}
              className={`text-xs font-bold w-7 h-7 flex items-center justify-center rounded-full transition-all active:scale-90 ${
                darkMode ? 'text-anti-flash-white hover:bg-pine' : 'text-slate-700 hover:bg-slate-200'
              }`}
              title={currentLng === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
            >
              {currentLng === 'en' ? 'FA' : 'EN'}
            </button>

            {/* خط جداکننده بسیار ظریف وسط کپسول */}
            <div className={`w-[1px] h-4 ${darkMode ? 'bg-forest' : 'bg-slate-300'}`}></div>

            {/* دکمه تم داخل پک */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="text-sm w-7 h-7 flex items-center justify-center rounded-full transition-all active:scale-90"
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              <span className={`inline-block transition-transform duration-500 ${darkMode ? 'text-amber-400 rotate-[360deg]' : 'text-indigo-950'}`}>
                {darkMode ? '☀️' : '🌙'}
              </span>
            </button>

          </div>

          {/* دکمه تماس با ما */}
          <button className="hidden sm:inline-block bg-bangladesh-green hover:bg-frog text-anti-flash-white text-sm px-3.5 py-1.5 rounded-full font-semibold transition-all shadow-md">
            {t('contact')}
          </button>

        </div>
      </div>
    </header>
  );
}