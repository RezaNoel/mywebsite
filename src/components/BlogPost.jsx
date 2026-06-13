import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { marked } from 'marked';
import { blogList } from '../data/blogList';

export default function BlogPost({ darkMode }) {
  const { t, i18n } = useTranslation();
  
  // گرفتن زبان فعال فعلی وب‌سایت (fa یا en)
  const currentLng = i18n.language.split('-')[0];
  const isRtl = currentLng === 'fa';

  const queryParams = new URLSearchParams(window.location.search);
  const slug = queryParams.get('page');

  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);

  // پیدا کردن اطلاعات مقاله از لیست دیتا
  const postInfo = blogList.find(post => post.slug === slug);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    // فراخوانی فایل مارک‌داون از پوشه public/blogs/
    fetch(`/blogs/${slug}.md`)
      .then(response => {
        if (!response.ok) throw new Error('Article not found');
        return response.text();
      })
      .then(markdownText => {
        // تبدیل متن مارک‌داون به HTML با استفاده از رندررِ marked
        const parsedHtml = marked.parse(markdownText);
        setHtmlContent(parsedHtml);
        setLoading(false);
      })
      .catch(err => {
        setHtmlContent(`<p class="text-red-500 text-center font-bold">${t('errorPost')}</p>`);
        setLoading(false);
      });
  }, [slug, t]);

  if (loading) {
    return (
      <div className="text-center py-40 text-caribbean-green animate-pulse font-bold">
        {t('loadingPost')}
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-16 px-6 transition-colors duration-300 ${
      darkMode ? 'bg-rich-black text-anti-flash-white' : 'bg-slate-50 text-slate-800'
    }`}>
      {/* 🌐 تغییر جهت کل باکس مقاله (راست‌چین/چپ‌چین) متناسب با زبان فعلی سایت */}
      <div className="max-w-3xl mx-auto" dir={isRtl ? 'rtl' : 'ltr'}>
        
        {/* هدر مقاله */}
        <div className={`border-b border-dashed pb-6 mb-8 ${
          darkMode ? 'border-forest/40' : 'border-slate-300'
        } ${isRtl ? 'text-start' : 'text-start'}`}> {/* استفاده از text-start تراز را با جهتِ دایرکشن هماهنگ می‌کند */}
          
          <div className="flex items-center gap-2 text-xs font-mono text-mountain-meadow mb-2">
            <span className="px-2 py-0.5 rounded bg-mountain-meadow/10 font-sans">
              {t('blogBadge')}
            </span>
            <span>•</span>
            <span>{postInfo?.date}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black mt-2 mb-4 leading-tight">
            {postInfo?.title}
          </h1>
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-stone' : 'text-slate-500'}`}>
            {postInfo?.desc}
          </p>
        </div>

        {/* تزریق و استایل‌دهی تگ‌های مارک‌داون تبدیل شده */}
        <div 
          className={`blog-content markdown-body leading-relaxed text-base md:text-lg text-justify space-y-6 ${
            darkMode ? 'prose-dark' : 'prose'
          }`}
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />

      </div>
    </div>
  );
}