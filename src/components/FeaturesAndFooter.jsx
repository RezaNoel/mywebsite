import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FeaturesAndFooter({ darkMode }) {
  const { t } = useTranslation();

  return (
    <>
      {/* بخش ویژگی‌ها */}
      <section className={`py-20 border-t transition-colors ${
        darkMode ? 'bg-dark-green border-pine' : 'bg-slate-100 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t('whyUs')}</h2>
            <div className="w-16 h-1 bg-caribbean-green mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`animate-card border p-8 rounded-2xl transition-all group ${
              darkMode ? 'bg-pine/50 border-forest/50 hover:border-mint' : 'bg-white border-slate-200 hover:border-emerald-400 shadow-sm'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-caribbean-green mb-6 text-xl font-bold">⚡</div>
              <h3 className="text-xl font-bold mb-3">{t('feat1Title')}</h3>
              <p className={darkMode ? 'text-stone' : 'text-slate-600'}>{t('feat1Desc')}</p>
            </div>

            <div className={`animate-card border p-8 rounded-2xl transition-all group ${
              darkMode ? 'bg-pine/50 border-forest/50 hover:border-mint' : 'bg-white border-slate-200 hover:border-emerald-400 shadow-sm'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-caribbean-green mb-6 text-xl font-bold">🎨</div>
              <h3 className="text-xl font-bold mb-3">{t('feat2Title')}</h3>
              <p className={darkMode ? 'text-stone' : 'text-slate-600'}>{t('feat2Desc')}</p>
            </div>

            <div className={`animate-card border p-8 rounded-2xl transition-all group ${
              darkMode ? 'bg-pine/50 border-forest/50 hover:border-mint' : 'bg-white border-slate-200 hover:border-emerald-400 shadow-sm'
            }`}>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-caribbean-green mb-6 text-xl font-bold">📱</div>
              <h3 className="text-xl font-bold mb-3">{t('feat3Title')}</h3>
              <p className={darkMode ? 'text-stone' : 'text-slate-600'}>{t('feat3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* فوتر */}
      <footer className={`mt-auto border-t py-8 px-6 text-center text-sm transition-colors ${
        darkMode ? 'bg-rich-black border-pine text-stone' : 'bg-white border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>{t('footer')}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-caribbean-green transition-colors">{t('github')}</a>
            <a href="#" className="hover:text-caribbean-green transition-colors">{t('linkedin')}</a>
            <a href="#" className="hover:text-caribbean-green transition-colors">{t('telegram')}</a>
          </div>
        </div>
      </footer>
    </>
  );
}