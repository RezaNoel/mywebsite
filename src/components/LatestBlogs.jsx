import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { BookOpen, Calendar, Clock, Tag } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// وارد کردن فایل اصلی بلاگ‌ها
import { blogList } from '../data/blogList';

gsap.registerPlugin(ScrollTrigger);

export default function LatestBlogs({ darkMode }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.split('-')[0] === 'fa';
  
  const sectionRef = useRef(null);
  const scrollerRef = useRef(null);

  // ۵ مقاله اول از فایل وارد شده
  const recentPosts = blogList.slice(0, 5);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // ۱. انیمیشن ورود پله‌پله کارت‌ها هنگام اسکرول صفحه
      gsap.fromTo(scrollerRef.current.querySelectorAll('.blog-card'),
        { opacity: 0, y: 30, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          stagger: 0.15, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: scrollerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          // ۲. انیمیشن حرکت مداوم و نرم (شناوری) پس از لود کامل کارت‌ها
          onComplete: () => {
            gsap.to(scrollerRef.current.querySelectorAll('.blog-card'), {
              y: '+=6',
              duration: 2.5,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              stagger: { each: 0.2, from: 'random' } // اعمال موج حرکتی تصادفی بین کارت‌ها
            });
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🔥 انیمیشن هوشمند زمان هاور ماوس (تغییر مقیاس، زاویه ظریف و سایه)
  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.0,
      y: -4,
      rotateX: 2,
      rotateY: isRtl ? -2 : 2,
      borderColor: 'rgba(16, 185, 129, 0.4)', // رنگ کارائیب گرین اختصاصی شما
      boxShadow: darkMode ? '0 15px 30px -10px rgba(0,0,0,0.4)' : '0 15px 30px -10px rgba(148, 163, 184, 0.15)',
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto' // مهار تداخل لوپ شناور با اکشن هاور کاربر
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 0.98,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      borderColor: darkMode ? 'rgba(34, 76, 56, 0.2)' : 'rgba(226, 232, 240, 1)',
      boxShadow: '0 0px 0px 0px rgba(0,0,0,0)',
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  // تابع کمکی برای محاسبه پویا زمان مطالعه بر اساس کلمات فرضی
  const calculateReadTime = (text) => {
    if (!text) return isRtl ? '۳ دقیقه' : '3 min';
    const words = text.split(' ').length;
    const time = Math.max(3, Math.ceil(words / 15));
    return isRtl ? `${time} دقیقه` : `${time} min`;
  };

  return (
    <section 
      ref={sectionRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`py-16 px-6 border-t border-dashed transition-colors duration-300 overflow-hidden ${
        darkMode ? 'bg-rich-black/30 border-forest/30 text-anti-flash-white' : 'bg-white border-slate-200 text-slate-800'
      }`}
      style={{ perspective: '1200px' }} // ایجاد فضا برای Rotate سه بعدی کارت‌ها
    >
      <div className="max-w-6xl mx-auto">
        
        {/* 📑 هدر بخش وبلاگ */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <h2 className="text-xl md:text-2xl font-black flex items-center gap-2">
              <BookOpen size={22} className="text-caribbean-green animate-pulse hidden sm:block" />
              {t('latestBlogsTitle', 'آخرین ')}
              <span className="text-caribbean-green">{t('latestBlogsTitleSpan', 'مقالات')}</span>
            </h2>
          </div>

          <a 
            href="/?page=blog" 
            className={`text-xs font-mono text-caribbean-green hover:underline flex items-center gap-1`}
          >
            <span>{t('viewAll')}</span> {isRtl ? '←' : '→'}
          </a>
        </div>

        {/* 🔄 اسکرولر افقی عریض */}
        <div 
          ref={scrollerRef}
          className="flex gap-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {recentPosts.map((post, index) => (
            <a 
              href={`/?page=${post.slug}`}
              key={index}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={`blog-card snap-start shrink-0 w-[310px] sm:w-[380px] p-6 rounded-2xl border flex flex-col justify-between transition-all group will-change-transform ${
                darkMode 
                  ? 'bg-pine/5 border-pine/20 shadow-md' 
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div>
                {/* بخش متا: تگ دریافتی مستقیم از فایل دیتا + زمان مطالعه */}
                <div className="flex justify-between items-center mb-4 text-[10px] font-mono opacity-60">
                  {post.category && (
                    <span className="flex items-center gap-1 bg-caribbean-green/10 text-caribbean-green px-2.5 py-0.5 rounded-full font-bold">
                      <Tag size={10} />
                      {post.category}
                    </span>
                  )}
                  <span className="flex items-center gap-1 marginRight-auto">
                    <Clock size={10} />
                    {calculateReadTime(post.desc)}
                  </span>
                </div>
                
                {/* عنوان مقاله */}
                <h3 className="font-black text-sm md:text-base group-hover:text-caribbean-green transition-colors duration-300 leading-snug mb-3 text-start line-clamp-2">
                  {post.title}
                </h3>
                
                {/* متن توضیحات زیر تایتل */}
                <p className={`text-xs leading-relaxed mb-6 text-start line-clamp-3 opacity-80 ${darkMode ? 'text-stone' : 'text-slate-600'}`}>
                  {post.desc}
                </p>
              </div>
              
              {/* بخش پایینی: تاریخ و فلش پویای هاور */}
              <div className={`pt-4 border-t flex items-center justify-between text-[10px] font-mono opacity-50 ${
                darkMode ? 'border-pine/10' : 'border-slate-200/60'
              }`}>
                <span className="flex items-center gap-1">
                  <Calendar size={11} />
                  {post.date}
                </span>
                <span className={`text-caribbean-green font-bold transition-transform duration-300 ${
                  isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'
                }`}>
                  {isRtl ? '←' : '→'}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}