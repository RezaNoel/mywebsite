import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MapPin, GraduationCap } from 'lucide-react';
import { blogList } from '../data/blogList';
import myAvatar from '../assets/image.png';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  { id: 1, title: 'Obsidian Nolingo Plugin', slug: 'nolingo' },
  { id: 2, title: 'Minecraft SMP Real Estate Economy', slug: 'minecraft-smp' }
];

const languages = [
  { name: 'Persian', level: 100 },
  { name: 'English', level: 70 },
  { name: 'German', level: 60 },
  { name: 'Armenian', level: 20 },
];
const technicalSkills = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Django', 'PostgreSQL', 'C#', '.NET', 'Lua'
];

const creativeSkills = [
  'Adobe Photoshop', 'Adobe Premiere Pro', 'DaVinci Resolve', 'Adobe Audition', 'Blender 3D'
];

const softSkills = [
  'Critical Thinking', 'Agile Collaboration', 'Time Management', 'Continuous Learning', 'User Experience Mindset', 'Strategic Problem Solving'
];

export default function About({ darkMode }) {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);
  const progressRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. انیمیشن ورود تمامی بخش‌ها
      gsap.from(".animate-reveal", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      });

      // 2. انیمیشن نوار پیشرفت زبان‌ها
      progressRefs.current.forEach((el) => {
        gsap.fromTo(el, { width: '0%' }, {
          width: el.dataset.level + '%',
          duration: 2.5,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: { trigger: el, start: 'top 90%' }
        });
      });

      // 3. افکت شناور برای کارت‌ها
      gsap.utils.toArray(".hover-card").forEach(card => {
        card.addEventListener("mouseenter", () => gsap.to(card, { y: -10, duration: 0.3, ease: "power2.out" }));
        card.addEventListener("mouseleave", () => gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" }));
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentLng = i18n.language.split('-')[0];
  const isRtl = currentLng === 'fa';
  const recentBlogs = blogList.slice(0, 3);

  return (
    <section ref={sectionRef} id="about" dir={isRtl ? 'rtl' : 'ltr'} className={`py-20 px-6 min-h-screen transition-colors duration-300 ${darkMode ? 'bg-rich-black text-anti-flash-white' : 'bg-slate-50 text-slate-800'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center md:text-start animate-reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-4">{t('aboutSectionTitle')}<span className="text-caribbean-green"> {t('aboutSectionTitleSpan')}</span></h2>
          <div className="w-20 h-1.5 bg-caribbean-green rounded-full mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className={`lg:col-span-4 p-6 rounded-2xl border hover-card animate-reveal ${darkMode ? 'bg-pine/10 border-forest/30' : 'bg-white border-slate-200 shadow-sm'}`}>
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-caribbean-green mx-auto mb-6">
              <img src={myAvatar} alt="Reza" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-center text-xl font-black mb-1">{t('logo')}</h3>
            <p className="text-center text-xs opacity-60 mb-6">Full-Stack Developer</p>

            <a href="/reza-cv.pdf" download className="w-full py-3 mb-6 bg-bangladesh-green hover:bg-frog text-white rounded-xl text-sm font-bold shadow-md transition-all flex items-center justify-center gap-2">
              {t('downloadCV')}
            </a>

            <div className="space-y-4 text-xs opacity-80 border-t py-6 border-slate-200/20">
              <a href="mailto:rezatavangar112@gmail.com" className="flex items-center gap-3 hover:text-caribbean-green transition-colors"><Mail size={16} /> rezatavangar112@gmail.com</a>
              <div className="flex items-center gap-3"><MapPin size={16} className="text-caribbean-green" /> Yerevan, Armenia</div>
              <div className="flex items-center gap-3"><GraduationCap size={16} className="text-caribbean-green" /> B.Sc. IT - Shamsipour Tech</div>
            </div>

            <div className="flex justify-center gap-4 pt-4 border-t border-slate-200/20">
              <a href="https://github.com/rezanoel" target="_blank" rel="noreferrer" className="p-2 hover:text-caribbean-green transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg></a>
              <a href="https://linkedin.com/in/rezanoel" target="_blank" rel="noreferrer" className="p-2 hover:text-caribbean-green transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a href="https://t.me/reza_noel" target="_blank" rel="noreferrer" className="p-2 hover:text-caribbean-green transition-colors"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0011.944 0zm5.556 8.148l-1.92 9.043c-.14.64-.52.793-1.05.497l-2.93-2.158-1.41 1.36a.74.74 0 01-.6-.3l-.21-3.033 5.518-4.982c.24-.21-.054-.327-.37-.118l-6.82 4.293-2.94-.92c-.64-.2-.65-.64.133-.943l11.48-4.427c.532-.2.997.12.83.985z"/></svg></a>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-10">
            <p className={`text-sm leading-relaxed text-justify animate-reveal ${darkMode ? 'text-stone' : 'text-slate-600'}`}>{t('bioParagraph')}</p>

            {/* بخش زبان‌ها - گرافیک پیشرفته */}
<div className="animate-reveal space-y-6">
  <h3 className="text-lg font-black flex items-center gap-2">
    <span className="w-1 h-6 bg-caribbean-green rounded-full"></span> {t('Languages')}
  </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {languages.map((lang, i) => (
      <div key={lang.name} className="group">
        <div className="flex justify-between text-xs font-bold mb-2">
          <span className="group-hover:text-caribbean-green transition-colors">{lang.name}</span>
          <span>{lang.level}%</span>
        </div>
        <div className={`h-2.5 rounded-full overflow-hidden relative ${darkMode ? 'bg-pine/20' : 'bg-slate-200'} shadow-inner`}>
          <div 
            ref={el => progressRefs.current[i] = el} 
            data-level={lang.level} 
            className="h-full bg-gradient-to-r from-caribbean-green to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
          />
        </div>
      </div>
    ))}
  </div>
</div>

{/* اسکیل‌ها - طراحی کارت شیشه‌ای */}
{/* بخش مهارت‌های سه‌گانه */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-reveal">
  
  {/* فنی */}
  <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
    <h3 className="text-lg font-black mb-4 flex items-center gap-2 text-caribbean-green">▹ Technical</h3>
    <div className="flex flex-wrap gap-2">
      {technicalSkills.map(s => <span key={s} className="px-3 py-1 bg-caribbean-green/10 text-caribbean-green text-[10px] font-bold rounded-lg">{s}</span>)}
    </div>
  </div>

  {/* خلاقانه (جدید) */}
  <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
    <h3 className="text-lg font-black mb-4 flex items-center gap-2 text-amber-500">▹ Creative Studio</h3>
    <div className="flex flex-wrap gap-2">
      {creativeSkills.map(s => <span key={s} className="px-3 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded-lg">{s}</span>)}
    </div>
  </div>

  {/* نرم */}
  <div className="p-6 rounded-2xl border border-white/10 backdrop-blur-md bg-white/5 shadow-xl">
    <h3 className="text-lg font-black mb-4 flex items-center gap-2 text-sky-500">▹ Soft Skills</h3>
    <div className="flex flex-wrap gap-2">
      {softSkills.map(s => <span key={s} className="px-3 py-1 bg-sky-500/10 text-sky-500 text-[10px] font-bold rounded-lg">{s}</span>)}
    </div>
  </div>

</div>

            {/* <div className="animate-reveal">
              <h3 className="text-lg font-black mb-4 flex items-center gap-2">▹ {t('featuredProjectsTitle')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredProjects.map(project => (
                  <a key={project.id} href="/#projects" className={`hover-card p-4 rounded-xl border text-sm font-bold transition-all hover:border-caribbean-green flex justify-between items-center ${darkMode ? 'bg-pine/5 border-forest/30' : 'bg-white border-slate-200'}`}>
                    <span>{project.title}</span><span className="text-caribbean-green rtl:rotate-180">→</span>
                  </a>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}