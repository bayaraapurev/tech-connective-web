'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

export default function ContactPage() {
  const [contactData, setContactData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Формын стейтүүд
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'technology',
    message: '',
  });

  // Captcha-ийн тооцоолол (Спамаас хамгаалах)
  const [num1] = useState(Math.floor(Math.random() * 10) + 1);
  const [num2] = useState(Math.floor(Math.random() * 10) + 1);
  const [captchaInput, setCaptchaInput] = useState('');

  const [formStatus, setFormStatus] = useState({ submitting: false, success: false, error: '' });

  // Имэйл шалгах регуляр илэрхийлэл (Regex)
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Sanity-гаас дата татах
  useEffect(() => {
    async function fetchContact() {
      try {
        const query = `*[_type == "contact"][0] {
          title,
          subtitle,
          image,
          phone,
          email,
          address,
          workingHours,
          mapEmbedUrl
        }`;
        const data = await client.fetch(query);
        setContactData(data);
      } catch (error) {
        console.error("Холбоо барих дата татахад алдаа гарлаа:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchContact();
  }, []);

  // Форм илгээх үйлдэл
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: '' });

    // 1. Имэйл зөв эсэхийг шалгах
    if (!validateEmail(formData.email)) {
      setFormStatus({ submitting: false, success: false, error: 'И-мэйл хаяг буруу байна. Зөв оруулна уу.' });
      return;
    }

    // 2. Captcha шалгах
    if (parseInt(captchaInput) !== num1 + num2) {
      setFormStatus({ submitting: false, success: false, error: 'Спамын хамгаалалтын хариу буруу байна. Дахин оролдоно уу.' });
      return;
    }

    try {
      // Серверийн API route руу хүсэлт явуулах
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Илгээхэд алдаа гарлаа.');
      }

      setFormStatus({ submitting: false, success: true, error: '' });
      setFormData({ name: '', email: '', category: 'technology', message: '' });
      setCaptchaInput('');
    } catch (error) {
      console.error('Санал хүсэлт илгээхэд алдаа гарлаа:', error);
      setFormStatus({ submitting: false, success: false, error: 'Илгээхэд алдаа гарлаа. Түр хүлээгээд дахин оролдоно уу.' });
    }
  };

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Уншиж байна...</div>;
  }

  if (!contactData) {
    return <div className="min-h-screen flex items-center justify-center text-gray-500">Админ самбараас мэдээлэл оруулна уу.</div>;
  }

  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center bg-gray-50 pb-24">
      
      {/* 1. Толгойн хэсэг */}
      <section className="w-full flex flex-col items-center justify-center pt-16 pb-12 text-center relative overflow-hidden bg-white mb-12">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="relative inline-flex items-center px-5 py-2.5 rounded-full border border-gray-100 bg-white/50 backdrop-blur-sm text-sm font-semibold text-gray-600 shadow-sm mb-6 cursor-default">
          {contactData.subtitle || 'Бидэнтэй хамтран ажиллахад бид үргэлж нээлттэй байх болно.'}
        </div>

        <h1 className="relative text-4xl md:text-6xl font-black tracking-tight mb-6">
          <span className="text-gray-900">{contactData.title ? contactData.title.split(' ')[0] : 'Холбоо'}</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-blue to-logo-green drop-shadow-sm">
            {contactData.title ? contactData.title.split(' ').slice(1).join(' ') : 'барих'}
          </span>
        </h1>
        
        <div className="relative flex h-1.5 w-32 rounded-full overflow-hidden shadow-sm opacity-80">
          <div className="w-1/4 bg-logo-blue"></div>
          <div className="w-1/4 bg-logo-green"></div>
          <div className="w-1/4 bg-logo-yellow"></div>
          <div className="w-1/4 bg-logo-red"></div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2. ФОРМА (Зургийн дээд талд байрлав) */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 mb-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Санал хүсэлт илгээх</h2>

          {formStatus.success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl text-sm font-medium">
              Таны санал хүсэлт амжилттай илгээгдлээ! Бид тун удахгүй сонгосон чиглэлийн дагуу тантай холбогдох болно.
            </div>
          )}

          {formStatus.error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-2xl text-sm font-medium">
              {formStatus.error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Нэр */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Таны нэр</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Жишээ: Бат-Эрдэнэ"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-logo-blue transition text-gray-800 text-sm"
                />
              </div>

              {/* И-мэйл (Валидацитай) */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">И-мэйл хаяг</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="example@domain.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-logo-blue transition text-gray-800 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Чиглэл сонгох */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Чиглэл сонгох</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-logo-blue transition text-gray-800 text-sm bg-white"
                >
                  <option value="technology">Технологи</option>
                  <option value="service">Үйлчилгээ</option>
                  <option value="management">Удирдлага</option>
                  <option value="marketing">Маркетинг</option>
                </select>
              </div>

              {/* Captcha */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Спамын хамгаалалт: <span className="text-logo-blue font-extrabold">{num1} + {num2} = ?</span>
                </label>
                <input
                  type="number"
                  required
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Хариуг оруулна уу"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-logo-blue transition text-gray-800 text-sm"
                />
              </div>
            </div>

            {/* Мессеж */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Таны санал хүсэлт</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Энд санал хүсэлтээ дэлгэрэнгүй бичнэ үү..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-logo-blue transition text-gray-800 text-sm resize-none"
              ></textarea>
            </div>

            {/* Илгээх товч */}
            <button
              type="submit"
              disabled={formStatus.submitting}
              className="w-full py-4 bg-logo-blue text-white rounded-xl font-bold hover:bg-blue-600 transition shadow-md shadow-blue-200 disabled:opacity-50"
            >
              {formStatus.submitting ? 'Илгээж байна...' : 'Санал хүсэлт илгээх'}
            </button>
          </form>
        </div>

        {/* 3. БАРИЛГЫН ЗУРАГ ХАРУУЛАХ ХЭСЭГ (Формын доор) */}
        {contactData.image && (
          <div className="relative w-full h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl mb-16 border border-gray-100">
            <Image
              src={urlFor(contactData.image).url()}
              alt="Оффисын барилга"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}

        {/* 4. Мэдээллийн картууд */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-blue-50 text-logo-blue rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📞</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Утасны дугаар</h3>
            <p className="text-gray-600 font-medium">{contactData.phone || 'Оруулаагүй байна'}</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-green-50 text-logo-green rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">✉️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">И-мэйл хаяг</h3>
            <p className="text-gray-600 font-medium">{contactData.email || 'Оруулаагүй байна'}</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-yellow-50 text-logo-yellow rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Цагийн хуваарь</h3>
            <p className="text-gray-600 font-medium whitespace-pre-wrap">{contactData.workingHours || 'Оруулаагүй байна'}</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-red-50 text-logo-red rounded-2xl flex items-center justify-center mb-6">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Оффисын хаяг</h3>
            <p className="text-gray-600 font-medium whitespace-pre-wrap">{contactData.address || 'Оруулаагүй байна'}</p>
          </div>

        </div>

        {/* 5. Газрын зураг (Google Map) */}
        {contactData.mapEmbedUrl && (
          <div className="w-full bg-white p-2 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <iframe 
              src={contactData.mapEmbedUrl} 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '1.25rem' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}

      </section>
    </main>
  );
}