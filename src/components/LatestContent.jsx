import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sampleProjects = [
  { id: 1, title: 'RAG Noel', desc: 'Offline RAG pipeline with FAISS, SentenceTransformers, and LLaMA (Ollama) for internal documents.', tech: ['Python', 'LLaMA 3'], link: 'https://github.com/RezaNoel/ragnoel' },
  // { id: 2, title: 'Mamanfateme', desc: 'A website selling homemade food as an app first using DRF and mysql, the possibility of adding and removing the number of selected food, the possibility of rating the food, the possibility of registering a comment under the food, the possibility of searching for food using Jquery, calculating and displaying the total number of orders and The number of each type and the final amount and discount and tax in the invoice before payment, the possibility of registration with mobile number.', tech: ['React', 'Django', 'DRF'], link: 'https://github.com/RezaNoel/Mamanfateme' },
  { id: 3, title: 'Boroobia', desc: 'A website for buying plane tickets and booking hotels with a special database for registering hotel managers and defining each hotel room daily and pricing in different ranges for each room, the possibility of defining a discount code, registering with a mobile number, searching and various filters. including the lowest and highest price and the number of hotel stars, the possibility of placing one or more hotels in the suggested list and displaying them in embedded places, using DRF and Mysq', tech: ['Django', 'HTML','CSS','JavaScript'], link: 'https://github.com/RezaNoel/brobia' },
];

const sampleVideos = [
  // { id: 1, title: 'سیستم شخصی من برای یادگیری زبان با Obsidian (کاملا عملی)', duration: '43:58', link: 'https://youtu.be/LoH702Nxxs8', views: '511' },
  { id: 2, title: 'بهتری سیستم نوت‌برداری برای دانشجوها با Obsidian | آموزش کامل', duration: '26:01', link: 'https://youtu.be/SWbeaGgxVq8', views: '864' },
  { id: 3, title: 'چطور ذهنمون رو مثل کامپیوتر دسته‌بندی کنیم؟ (آموزش کاربردی Obsidian)', duration: '22:22', link: 'https://youtu.be/UQN63sucxA4', views: '1302' },
  // { id: 4, title: 'چطور تو یک ماه آلمانی یاد گرفتم؟', duration: '21:44', link: 'https://youtu.be/HUREoS5TaOs', views: '332' },
  { id: 5, title: 'یادگیری بدون فراموشی با یک پلاگین ساده (آموزش کاربردی Obsidian)', duration: '14:08', link: 'https://youtu.be/-QUc57R0nOE', views: '539' },
  // { id: 6, title: 'آموزش کامل Markdown به زبان ساده در 28 دقیقه', duration: '28:11', link: 'https://youtu.be/HeO3sTNuIq8', views: '220' },
];

