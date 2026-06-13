import React, { useEffect, useState } from 'react';
import { blogList } from '../data/blogList';

export default function BlogPost({ darkMode }) {
  const queryParams = new URLSearchParams(window.location.search);
  const slug = queryParams.get('page');

  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);

  const postInfo = blogList.find(post => post.slug === slug);

  useEffect(() => {
    if (!slug) return;

    fetch(`/blogs/${slug}.html`)
      .then(response => {
        if (!response.ok) throw new Error('مقاله پیدا نشد');
        return response.text();
      })
      .then(data => {
        /* 👈 جادوی استخراج متن اصلی بدنه */
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        
        // فقط محتوای داخل تگ body را بردار
        const bodyContent = doc.body.innerHTML; 
        
        setHtmlContent(bodyContent);
        setLoading(false);
      })
      .catch(err => {
        setHtmlContent('<p class="text-red-500 text-center">متاسفانه مقاله مورد نظر یافت نشد.</p>');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="text-center py-20 text-caribbean-green animate-pulse">در حال بارگذاری مقاله...</div>;
  }

  return (
    <div className={`min-h-screen py-16 px-6 ${darkMode ? 'bg-rich-black text-anti-flash-white' : 'bg-slate-50 text-slate-800'}`}>
      <div className="max-w-3xl mx-auto">
        
        {/* هدر مقاله */}
        <div className="border-b border-dashed border-slate-300 dark:border-forest pb-6 mb-8 text-left" dir="ltr">
          <span className="text-xs text-mountain-meadow font-mono">{postInfo?.date}</span>
          <h1 className="text-3xl md:text-5xl font-black mt-2 mb-4">{postInfo?.title}</h1>
          <p className="text-slate-500 dark:text-stone text-sm">{postInfo?.desc}</p>
        </div>

        {/* تزریق تمیز محتوای استخراج شده */}
        <div 
          className={`blog-content leading-relaxed text-lg text-left ${
            darkMode ? 'prose-dark text-anti-flash-white' : 'prose text-slate-800'
          }`}
          dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />

      </div>
    </div>
  );
}