import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';

// 1. ДАТА ТАТАХ ФУНКЦ
async function getPost(slug) {
  const query = `*[_type == "blog" && slug.current == $slug][0] {
    title,
    category,
    publishedAt,
    mainImage,
    description
  }`;
  return await client.fetch(query, { slug });
}

// 2. PORTABLE TEXT КОМПОНЕНТУУД (Зэрэгцүүлэлт болон линкүүдийг тохируулсан)
const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-gray-600 leading-relaxed mb-6 text-lg text-justify font-light">{children}</p>,
    center: ({ children }) => <p className="text-gray-600 leading-relaxed mb-6 text-lg text-center font-light">{children}</p>,
    right: ({ children }) => <p className="text-gray-600 leading-relaxed mb-6 text-lg text-right font-light">{children}</p>,
    justify: ({ children }) => <p className="text-gray-600 leading-relaxed mb-6 text-lg text-justify font-light">{children}</p>,
    
    h1: ({ children }) => <h1 className="text-4xl font-black text-gray-900 mt-10 mb-6">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold text-gray-900 mt-6 mb-3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-logo-blue pl-6 italic text-xl text-gray-700 my-8 py-2">
        {children}
      </blockquote>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="relative w-full h-[400px] my-8 rounded-2xl overflow-hidden shadow-md">
        <Image
          src={urlFor(value).url()}
          alt="Blog post image"
          fill
          className="object-cover"
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-8 mb-6 text-gray-600 space-y-2">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-8 mb-6 text-gray-600 space-y-2">{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-gray-900">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => <code className="bg-gray-100 text-logo-red px-2 py-1 rounded font-mono text-sm">{children}</code>,
    
    // Вэб линк холбох
    link: ({ value, children }) => (
      <a href={value.href} target="_blank" rel="noopener noreferrer" className="text-logo-blue underline font-medium hover:text-blue-700">
        {children}
      </a>
    ),
    
    // Өөр нийтлэл рүү холбох (Tag / Internal Link)
    internalLink: ({ value, children }) => {
      const slug = value.reference?.slug?.current;
      return (
        <Link href={`/blog/${slug || ''}`} className="text-logo-green underline font-bold hover:opacity-80">
          {children}
        </Link>
      );
    },
  },
};

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Нийтлэл олдсонгүй</h1>
        <Link href="/blog" className="px-6 py-3 bg-logo-blue text-white rounded-xl font-bold hover:bg-blue-600 transition">
          Блог руу буцах
        </Link>
      </div>
    );
  }

  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center bg-gray-50 pt-12 pb-24">
      
      <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Буцах товч болон ангилал */}
        <div className="flex items-center justify-between mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-logo-blue transition"
          >
            ← Бүх нийтлэл рүү буцах
          </Link>
          {post.category && (
            <span className="bg-blue-50 text-logo-blue px-4 py-1.5 rounded-full text-xs font-bold">
              {post.category}
            </span>
          )}
        </div>

        {/* Гарчиг */}
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Нийтэлсэн огноо */}
        {post.publishedAt && (
          <div className="flex items-center text-gray-400 text-sm mb-8 pb-6 border-b border-gray-200">
            <span>Нийтэлсэн огноо: {new Date(post.publishedAt).toLocaleDateString('mn-MN')}</span>
          </div>
        )}

        {/* Үндсэн зураг (Banner) */}
        {post.mainImage && (
          <div className="relative w-full h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg mb-12 bg-gray-100">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Нийтлэлийн үндсэн агуулга (Portable Text Editor) */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <PortableText value={post.description} components={portableTextComponents} />
        </div>

      </article>
    </main>
  );
}