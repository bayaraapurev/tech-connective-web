'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default function AboutPage() {
  const [aboutData, setAboutData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Sanity-гаас дата татах (ЭНД ЗУРАГ ТАТАХ `image` ТАЛБАРЫГ НЭМСЭН)
  useEffect(() => {
    async function fetchAbout() {
      try {
        const query = `*[_type == "about"][0] {
          title,
          subtitle,
          description,
          image,
          mission,
          vision
        }`;
        const data = await client.fetch(query);
        setAboutData(data);
      } catch (error) {
        console.error("Бидний тухай дата татахад алдаа гарлаа:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAbout();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Уншиж байна...</div>;
  }

  if (!aboutData) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Админ самбараас мэдээлэл оруулна уу.</div>;
  }

  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center bg-gray-50">
      
      {/* 1. Толгойн хэсэг */}
      <section className="w-full flex flex-col items-center justify-center pt-16 pb-12 text-center relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="relative inline-flex items-center px-5 py-2.5 rounded-full border border-gray-100 bg-white/50 backdrop-blur-sm text-sm font-semibold text-gray-600 shadow-sm mb-6 cursor-default">
          {aboutData.subtitle || 'Компанийн танилцуулга'}
        </div>

        <h1 className="relative text-4xl md:text-6xl font-black tracking-tight mb-6">
          <span className="text-gray-900">{aboutData.title ? aboutData.title.split(' ')[0] : 'Бидний'}</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-blue to-logo-green drop-shadow-sm">
            {aboutData.title ? aboutData.title.split(' ').slice(1).join(' ') : 'тухай'}
          </span>
        </h1>
        
        <div className="relative flex h-1.5 w-32 rounded-full overflow-hidden mb-8 shadow-sm opacity-80">
          <div className="w-1/4 bg-logo-blue"></div>
          <div className="w-1/4 bg-logo-green"></div>
          <div className="w-1/4 bg-logo-yellow"></div>
          <div className="w-1/4 bg-logo-red"></div>
        </div>
      </section>

      {/* 2. Агуулгын хэсэг */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* ШИНЭЭР НЭМЭГДСЭН: ОФФИСЫН ЗУРАГ ХАРУУЛАХ ХЭСЭГ */}
        {aboutData.image && (
          <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl mb-16 border border-gray-100">
            <Image
              src={urlFor(aboutData.image).url()}
              alt="Tech Connectiv Оффис"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}

        {/* Танилцуулга болон Алсын хараа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          
          {/* Зүүн тал - Ерөнхий мэдээлэл */}
          <div className="pr-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">Технологийн дэвшлийг таны бизнест</h2>
            <div className="text-gray-600 leading-relaxed text-lg font-light text-justify whitespace-pre-wrap">
              {aboutData.description}
            </div>
          </div>

          {/* Баруун тал - Алсын хараа, Эрхэм зорилго */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-50 text-logo-blue rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">👁️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Алсын хараа</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                {aboutData.vision}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-50 text-logo-green rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Эрхэм зорилго</h3>
              </div>
              <p className="text-gray-600 leading-relaxed font-light">
                {aboutData.mission}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Үнэт зүйлс */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Бидний үнэт зүйлс</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Бидний өдөр тутмын үйл ажиллагаа, харилцааг чиглүүлдэг үндсэн зарчмууд.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-b-4 border-b-logo-blue hover:-translate-y-1 transition duration-300 hover:shadow-lg text-center">
            <div className="w-12 h-12 bg-logo-blue rounded-full flex items-center justify-center text-white mb-4 mx-auto shadow-md font-black text-xl">1</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Инноваци</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Үргэлж шинийг эрэлхийлж, тасралтгүй хөгжих.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-b-4 border-b-logo-green hover:-translate-y-1 transition duration-300 hover:shadow-lg text-center">
            <div className="w-12 h-12 bg-logo-green rounded-full flex items-center justify-center text-white mb-4 mx-auto shadow-md font-black text-xl">2</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Сэтгэл ханамж</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Харилцагчийн хэрэгцээ шаардлагыг бүрэн хангах.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-b-4 border-b-logo-yellow hover:-translate-y-1 transition duration-300 hover:shadow-lg text-center">
            <div className="w-12 h-12 bg-logo-yellow rounded-full flex items-center justify-center text-white mb-4 mx-auto shadow-md font-black text-xl">3</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Найдвартай байдал</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Мэдээллийн аюулгүй байдал, чанарын баталгаа.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 border-b-4 border-b-logo-red hover:-translate-y-1 transition duration-300 hover:shadow-lg text-center">
            <div className="w-12 h-12 bg-logo-red rounded-full flex items-center justify-center text-white mb-4 mx-auto shadow-md font-black text-xl">4</div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Багийн ажиллагаа</h4>
            <p className="text-gray-500 text-sm leading-relaxed">Нэг зорилгын төлөөх нягт хамтын ажиллагаа.</p>
          </div>
        </div>

      </section>
    </main>
  );
}