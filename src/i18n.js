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
      heroTitleSpan: 'Fresh Ideas',
      btnStart: 'Start New Project',
      btnWorks: 'View Portfolio',
      whyUs: 'Why RezaNoel?',
      footer: '© 2026 RezaNoel. All rights reserved.',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      aboutSectionTitle: 'About ',
      aboutSectionTitleSpan: 'Me',
      downloadCV: 'Download CV',
      contactInfoTitle: 'Connect with Me',
      featuredProjectsTitle: 'Featured Projects',
      latestArticlesTitle: 'Recent Articles',
      bioParagraph: 'I am a Full-Stack Engineer driven by consistency, smart strategies, and curiosity. Beyond my professional background in Django and React, my 5-year journey in content creation—and the past 2 years of consistent dedication to my YouTube channel and podcast—has shaped my unique perspective on software development. My experience teaching programming in universities and specialized technical institutions across Iran has sharpened my ability to distill complex requirements into simple, elegant, and actionable architecture. I thrive on adaptability; I view the ability to embrace change as the ultimate sign of critical thinking. I am deeply hardworking, highly empathetic in team communication, and obsessed with finding the most strategic, `smart` path forward rather than just the most obvious one.',
      heroTitle: "Hi, I'm Reza",
      heroSubtitle: "Full-Stack Engineer, Content Creator & Educator",
      heroDesc: "Bridging the gap between complex software architecture and human-centric design. I build high-impact web solutions while documenting the journey on YouTube and exploring the intersection of psychology and tech.",
      heroCTA: "View My Projects",
      heroYoutubeCTA: "Watch on YouTube",
      latestProjects: "Projects",
      latestVideos: "YouTube Videos",
      viewAll: "View All",
      // ترجمه‌های بخش وبلاگ (انگلیسی)
      latestBlogsTitle: 'Latest ',
      latestBlogsTitleSpan: 'Articles',
      viewAll: 'View All',
      readPost: 'Read More →',
      blogArchiveTitle: 'Noel ',
      blogArchiveTitleSpan: 'Blog',
      blogArchiveDesc: 'The latest articles, tutorials, and tips from the world of programming and technology.',
      searchPlaceholder: 'Search articles...',
      sortByLabel: 'Sort by:',
      newest: 'Newest',
      oldest: 'Oldest',
      noResults: 'No articles found matching your search.',
      loadingPost: 'Loading article...',
      errorPost: 'Sorry, the requested article could not be found.',
      blogBadge: 'Article',
      feat1Title: 'AI-Driven Scalability',
      feat1Desc: 'Designing architectures that leverage AI-automation and modern stacks to handle enterprise-level traffic.',
      feat2Title: 'Architecture Over Code',
      feat2Desc: 'Engineering modular, future-proof systems where maintainability is the priority, not just functionality.',
      feat3Title: 'Adaptive Systems Design',
      feat3Desc: 'Building digital ecosystems that perform flawlessly across all devices, prioritizing UX efficiency.',      // 👈 ترجمه‌های جدید اختصاصی برای فوتر مدرن (انگلیسی)
      footerAboutDesc: 'Full-Stack Developer, Educator, and Podcast Host. Passionate about non-fiction, psychology, and building scalable software architectures.',      quickLinksTitle: 'Quick Links',
      connectTitle: 'Connect',
      allRightsReserved: 'All rights reserved.'
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
      heroTitle: "سلام، من رضا هستم",
      heroSubtitle: "مهندس فول‌استک، مدرس و تولیدکننده محتوا",
      heroDesc: "پیونددهنده معماری‌های پیچیده نرم‌افزاری با طراحی‌های انسان‌محور. راهکارهای وبِ تاثیرگذار می‌سازم و مسیرِ یادگیری‌ام را در یوتیوب و پادکست، در تلاقی تکنولوژی و روانشناسی، با شما به اشتراک می‌گذارم.",
      heroCTA: "مشاهده پروژه‌ها",
      heroYoutubeCTA: "کانال یوتیوب من",
      latestProjects: "پروژه‌ها",
      latestVideos: "ویدیوهای یوتیوب",
      viewAll: "مشاهده همه",
      btnStart: 'شروع پروژه جدید',
      btnWorks: 'مشاهده نمونه کارها',
      whyUs: 'چرا رضا نوئل؟',
      feat1Title: 'مقیاس‌پذیری هوشمند با AI',
      feat1Desc: 'طراحی معماری‌های وب با بهره‌گیری از هوش مصنوعی برای اتوماسیون فرایندها و مدیریت ترافیک‌های سنگین.',
      feat2Title: 'معماری فراتر از کد',
      feat2Desc: 'مهندسی سیستم‌های ماژولار و آینده‌نگرانه؛ جایی که "نگهداری‌پذیری" اولویت اصلی است، نه فقط کارکردنِ صرف.',
      feat3Title: 'طراحی سیستم‌های انطباق‌پذیر',
      feat3Desc: 'خلق اکوسیستم‌های دیجیتالی که فارغ از نوع دیوایس، بالاترین پرفورمنس و کارایی را برای کاربر نهایی تضمین می‌کنند.',      footer: '© ۲۰۲۶ رضا نوئل. تمامی حقوق محفوظ است.',
      github: 'گیت‌هاب',
      linkedin: 'لینکدین',
      telegram: 'تلگرام',
      aboutSectionTitle: 'درباره ',
      aboutSectionTitleSpan: 'من',
      downloadCV: 'دانلود رزومه (CV)',
      contactInfoTitle: 'راه‌های ارتباطی',
      featuredProjectsTitle: 'پروژه‌های شاخص',
      latestArticlesTitle: 'آخرین مقالات',
      bioParagraph: 'من یک مهندس فول‌استکِ متکی بر استمرار و ذکاوت هستم. در کنار توسعه حرفه‌ای در Django و React، سابقه ۵ سال فعالیت در حوزه محتوا و ۲ سال حضور مداوم در یوتیوب و پادکست، نگاه من را به دنیای نرم‌افزار متفاوت کرده است. تجربه تدریس برنامه‌نویسی در دانشگاه‌ها، هنرستان‌ها و موسسات معتبر ایران، به من آموخته که چطور مفاهیم پیچیده را به راهکارهای ساده و عاقلانه تبدیل کنم. من به قدرت پذیرش تغییر معتقدم؛ توانایی که آن را نشانه بارز تفکر نقادانه می‌دانم. در کار، سخت‌کوش و در ارتباطات انسانی، همدل هستم و همواره به دنبال روش‌های هوشمندانه‌تر برای حل مسائل هستم. هدف من ساختن سیستم‌هایی است که نه تنها از نظر فنی بی‌نقص باشند، بلکه ارزش‌های انسانی را نیز در بطن خود داشته باشند.',
      
      // ترجمه‌های بخش وبلاگ (فارسی)
      latestBlogsTitle: 'آخرین ',
      latestBlogsTitleSpan: 'نوشته‌ها',
      viewAll: 'مشاهده همه',
      readPost: 'مطالعه نوشته ←',
      blogArchiveTitle: 'وبلاگ ',
      blogArchiveTitleSpan: 'نوئل',
      blogArchiveDesc: 'آخرین مقالات، آموزش‌ها و ترفندهای دنیای برنامه‌نویسی و تکنولوژی.',
      searchPlaceholder: 'جستجو در میان مقالات...',
      sortByLabel: 'مرتب‌سازی:',
      newest: 'جدیدترین',
      oldest: 'قدیمی‌ترین',
      noResults: 'نتیجه‌ای برای جستجوی شما یافت نشد.',
      loadingPost: 'در حال بارگذاری مقاله...',
      errorPost: 'متاسفانه مقاله مورد نظر یافت نشد.',
      blogBadge: 'مقاله',
      // 👈 ترجمه‌های جدید اختصاصی برای فوتر مدرن (فارسی)
      footerAboutDesc: 'توسعه‌دهنده فول‌استک، مدرس دوره‌های برنامه‌نویسی و پادکستر. مشتاقِ یادگیری کتاب‌های غیرداستانی، تحلیل روانشناسی و خلق معماری‌های نرم‌افزاری پایدار.',
      quickLinksTitle: 'دسترسی سریع',
      connectTitle: 'ارتباط با من',
      allRightsReserved: 'تمامی حقوق محفوظ است.'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;