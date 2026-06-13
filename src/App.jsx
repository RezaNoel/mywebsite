import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// ایمپورت کردن بخش‌های مختلف سایت
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturesAndFooter from './components/FeaturesAndFooter';
import BlogArchive from './components/BlogArchive';
import BlogPost from './components/BlogPost';

gsap.registerPlugin(useGSAP);

function App() {
  const { t, i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);
  const container = useRef();

  // خواندن پارامتر page از آدرس‌بار مرورگر (مثلاً: /?page=blog یا /?page=generic-reminders-guide)
  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get('page');

  // مدیریت هوشمند کلاس تم لایت/دارک روی تگ html
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  // انیمیشن‌های متمرکز GSAP (با تغییر صفحات دوباره به زیبایی اجرا می‌شوند)
  useGSAP(() => {
    // انیمیشن هدر
    gsap.from(".animate-header", { 
      y: -50, 
      opacity: 0, 
      duration: 1, 
      ease: "power3.out" 
    });
    
    // انیمیشن متن‌ها و عکس بخش هیرو یا کارت‌های وبلاگ
    gsap.from(".animate-item", { 
      y: 40, 
      opacity: 0, 
      duration: 1.2, 
      stagger: 0.2, 
      ease: "power4.out", 
      delay: 0.3 
    });
    
    // انیمیشن کارت‌های بخش ویژگی‌ها
    gsap.from(".animate-card", { 
      scale: 0.9, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.15, 
      ease: "back.out(1.7)", 
      delay: 0.8 
    });
  }, { scope: container, dependencies: [page] }); // وابستگی به page باعث می‌شود با تغییر صفحه انیمیشن‌ها مجدد فعال شوند

  return (
    <div 
      ref={container} 
      dir={t('dir')} 
      className={`min-h-screen flex flex-col transition-colors duration-300 ${
        darkMode ? 'bg-rich-black text-anti-flash-white' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* هدر مینی‌مال سایت (شامل کپسول زبان و تم) */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} changeLanguage={changeLanguage} />

      {/* 👈 مدیریت هوشمند و داینامیک نمایش صفحات بر اساس آدرس‌بار (بدون نیاز به پکیج‌های سنگین روتینگ) */}
      <main className="flex-grow">
        {/* ۱. اگر هیچ پارامتری نبود، صفحه اصلی و هیرو سکشن را نشان بده */}
        {!page && <Hero darkMode={darkMode} />}
        
        {/* ۲. اگر پارامتر page برابر با blog بود، آرشیو و لیست وبلاگ‌ها را نشان بده */}
        {page === 'blog' && <BlogArchive darkMode={darkMode} />}
        
        {/* ۳. اگر پارامتر وجود داشت ولی کلمه blog نبود، یعنی اسم یک مقاله است؛ پس متن خود مقاله را واکشی کن */}
        {page && page !== 'blog' && <BlogPost darkMode={darkMode} />}
      </main>

      {/* بخش ویژگی‌ها و فوتر سایت */}
      <FeaturesAndFooter darkMode={darkMode} />
    </div>
  );
}

export default App;