export default function LatestContent({ darkMode }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language.split('-')[0] === 'fa';
  
  const sectionRef = useRef(null);
  const projectsColumnRef = useRef(null);
  const videosColumnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      // ۱. انیمیشن ورود ستون پروژه‌ها
      gsap.fromTo(projectsColumnRef.current, 
        { opacity: 0, x: isRtl ? 40 : -40, scale: 0.98 },
        { 
          opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: projectsColumnRef.current, start: 'top 85%' }
        }
      );

      // ۲. انیمیشن ورود پله‌پله کارت‌های پروژه + فعال شدن انیمیشن شناور بعد از اتمام ورود
      gsap.fromTo(projectsColumnRef.current.querySelectorAll('.project-card'),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: projectsColumnRef.current, start: 'top 80%' },
          onComplete: () => {
            // انیمیشن حرکت مداوم و نرم (شناوری) پس از لود کامل
            gsap.to(projectsColumnRef.current.querySelectorAll('.project-card'), {
              y: '+=6',
              duration: 2.5,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              stagger: { each: 0.2, from: 'random' }
            });
          }
        }
      );

      // ۳. انیمیشن ورود ستون ویدیوها
      gsap.fromTo(videosColumnRef.current, 
        { opacity: 0, x: isRtl ? -40 : 40, scale: 0.98 },
        { 
          opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: videosColumnRef.current, start: 'top 85%' }
        }
      );

      // ۴. انیمیشن ورود پله‌پله کارت‌های ویدیو + فعال شدن انیمیشن شناور بعد از اتمام ورود
      gsap.fromTo(videosColumnRef.current.querySelectorAll('.video-card'),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out',
          scrollTrigger: { trigger: videosColumnRef.current, start: 'top 80%' },
          onComplete: () => {
            // انیمیشن حرکت مداوم و نرم (شناوری) پس از لود کامل
            gsap.to(videosColumnRef.current.querySelectorAll('.video-card'), {
              y: '+=6',
              duration: 2.8,
              ease: 'sine.inOut',
              repeat: -1,
              yoyo: true,
              stagger: { each: 0.2, from: 'random' }
            });
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, [isRtl]);

  // 🔥 انیمیشن هوشمند زمان هاور ماوس با GSAP (تغییر مقیاس، زاویه ظریف و سایه)
  const handleMouseEnter = (e, colorClass) => {
    const card = e.currentTarget;
    const isProject = colorClass === 'project';
    
    gsap.to(card, {
      scale: 1.02,
      x: isRtl ? -4 : 4,
      rotateY: isRtl ? -2 : 2,
      borderColor: isProject ? 'rgba(16, 185, 129, 0.4)' : 'rgba(239, 68, 68, 0.4)',
      boxShadow: darkMode ? '0 10px 25px -5px rgba(0,0,0,0.3)' : '0 10px 25px -5px rgba(0,0,0,0.05)',
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto' // جلوگیری از تداخل انیمیشن لوپ با هاور
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      x: 0,
      rotateY: 0,
      borderColor: darkMode ? 'rgba(34, 76, 56, 0.2)' : 'rgba(226, 232, 240, 1)',
      boxShadow: '0 0px 0px 0px rgba(0,0,0,0)',
      duration: 0.4,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <section 
      ref={sectionRef}
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`py-20 px-6 border-t transition-colors duration-300 overflow-hidden ${
        darkMode ? 'bg-rich-black border-pine/20' : 'bg-white border-slate-100'
      }`}
      style={{ perspective: '1000px' }} // فعال کردن عمق ۳ بعدی برای چرخش ظریف کارت‌ها
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* 💻 بخش آخرین پروژه‌ها */}
        <div ref={projectsColumnRef} className="space-y-6 text-start">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-black flex items-center gap-2">
              <Zap size={20} className="text-blue-500" fill="currentColor" /> 
              {t('latestBlogsTitle', 'آخرین ')}
              <span className="text-blue-500">{t('latestProjects')}</span>
            </h2>
            <a href="#projects" className="text-xs font-mono text-blue-500 hover:underline">
              {t('viewAll')} →
            </a>
          </div>

          <div className="space-y-4">
            {sampleProjects.map(project => (
              <div 
                key={project.id}
                onMouseEnter={(e) => handleMouseEnter(e, 'project')}
                onMouseLeave={handleMouseLeave}
                className={`project-card p-5 rounded-2xl border will-change-transform ${
                  darkMode ? 'bg-pine/5 border-pine/20' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h3 className="font-bold text-sm mb-1">{project.title}</h3>
                <p className={`text-xs mb-3 opacity-80 ${darkMode ? 'text-stone' : 'text-slate-600'}`}>{project.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-500/10 opacity-70">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎬 بخش آخرین ویدیوهای یوتیوب */}
        <div ref={videosColumnRef} className="space-y-6 text-start">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-black flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              {t('latestBlogsTitle', 'آخرین ')}
              <span className="text-red-500">{t('latestVideos')}</span>
            </h2>
            <a href="https://youtube.com/@chibodeh" target="_blank" rel="noreferrer" className="text-xs font-mono text-red-500 hover:underline">
              {t('viewAll')} →
            </a>
          </div>

          <div className="space-y-4">
            {sampleVideos.map(video => (
              <a 
                href={video.link}
                target="_blank"
                rel="noreferrer"
                key={video.id}
                onMouseEnter={(e) => handleMouseEnter(e, 'video')}
                onMouseLeave={handleMouseLeave}
                className={`video-card p-4 rounded-2xl border flex items-center justify-between group will-change-transform ${
                  darkMode ? 'bg-pine/5 border-pine/20' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0 group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xs md:text-sm group-hover:text-caribbean-green transition-colors duration-300 leading-snug">
                      {video.title}
                    </h3>
                    <span className="text-[10px] opacity-50 font-mono mt-1 block">
                      {video.views} views
                    </span>
                  </div>
                </div>
                
                <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 text-slate-300 shrink-0">
                  {video.duration}
                </span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}