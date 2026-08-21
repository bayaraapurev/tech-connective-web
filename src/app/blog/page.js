'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

// Ангилал тус бүрийн өнгө, хүрээ болон товчны загварууд (Энгийн үедээ өнгөтэй хүрээтэй байхаар тохируулав)
const categoryStyles = {
  'AI & Автоматжуулалт': {
    badge: 'bg-blue-50 text-blue-600 border-blue-200',
    activeTab: 'bg-blue-600 text-white shadow-md shadow-blue-200 border-blue-600',
    inactiveTab: 'border-blue-300 text-blue-700 bg-blue-50/40 hover:bg-blue-100/60',
    accentBorder: 'border-l-4 border-l-blue-500'
  },
  'Дижитал стратеги': {
    badge: 'bg-green-50 text-green-600 border-green-200',
    activeTab: 'bg-green-600 text-white shadow-md shadow-green-200 border-green-600',
    inactiveTab: 'border-green-300 text-green-700 bg-green-50/40 hover:bg-green-100/60',
    accentBorder: 'border-l-4 border-l-green-500'
  },
  'Вэб & Апп хөгжүүлэлт': {
    badge: 'bg-amber-50 text-amber-600 border-amber-200',
    activeTab: 'bg-amber-500 text-white shadow-md shadow-amber-200 border-amber-500',
    inactiveTab: 'border-amber-300 text-amber-700 bg-amber-50/40 hover:bg-amber-100/60',
    accentBorder: 'border-l-4 border-l-amber-500'
  },
  'Интеграци & Дэд бүтэц': {
    badge: 'bg-purple-50 text-purple-600 border-purple-200',
    activeTab: 'bg-purple-600 text-white shadow-md shadow-purple-200 border-purple-600',
    inactiveTab: 'border-purple-300 text-purple-700 bg-purple-50/40 hover:bg-purple-100/60',
    accentBorder: 'border-l-4 border-l-purple-500'
  },
  'Технологи & Инноваци': {
    badge: 'bg-rose-50 text-rose-600 border-rose-200',
    activeTab: 'bg-rose-600 text-white shadow-md shadow-rose-200 border-rose-600',
    inactiveTab: 'border-rose-300 text-rose-700 bg-rose-50/40 hover:bg-rose-100/60',
    accentBorder: 'border-l-4 border-l-rose-500'
  },
  default: {
    badge: 'bg-gray-50 text-gray-600 border-gray-200',
    activeTab: 'bg-gray-900 text-white shadow-md border-gray-900',
    inactiveTab: 'border-gray-200 text-gray-600 bg-white hover:bg-gray-50',
    accentBorder: 'border-l-4 border-l-gray-400'
  }
};

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('Бүх нийтлэл');
  const [isLoading, setIsLoading] = useState(true);

  const categories = [
    'Бүх нийтлэл',
    'AI & Автоматжуулалт',
    'Дижитал стратеги',
    'Вэб & Апп хөгжүүлэлт',
    'Интеграци & Дэд бүтэц',
    'Технологи & Инноваци'
  ];

  useEffect(() => {
    async function fetchPosts() {
      try {
        const query = `*[_type == "blog"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          category,
          mainImage,
          publishedAt,
          "excerpt": pt::text(description)
        }`;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error("Блог дата татахад алдаа гарлаа:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const filteredPosts = activeCategory === 'Бүх нийтлэл' 
    ? posts 
    : posts.filter(post => post.category === activeCategory);

  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center bg-gray-50 pt-16 pb-24">
      
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Технологийн <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-blue to-logo-green">мэдлэг, мэдээлэл</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          Салбарын шилдэг туршлага, технологийн чиг хандлага болон бизнесийн стратегийн талаарх бидний бэлтгэсэн нийтлэлүүд.
        </p>

        {/* Ангиллын шүүлтүүр товчнууд (Өнгөөр хүрээлэгдсэн) */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            const style = categoryStyles[cat] || categoryStyles.default;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  isActive 
                    ? style.activeTab 
                    : style.inactiveTab
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64 text-gray-400">Уншиж байна...</div>
        ) : filteredPosts.length > 0 ? (
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => {
              const catStyle = categoryStyles[post.category] || categoryStyles.default;
              return (
                <div 
                  key={post._id} 
                  className={`bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 ${catStyle.accentBorder} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group`}
                >
                  
                  {/* Зураг хэсэг */}
                  <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                    {post.mainImage ? (
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-300">Зураггүй</div>
                    )}
                    {post.category && (
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-sm ${catStyle.badge}`}>
                        {post.category}
                      </div>
                    )}
                  </div>

                  {/* Текст хэсэг */}
                  <div className="p-6 flex flex-col flex-grow">
                    {post.publishedAt && (
                      <span className="text-xs text-gray-400 font-medium mb-3">
                        {new Date(post.publishedAt).toLocaleDateString('mn-MN')}
                      </span>
                    )}
                    
                    <Link href={`/blog/${post.slug?.current || ''}`}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-logo-blue transition-colors">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-3 flex-grow">
                      {post.excerpt || 'Дэлгэрэнгүйг унших...'}
                    </p>
                    
                    <Link 
                      href={`/blog/${post.slug?.current || ''}`}
                      className="inline-flex items-center text-sm font-bold text-logo-blue hover:text-blue-700 transition-colors mt-auto"
                    >
                      Дэлгэрэнгүй унших 
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        ) : (
          <div className="text-center text-gray-500 py-20">
            Энэ ангилалд одоогоор нийтлэл оруулаагүй байна.
          </div>
        )}

      </section>
    </main>
  );
}