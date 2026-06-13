import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FeaturesAndFooter({ darkMode }) {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language.split('-')[0];
  const isRtl = currentLng === 'fa';

  return (
    <>
      {/* ⚡ بخش ویژگی‌های فشرده و کاربردی (Minimal Features Bar) */}
      <section 
        dir={isRtl ? 'rtl' : 'ltr'} 
        className={`py-10 border-t transition-colors duration-300 ${
          darkMode ? 'bg-pine/10 border-pine/30' : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* استفاده از flex-wrap به جای grid برای کنترل بهتر فاصله */}
          <div className="flex flex-wrap justify-between gap-8">
            
            {/* ویژگی اول */}
            <div className="flex items-center gap-4 flex-1 min-w-[250px]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-caribbean-green text-xl shrink-0">
                ⚡
              </div>
              <div>
                <h3 className="text-sm font-bold">{t('feat1Title')}</h3>
                <p className={`text-xs mt-0.5 ${darkMode ? 'text-stone/70' : 'text-slate-500'}`}>{t('feat1Desc')}</p>
              </div>
            </div>

            {/* ویژگی دوم */}
            <div className="flex items-center gap-4 flex-1 min-w-[250px]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-caribbean-green text-xl shrink-0">
                🎨
              </div>
              <div>
                <h3 className="text-sm font-bold">{t('feat2Title')}</h3>
                <p className={`text-xs mt-0.5 ${darkMode ? 'text-stone/70' : 'text-slate-500'}`}>{t('feat2Desc')}</p>
              </div>
            </div>

            {/* ویژگی سوم */}
            <div className="flex items-center gap-4 flex-1 min-w-[250px]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-caribbean-green text-xl shrink-0">
                📱
              </div>
              <div>
                <h3 className="text-sm font-bold">{t('feat3Title')}</h3>
                <p className={`text-xs mt-0.5 ${darkMode ? 'text-stone/70' : 'text-slate-500'}`}>{t('feat3Desc')}</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🌐 فوتر */}
      <footer 
        dir={isRtl ? 'rtl' : 'ltr'} 
        className={`mt-auto border-t pt-16 pb-24 md:pb-8 px-6 text-sm transition-colors duration-300 ${
          darkMode ? 'bg-rich-black border-pine text-stone' : 'bg-white border-slate-200 text-slate-500'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 text-start">
            
            {/* معرفی کوتاه */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-caribbean-green animate-pulse"></div>
                <span className={`text-xl font-black tracking-wider ${darkMode ? 'text-anti-flash-white' : 'text-slate-900'}`}>
                  {t('logo')}<span className="text-caribbean-green">{t('logog')}</span>
                </span>
              </div>
              <p className="text-xs leading-relaxed opacity-80 max-w-sm">
                {t('footerAboutDesc')}
              </p>
            </div>

            {/* بخش لینک‌ها و ارتباطات - در موبایل کنار هم (grid-cols-2) */}
            <div className="md:col-span-7 grid grid-cols-2 gap-8">
              
              {/* لینک‌های سریع */}
              <div className="space-y-4">
                <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-anti-flash-white' : 'text-slate-800'}`}>
                  {t('quickLinksTitle')}
                </h4>
                <ul className="space-y-2.5 text-xs">
                  <li><a href="/" className="hover:text-caribbean-green transition-colors flex items-center gap-1.5"><span>▹</span> {t('home')}</a></li>
                  <li><a href="/?page=blog" className="hover:text-caribbean-green transition-colors flex items-center gap-1.5"><span>▹</span> {t('blog')}</a></li>
                  <li><a href="/#projects" className="hover:text-caribbean-green transition-colors flex items-center gap-1.5"><span>▹</span> {t('projects')}</a></li>
                  <li><a href="/?page=about" className="hover:text-caribbean-green transition-colors flex items-center gap-1.5"><span>▹</span> {t('about')}</a></li>
                </ul>
              </div>

              {/* راه‌های ارتباطی با آیکون‌ها */}
              <div className="space-y-4">
                <h4 className={`text-xs font-bold uppercase tracking-wider ${darkMode ? 'text-anti-flash-white' : 'text-slate-800'}`}>
                  {t('connectTitle')}
                </h4>
                <div className="flex flex-col gap-3 text-xs">
                  <a href="https://github.com/rezanoel" target="_blank" rel="noreferrer" className="hover:text-caribbean-green transition-colors flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
                    <span>GitHub</span>
                  </a>
                  <a href="https://linkedin.com/in/rezanoel" target="_blank" rel="noreferrer" className="hover:text-caribbean-green transition-colors flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://t.me/reza_noel" target="_blank" rel="noreferrer" className="hover:text-caribbean-green transition-colors flex items-center gap-2">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0011.944 0zm5.556 8.148l-1.92 9.043c-.14.64-.52.793-1.05.497l-2.93-2.158-1.41 1.36a.74.74 0 01-.6-.3l-.21-3.033 5.518-4.982c.24-.21-.054-.327-.37-.118l-6.82 4.293-2.94-.92c-.64-.2-.65-.64.133-.943l11.48-4.427c.532-.2.997.12.83.985z"/></svg>
                    <span>Telegram</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
          {/* ... (بقیه کدهای پایان فوتر) */}
        </div>
      </footer>
    </>
  );
}