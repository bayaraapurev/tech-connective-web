'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Цэсний жагсаалт
  const navLinks = [
    { name: 'Нүүр', href: '/' },
    { name: 'Бидний тухай', href: '/about' },
    { name: 'Үйлчилгээ', href: '/services' },
    { name: 'Төслүүд', href: '/projects' },
    { name: 'Блог', href: '/blog' },
    { name: 'Холбоо барих', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Лого хэсэг */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src="/logo_t.png" 
                alt="Тех Коннектив Лого"
                width={200} 
                height={60}
                className="object-contain h-14 w-auto"
              />
            </Link>
          </div>

          {/* Цэсний линкүүд */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              // Тухайн хуудас дээр байгаа эсэхийг шалгах
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold transition uppercase tracking-wider pb-1 border-b-2 ${
                    isActive
                      ? 'text-logo-blue border-logo-blue' // Идэвхтэй үеийн өнгө болон доогуур зураас
                      : 'text-gray-700 border-transparent hover:text-logo-blue hover:border-gray-300'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
}