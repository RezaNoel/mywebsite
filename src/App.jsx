import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Header from './components/Header';
import Hero from './components/Hero';
import LatestContent from './components/LatestContent'; // 👈 ۱. وارد کردن کامپوننت جدید ویدیوها و پروژه‌ها
import LatestBlogs from './components/LatestBlogs';
import FeaturesAndFooter from './components/FeaturesAndFooter';
import BlogArchive from './components/BlogArchive';
import BlogPost from './components/BlogPost';
import About from './components/About';

gsap.registerPlugin(useGSAP);

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);
  const container = useRef();

  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get('page');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  useGSAP(() => {
    gsap.from(".animate-header", { y: -50, opacity: 0, duration: 1, ease: "power3.out" });
    gsap.from(".animate-item", { y: 40, opacity: 0, duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 0.3 });
    gsap.from(".animate-card", { scale: 0.9, opacity: 0, duration: 1, stagger: 0.15, ease: "back.out(1.7)", delay: 0.8 });
  }, { scope: container, dependencies: [page] });

  return (
    <div 
      ref={container} 
      dir={t('dir')} 
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? 'bg-rich-black text-anti-flash-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} changeLanguage={changeLanguage} />

      <main className="flex-grow">
        {/* 🏠 مدیریت المان‌های صفحه اصلی */}
        {!page && (
          <>
            <Hero darkMode={darkMode} />
            {/* 👈 ۲. اضافه شدن بخش آخرین پروژه‌ها و یوتیوب در صفحه اصلی */}
            <LatestContent darkMode={darkMode} /> 
            <LatestBlogs darkMode={darkMode} />
          </>
        )}
        
        {/* مدیریت صفحات فرعی بر اساس کوئری پارامتر */}
        {page === 'blog' && <BlogArchive darkMode={darkMode} />}
        
        {page === 'about' && <About darkMode={darkMode} />}
        
        {page && page !== 'blog' && page !== 'about' && <BlogPost darkMode={darkMode} />}
      </main>

      <FeaturesAndFooter darkMode={darkMode} />
    </div>
  );
}

export default App;