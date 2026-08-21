'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export default function Footer() {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    async function fetchFooter() {
      try {
        const query = `*[_type == "footer"][0] {
          companyName,
          description,
          address,
          phone,
          email,
          copyright
        }`;
        const data = await client.fetch(query);
        setFooterData(data);
      } catch (error) {
        console.error("Footer дата татахад алдаа гарлаа:", error);
      }
    }
    fetchFooter();
  }, []);

  return (
    <footer className="w-full bg-[#0b132b] text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Компанийн тухай */}
        <div>
          <h3 className="text-white text-lg font-bold tracking-wider mb-4">
            {footerData?.companyName || 'ТЕХ КОННЕКТИВ'}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {footerData?.description || 'Бид байгууллагынхаа үйл ажиллагааг дараагийн түвшинд гаргахад шаардлагатай дэвшилтэт, найдвартай технологийн шийдлүүдийг санал болгож байна.'}
          </p>
        </div>

        {/* Хуудсууд */}
        <div>
          <h3 className="text-white text-lg font-bold tracking-wider mb-4">Хуудсууд</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Нүүр хуудас</Link></li>
            <li><Link href="/about" className="hover:text-white transition">Бидний тухай</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Үйлчилгээ & Блог</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Холбоо барих</Link></li>
          </ul>
        </div>

        {/* Холбоо барих */}
        <div>
          <h3 className="text-white text-lg font-bold tracking-wider mb-4">Холбоо барих</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start">
              <span className="mr-2">📍</span> {footerData?.address || 'Улаанбаатар хот, Сүхбаатар дүүрэг'}
            </li>
            <li className="flex items-center">
              <span className="mr-2">📞</span> {footerData?.phone || 'Утас: +976 9900 0000'}
            </li>
            <li className="flex items-center">
              <span className="mr-2">✉️</span> {footerData?.email || 'И-мэйл: info@techconnective.mn'}
            </li>
          </ul>
        </div>

      </div>

      {/* Зохиогчийн эрх */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800/60 text-center text-xs text-gray-500">
        {footerData?.copyright || '© 2026 Тех Коннектив ХХК. Бүх эрх хуулиар хамгаалагдсан.'}
      </div>
    </footer>
  );
}