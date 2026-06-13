import React, { useState, useMemo } from 'react';
import { blogList } from '../data/blogList';

export default function BlogArchive({ darkMode }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // newest | oldest

  // عملیات فیلتر و مرتب‌سازی بهینه با useMemo
  const filteredAndSortedPosts = useMemo(() => {
    // ۱. فیلتر بر اساس سرچ (عنوان یا توضیحات)
    const filtered = blogList.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // ۲. مرتب‌سازی براساس تاریخ
    return filtered.sort((a, b) => {
      // تبدیل تاریخ شمسی/عددی ساده به فرمت قابل مقایسه در صورت نیاز
      if (sortBy === 'newest') {
        return b.date.localeCompare(a.date);
      } else {
        return a.date.localeCompare(b.date);
      }
    });
  }, [searchQuery, sortBy]);

  return (
    <section className={`py-16 px-6 min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-rich-black text-anti-flash-white' : 'bg-slate-50 text-slate-800'
    }`}>
      <div className="max-w-6xl mx-auto">
        
        {/* هدر صفحه آرشیو */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            وبلاگ <span className="text-caribbean-green">نوئل</span>
          </h2>
          <p className={`text-sm md:text-base ${darkMode ? 'text-stone' : 'text-slate-600'}`}>
            آخرین مقالات، آموزش‌ها و ترفندهای دنیای برنامه‌نویسی و تکنولوژی
          </p>
        </div>

        {/* 👈 ابزارهای سرچ و فیلتر (پک مینی‌مال) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-10 text-right" dir="rtl">
          
          {/* باکس سرچ آنی */}
          <div className="relative w-full sm:w-80">
            <input 
              type="text"
              placeholder="جستجو در میان مقالات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all ${
                darkMode 
                  ? 'bg-pine/30 border-forest text-white focus:border-caribbean-green' 
                  : 'bg-white border-slate-200 text-slate-800 focus:border-emerald-500'
              }`}
            />
            <span className="absolute left-3 top-3 opacity-40 text-xs">🔍</span>
          </div>

          {/* دکمه‌های مرتب‌سازی تاریخ */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-end">
            <span className={`text-xs font-medium ${darkMode ? 'text-stone' : 'text-slate-500'}`}>مرتب‌سازی:</span>
            <div className={`flex p-0.5 rounded-lg border text-xs ${
              darkMode ? 'bg-pine/20 border-forest' : 'bg-slate-200/60 border-slate-300'
            }`}>
              <button 
                onClick={() => setSortBy('newest')}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  sortBy === 'newest'
                    ? (darkMode ? 'bg-caribbean-green text-rich-black' : 'bg-white text-emerald-800 shadow-sm')
                    : (darkMode ? 'text-stone hover:text-white' : 'text-slate-600')
                }`}
              >
                جدیدترین
              </button>
              <button 
                onClick={() => setSortBy('oldest')}
                className={`px-3 py-1.5 rounded-md font-bold transition-all ${
                  sortBy === 'oldest'
                    ? (darkMode ? 'bg-caribbean-green text-rich-black' : 'bg-white text-emerald-800 shadow-sm')
                    : (darkMode ? 'text-stone hover:text-white' : 'text-slate-600')
                }`}
              >
                قدیمی‌ترین
              </button>
            </div>
          </div>

        </div>

        {/* 👈 لیست کارت‌های وبلاگ */}
        {filteredAndSortedPosts.length === 0 ? (
          <div className="text-center py-20 opacity-50">نتیجه‌ای برای جستجوی شما یافت نشد.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-right" dir="rtl">
            {filteredAndSortedPosts.map((post) => (
              <article 
                key={post.slug}
                className={`group rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 ${
                  darkMode 
                    ? 'bg-pine/20 border-forest/50 hover:border-caribbean-green/50 shadow-xl shadow-black/10' 
                    : 'bg-white border-slate-200 hover:border-emerald-500/40 shadow-md shadow-slate-200/50'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] tracking-wider font-mono opacity-50">{post.date}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      darkMode ? 'bg-forest/40 text-mountain-meadow' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      مقاله
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-black mb-2 group-hover:text-caribbean-green transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className={`text-xs leading-relaxed mb-6 line-clamp-2 ${darkMode ? 'text-stone' : 'text-slate-500'}`}>
                    {post.desc}
                  </p>
                </div>

                {/* دکمه ورود به مقاله با کوئری‌پارامتر ست‌شده */}
                <a 
                  href={`/?page=${post.slug}`}
                  className={`w-full text-center py-2 rounded-xl text-xs font-bold border transition-all ${
                    darkMode 
                      ? 'border-forest bg-rich-black hover:bg-caribbean-green hover:text-rich-black' 
                      : 'border-slate-200 bg-slate-50 hover:bg-emerald-500 hover:text-white'
                  }`}
                >
                  مطالعه مقاله ←
                </a>
              </article>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}