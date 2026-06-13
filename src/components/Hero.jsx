import React from 'react';
import { useTranslation } from 'react-i18next';
// وارد کردن آیکون‌های خطی و مدرن از لوساید
import { Code2, Video, Globe, Play } from 'lucide-react';
/* 👈 عکس شما از پوشه assets */
import myAvatar from '../assets/image.png';

export default function Hero({ darkMode }) {
  const { t, i18n } = useTranslation();
  
  // تشخیص جهت و زبان فعال سایت برای راست‌چین یا چپ‌چین کردن هوشمند ترازها
  const currentLng = i18n.language.split('-')[0];
  const isRtl = currentLng === 'fa';

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className={`relative overflow-hidden py-16 md:py-28 transition-colors duration-300 ${
        darkMode ? 'bg-rich-black text-anti-flash-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* افکت سه‌رنگ پس‌زمینه در حالت دارک */}
      {darkMode && (
        <div className="absolute inset-0 -z-10 flex opacity-25 blur-[120px] pointer-events-none">
          <div className="flex-1 bg-bg-left h-full"></div>
          <div className="flex-1 bg-bg-center h-full"></div>
          <div className="flex-1 bg-bg-right h-full"></div>
        </div>
      )}

      {/* ساختار شبکه (Grid) دو ستونه */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* ستون اول: متن‌ها، تگ‌های هویتی و دکمه‌ها */}
        <div className={`order-2 md:order-1 text-center ${isRtl ? 'md:text-start' : 'md:text-start'}`}>
          
          {/* 🏷️ تگ‌های هویتی مینی‌مال با آیکون‌های وکتور خطی */}
          <div className="animate-item flex flex-wrap justify-center md:justify-start gap-2 mb-6 text-[11px] font-mono tracking-wider uppercase">
            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${darkMode ? 'bg-pine border-mint/20 text-caribbean-green' : 'bg-emerald-50 border-emerald-200 text-emerald-700'} font-bold`}>
              <Code2 size={13} strokeWidth={2.5} />
              Developer
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold">
              <Video size={13} strokeWidth={2.5} />
              YouTuber
            </span>
            <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full border ${darkMode ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' : 'bg-blue-50 border-blue-100 text-blue-600'} font-bold`}>
              <Globe size={13} strokeWidth={2.5} />
              Polyglot
            </span>
          </div>
          
          {/* عنوان اصلی */}
          <h1 className="animate-item text-4xl md:text-6xl font-black leading-tight md:leading-snug mb-4">
            {t('heroTitle')}
          </h1>

          {/* زیرعنوان تخصصی */}
          <p className="animate-item text-xl md:text-2xl font-bold mb-6 bg-gradient-to-r from-caribbean-green to-emerald-400 bg-clip-text text-transparent">
            {t('heroSubtitle')}
          </p>
          
          {/* توضیحات */}
          <p className={`animate-item text-sm md:text-base max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed text-justify ${darkMode ? 'text-stone' : 'text-slate-600'}`}>
            {t('heroDesc')}
          </p>

          {/* 🔘 دکمه‌های فراخوانی برای اقدام دوقلو */}
          <div className="animate-item flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
            <a 
              href="#projects" 
              className="w-full sm:w-auto text-center bg-caribbean-green hover:bg-mountain-meadow text-rich-black font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-caribbean-green/10 active:scale-95"
            >
              {t('heroCTA')}
            </a>
            <a 
              href="https://youtube.com/@chibodeh" 
              target="_blank" 
              rel="noreferrer" 
              className={`w-full sm:w-auto border px-8 py-4 rounded-xl font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2 ${
                darkMode ? 'bg-basil/40 hover:bg-basil text-pistachio border-forest' : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-300'
              }`}
            >
              {/* آیکون خطی Play به جای دکمه اموجی */}
              <Play size={15} fill="currentColor" className="text-red-500" />
              {t('heroYoutubeCTA')}
            </a>
          </div>
        </div>

        {/* ستون دوم: بخش عکس دایره‌ای با رینگ چرخان و استایل‌های اصلی شما */}
        <div className="animate-item flex justify-center order-1 md:order-2">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-caribbean-green/20 to-mountain-meadow/40 blur-2xl animate-pulse"></div>
              
              <div className={`absolute w-full h-full rounded-full border border-dashed transition-colors ${
                darkMode ? 'border-mint/30 bg-pine/10' : 'border-slate-300 bg-slate-100'
              } animate-[spin_60s_linear_infinite]`}></div>

              <div className={`relative z-10 w-[85%] h-[85%] rounded-full overflow-hidden border-2 flex items-end justify-center ${
                darkMode ? 'border-caribbean-green/50 bg-gradient-to-b from-basil to-rich-black' : 'border-emerald-500/50 bg-gradient-to-b from-emerald-50 to-slate-200'
              } shadow-2xl`}>
              
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