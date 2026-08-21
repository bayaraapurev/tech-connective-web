'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
// Энд EffectFade нэмэгдсэн:
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

import 'swiper/css';
import 'swiper/css/pagination';
// Энд Fade эффектийн загварыг нэмсэн:
import 'swiper/css/effect-fade';

// Үйлчилгээний хэсэг
const services = [
  { icon: '💻', title: 'Вэб хөгжүүлэлт', desc: 'Байгууллагын танилцуулга болон цахим худалдааны цогц вэб системийг...' },
  { icon: '📱', title: 'Апп хөгжүүлэлт', desc: 'iOS болон Android үйлдлийн системд зориулсан хэрэглэхэд хялбар...' },
  { icon: '⚙️', title: 'Системийн интеграци', desc: 'Байгууллагын дотоод үйл ажиллагааг автоматжуулах, ERP болон...' },
  { icon: '📹', title: 'Камер суурилуулалт', desc: 'Оффис болон үйлдвэрийн зориулалттай орчин үеийн, өндөр нягтралтай...' },
];

export default function Home() {
  const [heroSlides, setHeroSlides] = useState([]);
  const [partners, setPartners] = useState([]);

  // 1. Sanity CMS-ээс Hero слайдуудын датаг татах
  useEffect(() => {
    async function fetchHeroSlides() {
      try {
        const query = `*[_type == "heroSlide"] | order(order asc) {
          _id,
          badge,
          titleMain,
          titleHighlight,
          titleSub,
          description,
          primaryBtnText,
          primaryBtnLink,
          secondaryBtnText,
          secondaryBtnLink
        }`;
        const data = await client.fetch(query);
        setHeroSlides(data);
      } catch (error) {
        console.error("Hero слайдын дата татахад алдаа гарлаа:", error);
      }
    }
    fetchHeroSlides();
  }, []);

  // 2. Sanity CMS-ээс Хамтрагч байгууллагуудын датаг татах
  useEffect(() => {
    async function fetchPartners() {
      try {
        const query = `*[_type == "partner"]{
          _id,
          name,
          logo,
          url
        }`;
        const data = await client.fetch(query);
        setPartners(data);
      } catch (error) {
        console.error("Харилцагчийн дата татахад алдаа гарлаа:", error);
      }
    }
    fetchPartners();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-50">
      
      {/* 1. ТОЛГОЙН ХЭСЭГ (HERO SLIDESHOW - Админ самбараас удирдана) */}
      <section className="w-full relative bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        {heroSlides.length > 0 ? (
          <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }} // <-- ЭНЭ МӨРИЙГ ШИНЭЭР НЭМНЭ
          speed={1500}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full min-h-[calc(100vh-80px)]"
        >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide._id} className="flex items-center justify-center text-center py-20 px-8">
                <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
                  
                  {slide.badge && (
                    <div className="relative inline-flex items-center px-5 py-2.5 rounded-full border border-gray-100 bg-white/50 backdrop-blur-sm text-sm font-semibold text-gray-600 shadow-sm mb-8 cursor-default">
                      <span className="flex h-2.5 w-2.5 rounded-full bg-logo-blue mr-3 animate-pulse"></span>
                      {slide.badge}
                    </div>
                  )}

                  <h1 className="relative text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.15]">
                    <span className="text-gray-900">{slide.titleMain}</span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-blue via-blue-500 to-logo-green drop-shadow-sm">
                      {slide.titleHighlight}
                    </span>{' '}
                    <span className="text-gray-900">{slide.titleSub}</span>
                  </h1>
                  
                  <div className="relative flex h-1.5 w-48 rounded-full overflow-hidden mb-10 shadow-sm opacity-80">
                    <div className="w-1/4 bg-logo-blue"></div>
                    <div className="w-1/4 bg-logo-green"></div>
                    <div className="w-1/4 bg-logo-yellow"></div>
                    <div className="w-1/4 bg-logo-red"></div>
                  </div>

                  <p className="relative max-w-2xl text-xl text-gray-500 mb-12 leading-relaxed font-light">
                    {slide.description}
                  </p>

                  <div className="relative flex gap-4 justify-center flex-wrap">
                    {slide.primaryBtnText && slide.primaryBtnLink && (
                      <Link 
                        href={slide.primaryBtnLink} 
                        className="px-8 py-4 bg-logo-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-[0_8px_30px_rgb(0,170,231,0.3)]"
                      >
                        {slide.primaryBtnText}
                      </Link>
                    )}
                    {slide.secondaryBtnText && slide.secondaryBtnLink && (
                      <Link 
                        href={slide.secondaryBtnLink} 
                        className="px-8 py-4 bg-white text-gray-700 border border-gray-200 rounded-xl font-bold hover:border-logo-blue hover:text-logo-blue transition-all duration-300 shadow-sm"
                      >
                        {slide.secondaryBtnText}
                      </Link>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          /* Хэрэв Sanity дээр слайд байхгүй бол харагдах үндсэн fallback хэсэг */
          <div className="flex items-center justify-center text-center py-32 px-8 min-h-[calc(100vh-80px)]">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                Админ самбараас <span className="text-logo-blue">Hero слайд</span> оруулна уу
              </h1>
            </div>
          </div>
        )}
      </section>

      {/* 2. ҮЙЛЧИЛГЭЭНИЙ ХЭСЭГ */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Бидний үзүүлэх үйлчилгээ</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Танай бизнесийн онцлогт тохирсон хамгийн шилдэг шийдлүүдийг бид орчин үеийн технологиор бүтээнэ.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 border-t-4 hover:shadow-xl transition duration-300 hover:-translate-y-2 group"
              style={{ borderTopColor: index === 0 ? '#00aae7' : index === 1 ? '#00c853' : index === 2 ? '#f44336' : '#ffc107' }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-300"
                style={{ backgroundColor: index === 0 ? '#e3f2fd' : index === 1 ? '#e8f5e9' : index === 2 ? '#ffebee' : '#fffde7', color: index === 0 ? '#00aae7' : index === 1 ? '#00c853' : index === 2 ? '#f44336' : '#ffc107' }}
              >
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. СТАТИСТИК ХЭСЭГ */}
      <section className="w-full bg-logo-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Бидний амжилтын тоон үзүүлэлт</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[ 
              { num: '50+', label: 'Амжилттай төсөл', color: 'text-logo-blue' }, 
              { num: '20+', label: 'Харилцагч байгууллага', color: 'text-logo-green' }, 
              { num: '5+', label: 'Жилийн туршлага', color: 'text-logo-yellow' }, 
              { num: '100%', label: 'Сэтгэл ханамж', color: 'text-logo-red' } 
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className={`text-5xl font-black ${stat.color} mb-3`}>{stat.num}</span>
                <span className="text-gray-300 font-medium text-lg">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ХАРИЛЦАГЧ БАЙГУУЛЛАГУУДЫН КАРУСЕЛЬ */}
      {partners.length > 0 && (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white my-10 rounded-3xl shadow-sm border border-gray-100">
          <div className="mb-10 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Хамтрагч байгууллагууд</h2>
            <div className="relative flex h-1.5 w-32 rounded-full overflow-hidden shadow-sm opacity-80">
              <div className="w-1/4 bg-logo-blue"></div>
              <div className="w-1/4 bg-logo-green"></div>
              <div className="w-1/4 bg-logo-yellow"></div>
              <div className="w-1/4 bg-logo-red"></div>
            </div>
          </div>
          
          <div className="relative px-4">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{ 
                640: { slidesPerView: 3 }, 
                768: { slidesPerView: 4 }, 
                1024: { slidesPerView: 5 } 
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="w-full py-4"
            >
              {partners.map((partner, index) => (
                <SwiperSlide key={partner._id || index} className="flex items-center justify-center">
                  <a
                    href={partner.url || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-4 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 transition duration-300 h-28 w-full group relative overflow-hidden"
                  >
                    {partner.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={urlFor(partner.logo).url()}
                          alt={partner.name || 'Partner logo'}
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    ) : (
                      <span className="text-gray-700 font-extrabold text-base tracking-wider text-center group-hover:text-logo-blue transition">
                        {partner.name}
                      </span>
                    )}
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

    </main>
  );
}