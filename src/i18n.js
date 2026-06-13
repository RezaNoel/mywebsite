import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      dir: 'ltr',
      logo: 'REZA',
      logog: 'NOEL',
      home: 'Home',
      projects: 'Projects',
      services: 'Services',
      about: 'About Me',
      blog: 'Blog',
      contact: 'Contact Me',
      badge: 'Next-Gen Web Dev & Design',
      heroTitle: 'Crafting Unique Digital Experiences with ',
      heroTitleSpan: 'Fresh Ideas',
      heroDesc: 'We help you transform your mental ideas into clean, fast, and optimized websites. Stand out with us.',
      btnStart: 'Start New Project',
      btnWorks: 'View Portfolio',
      whyUs: 'Why RezaNoel?',
      feat1Title: 'Blazing Fast',
      feat1Desc: 'Using the latest technologies like Vite and Tailwind v4 for the fastest possible load speed.',
      feat2Title: 'Modern & Custom Design',
      feat2Desc: 'Adhering to UI/UX principles and using exclusive, eye-catching color palettes tailored to your business.',
      feat3Title: 'Fully Responsive',
      feat3Desc: 'Flawless display and optimized performance across all screens including mobile, tablet, and desktop.',
      footer: '© 2026 RezaNoel. All rights reserved.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      telegram: 'Telegram'
    }
  },
  fa: {
    translation: {
      dir: 'rtl',
      logo: 'رضا',
      logog: ' نوئل',
      home: 'خانه',
      projects: 'پروژه‌ها',
      services: 'خدمات',
      blog: 'بلاگ',
      about: 'درباره من',
      contact: 'تماس با من',
      badge: 'نسل جدید توسعه وب و دیزاین',
      heroTitle: 'خلق تجربه‌های دیجیتال منحصر به فرد با ',
      heroTitleSpan: 'ایده‌های نو',
      heroDesc: 'ما به شما کمک می‌کنیم تا ایده‌های ذهنی خود را به کدهای تمیز، سریع و وب‌سایت‌های بهینه‌سازی شده تبدیل کنید. با ما متمایز دیده شوید.',
      btnStart: 'شروع پروژه جدید',
      btnWorks: 'مشاهده نمونه کارها',
      whyUs: 'چرا رضا نوئل؟',
      feat1Title: 'سرعت فوق‌العاده',
      feat1Desc: 'استفاده از آخرین تکنولوژی‌ها مانند Vite و Tailwind v4 برای رسیدن به بالاترین سرعت لود ممکن.',
      feat2Title: 'طراحی مدرن و اختصاصی',
      feat2Desc: 'پایبندی به اصول UI/UX و استفاده از پالت‌های رنگی اختصاصی و چشم‌نواز متناسب با کسب‌وکار شما.',
      feat3Title: 'کاملاً ریسپانسیو',
      feat3Desc: 'نمایش بی‌نقص و بهینه‌سازی شده در تمام صفحه‌های نمایش از جمله موبایل، تبلت و دسکتاپ.',
      footer: '© ۲۰۲۶ رضا نوئل. تمامی حقوق محفوظ است.',
      github: 'گیت‌هاب',
      linkedin: 'لینکدین',
      telegram: 'تلگرام'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en', // 👈 انگلیسی زبان دیفالت
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;