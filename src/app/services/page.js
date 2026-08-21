import Link from 'next/link';

export default function Services() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center bg-gray-50 pb-20">
      
      {/* 1. Толгойн хэсэг (Premium хэв маяг) */}
      <section className="w-full flex flex-col items-center justify-center pt-16 pb-16 text-center relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="relative inline-flex items-center px-5 py-2.5 rounded-full border border-gray-100 bg-white/50 backdrop-blur-sm text-sm font-semibold text-gray-600 shadow-sm mb-6 cursor-default">
          Бидний үйлчилгээ
        </div>

        <h1 className="relative text-4xl md:text-6xl font-black tracking-tight mb-6">
          <span className="text-gray-900">Технологийн</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-blue via-blue-500 to-logo-green drop-shadow-sm">цогц шийдэл</span>
        </h1>
        
        <div className="relative flex h-1.5 w-32 rounded-full overflow-hidden mb-6 shadow-sm opacity-80">
          <div className="w-1/4 bg-logo-blue"></div>
          <div className="w-1/4 bg-logo-green"></div>
          <div className="w-1/4 bg-logo-yellow"></div>
          <div className="w-1/4 bg-logo-red"></div>
        </div>

        <p className="relative max-w-2xl text-lg text-gray-500 leading-relaxed font-light px-4">
          Танай бизнесийн онцлог, хэрэгцээ шаардлагад бүрэн нийцсэн хамгийн шилдэг технологийн шийдлүүдийг бид санал болгож байна.
        </p>
      </section>

      {/* 2. Дэлгэрэнгүй үйлчилгээний картууд */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Үйлчилгээ 1: Вэб хөгжүүлэлт (Цэнхэр) */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 border-l-4 border-l-logo-blue hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-blue-50 text-logo-blue rounded-2xl flex items-center justify-center mr-5 shadow-inner">
                <span className="text-3xl">💻</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Вэб хөгжүүлэлт</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-justify">
              Орчин үеийн загварын чиг хандлагад нийцсэн, хэрэглэхэд хялбар, өндөр хурдтай вэб сайтуудыг хийж гүйцэтгэнэ.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-blue mr-3">✔</span> Байгууллагын танилцуулга вэб
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-blue mr-3">✔</span> Цахим худалдаа (E-commerce)
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-blue mr-3">✔</span> Вэб суурьтай дотоод системүүд
              </li>
            </ul>
          </div>

          {/* Үйлчилгээ 2: Апп хөгжүүлэлт (Ногоон) */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 border-l-4 border-l-logo-green hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-green-50 text-logo-green rounded-2xl flex items-center justify-center mr-5 shadow-inner">
                <span className="text-3xl">📱</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Аппликейшн хөгжүүлэлт</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-justify">
              Хэрэглэгчийн гарт шууд хүрэх, UI/UX дизайны шилдэг шийдэлтэй ухаалаг гар утасны аппликейшн.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-green mr-3">✔</span> iOS болон Android хөгжүүлэлт
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-green mr-3">✔</span> UI/UX загвар гаргах
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-green mr-3">✔</span> Аппликейшны засвар үйлчилгээ
              </li>
            </ul>
          </div>

          {/* Үйлчилгээ 3: Системийн интеграци (Улаан) */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 border-l-4 border-l-logo-red hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-red-50 text-logo-red rounded-2xl flex items-center justify-center mr-5 shadow-inner">
                <span className="text-3xl">⚙️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Системийн интеграци</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-justify">
              Байгууллагын үйл ажиллагааг автоматжуулах, олон төрлийн системүүдийг хооронд нь холбож, өгөгдөл солилцох боломжийг бүрдүүлнэ.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-red mr-3">✔</span> ERP системийн нэвтрүүлэлт
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-red mr-3">✔</span> API хөгжүүлэлт болон холболт
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-red mr-3">✔</span> Мэдээллийн аюулгүй байдал
              </li>
            </ul>
          </div>

          {/* Үйлчилгээ 4: Камер суурилуулалт (Шар) */}
          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 border-l-4 border-l-logo-yellow hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-yellow-50 text-logo-yellow rounded-2xl flex items-center justify-center mr-5 shadow-inner">
                <span className="text-3xl">📹</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Камер суурилуулалт</h2>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-justify">
              Объектын аюулгүй байдлыг хангах, орчин үеийн ухаалаг хяналтын камерын системийг мэргэжлийн түвшинд хийнэ.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-yellow mr-3">✔</span> Өндөр нягтралтай IP камер
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-yellow mr-3">✔</span> Дотоод сүлжээ, серверийн тохиргоо
              </li>
              <li className="flex items-center text-gray-700 font-medium">
                <span className="text-logo-yellow mr-3">✔</span> 24/7 ухаалаг хяналт
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Үйлдэлд дуудах хэсэг (Call to action) */}
      <section className="w-full max-w-4xl mx-auto mt-24 px-4 text-center">
        <div className="bg-logo-dark rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          {/* Чимэглэлийн цагираг */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 border-4 border-gray-700 rounded-full opacity-20 pointer-events-none"></div>
          
          <h2 className="relative text-3xl font-bold text-white mb-6">Шинэ төслөө бидэнтэй хамт эхлүүлэх үү?</h2>
          <p className="relative text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
            Таны санааг бодит болгох технологийн мэргэжилтнүүд тантай уулзахад бэлэн байна.
          </p>
          <Link 
            href="/contact" 
            className="relative inline-block px-10 py-4 bg-logo-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:-translate-y-1"
          >
            Холбоо барих
          </Link>
        </div>
      </section>

    </main>
  );
}