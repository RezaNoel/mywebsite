import React from 'react';
import { useTranslation } from 'react-i18next';
/* 👈 ۱. وارد کردن عکس از پوشه assets */
import myAvatar from '../assets/image.png';

export default function Hero({ darkMode }) {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden py-16 md:py-28">
      {/* افکت سه‌رنگ پس‌زمینه */}
      {darkMode && (
        <div className="absolute inset-0 -z-10 flex opacity-25 blur-[120px]">
          <div className="flex-1 bg-bg-left h-full"></div>
          <div className="flex-1 bg-bg-center h-full"></div>
          <div className="flex-1 bg-bg-right h-full"></div>
        </div>
      )}

      {/* تبدیل به ساختار شبکه (Grid) دو ستونه */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ستون اول: متن‌ها و دکمه‌ها */}
        <div className="text-right md:text-right text-center order-2 md:order-1">
          <span className={`animate-item inline-block border text-sm font-medium px-4 py-1.5 rounded-full mb-6 ${
            darkMode ? 'bg-pine border-mint/30 text-mountain-meadow' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            {t('badge')}
          </span>
          
          <h1 className="animate-item text-4xl md:text-6xl font-black leading-tight md:leading-snug mb-6">
            {t('heroTitle')}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-caribbean-green to-mountain-meadow">
              {t('heroTitleSpan')}
            </span>
          </h1>
          
          <p className={`animate-item md:text-xl max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed ${darkMode ? 'text-stone' : 'text-slate-600'}`}>
            {t('heroDesc')}
          </p>

          <div className="animate-item flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <button className="w-full sm:w-auto bg-caribbean-green hover:bg-mountain-meadow text-rich-black font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-caribbean-green/10">
              {t('btnStart')}
            </button>
            <button className={`w-full sm:w-auto border px-8 py-4 rounded-xl font-semibold transition-all ${
              darkMode ? 'bg-basil/40 hover:bg-basil text-pistachio border-forest' : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
            }`}>
              {t('btnWorks')}
            </button>
          </div>
        </div>
        {/* ستون دوم: بخش عکس خلاقانه دایره‌ای با لبه‌های کراپ‌شده */}
        <div className="animate-item flex justify-center order-1 md:order-2">
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            
            {/* رینگ نئونی پس‌زمینه عکس با رنگ کارائیب گرین */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-caribbean-green/20 to-mountain-meadow/40 blur-2xl animate-pulse"></div>
            
            {/* کادر دایره‌ای در حال چرخش پشت عکس */}
            <div className={`absolute w-full h-full rounded-full border border-dashed transition-colors ${
            darkMode ? 'border-mint/30 bg-pine/10' : 'border-slate-300 bg-slate-100'
            } animate-[spin_60s_linear_infinite]`}></div>

            {/* قاب دایره‌ای اصلی با پس‌زمینه رنگی تم سایت */}
            <div className={`relative z-10 w-[85%] h-[85%] rounded-full overflow-hidden border-2 flex items-end justify-center ${
            darkMode ? 'border-caribbean-green/50 bg-gradient-to-b from-basil to-rich-black' : 'border-emerald-500/50 bg-gradient-to-b from-emerald-50 to-slate-200'
            } shadow-2xl`}>
            
            {/* 👈 تگ عکس با پدینگ و مینی‌مال‌سازی برای ایجاد فاصله از بالا */}
            <img 
                src={myAvatar} 
                alt="Reza Noel" 
                className="w-[100%] h-[100%] object-contain pt-3 filter contrast-105 hover:scale-105 transition-transform duration-500" 
            />
            </div>
        </div>
        </div>

      </div>
    </section>
  );
}