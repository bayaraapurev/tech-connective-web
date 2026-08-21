import Link from 'next/link';

export default function Projects() {
  return (
    <main className="flex min-h-[calc(100vh-80px)] flex-col items-center bg-gray-50 pb-20">
      
      {/* 1. Толгойн хэсэг */}
      <section className="w-full flex flex-col items-center justify-center pt-16 pb-12 text-center relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        
        <div className="relative inline-flex items-center px-5 py-2.5 rounded-full border border-gray-100 bg-white/50 backdrop-blur-sm text-sm font-semibold text-gray-600 shadow-sm mb-6 cursor-default">
          Бидний туршлага
        </div>

        <h1 className="relative text-4xl md:text-6xl font-black tracking-tight mb-6">
          <span className="text-gray-900">Онцлох</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-logo-blue to-logo-green drop-shadow-sm">төслүүд</span>
        </h1>
        
        <div className="relative flex h-1.5 w-32 rounded-full overflow-hidden mb-6 shadow-sm opacity-80">
          <div className="w-1/4 bg-logo-blue"></div>
          <div className="w-1/4 bg-logo-green"></div>
          <div className="w-1/4 bg-logo-yellow"></div>
          <div className="w-1/4 bg-logo-red"></div>
        </div>
        
        <p className="relative max-w-2xl text-lg text-gray-500 leading-relaxed font-light px-4">
          Бидний хийж гүйцэтгэсэн томоохон төслүүд болон харилцагчдынхаа бизнест оруулсан технологийн шийдлүүдтэй танилцана уу.
        </p>
      </section>

      {/* 2. Төслүүдийн жагсаалт (Grid) */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Төсөл 1 (Вэб - Цэнхэр) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 group">
            {/* Төслийн зураг байрлах хэсэг (Одоогоор өнгөт дэвсгэр) */}
            <div className="h-64 bg-blue-50 flex items-center justify-center relative overflow-hidden">
              <span className="text-6xl group-hover:scale-110 transition duration-500">🛒</span>
              <div className="absolute inset-0 bg-logo-blue/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
            
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-blue-50 text-logo-blue text-xs font-bold rounded-full mb-4">
                Вэб хөгжүүлэлт
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Цахим худалдааны цогц платформ</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Үндэсний томоохон сүлжээ дэлгүүрийн 10,000 гаруй бараа бүтээгдэхүүнийг онлайнаар борлуулах, агуулахын системтэй шууд холбогдсон цахим дэлгүүр.
              </p>
              <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Next.js</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Node.js</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">PostgreSQL</span>
              </div>
            </div>
          </div>

          {/* Төсөл 2 (Апп - Ногоон) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 group">
            <div className="h-64 bg-green-50 flex items-center justify-center relative overflow-hidden">
              <span className="text-6xl group-hover:scale-110 transition duration-500">🚚</span>
              <div className="absolute inset-0 bg-logo-green/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
            
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-green-50 text-logo-green text-xs font-bold rounded-full mb-4">
                Апп хөгжүүлэлт
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Хүргэлтийн үйлчилгээний аппликейшн</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Хүргэлтийн ажилтнууд болон хэрэглэгчдийг холбосон, байршил тогтоох системтэй ухаалаг гар утасны аппликейшн (iOS & Android).
              </p>
              <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">React Native</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Google Maps API</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Firebase</span>
              </div>
            </div>
          </div>

          {/* Төсөл 3 (Камер - Шар) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 group">
            <div className="h-64 bg-yellow-50 flex items-center justify-center relative overflow-hidden">
              <span className="text-6xl group-hover:scale-110 transition duration-500">🏭</span>
              <div className="absolute inset-0 bg-logo-yellow/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
            
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-yellow-50 text-logo-yellow text-xs font-bold rounded-full mb-4">
                Камер суурилуулалт
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Үйлдвэрийн бүсийн ухаалаг хяналт</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Уул уурхайн салбарын үйлдвэрийн бүсэд 100 гаруй өндөр нягтралтай камер суурилуулж, нэгдсэн серверийн өрөө байгуулсан төсөл.
              </p>
              <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">IP Camera</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">NVR Server</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Fiber Optic</span>
              </div>
            </div>
          </div>

          {/* Төсөл 4 (Интеграци - Улаан) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition duration-300 group">
            <div className="h-64 bg-red-50 flex items-center justify-center relative overflow-hidden">
              <span className="text-6xl group-hover:scale-110 transition duration-500">📊</span>
              <div className="absolute inset-0 bg-logo-red/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
            </div>
            
            <div className="p-8">
              <div className="inline-block px-3 py-1 bg-red-50 text-logo-red text-xs font-bold rounded-full mb-4">
                Системийн интеграци
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">ERP системийн холболт</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Байгууллагын хүний нөөц, санхүү, борлуулалтын тусдаа системүүдийг нэгтгэж, тайлан мэдээллийг автоматаар нэгтгэн гаргах шийдэл.
              </p>
              <div className="border-t border-gray-100 pt-4 flex flex-wrap gap-2">
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Odoo ERP</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">REST API</span>
                <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded">Python</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Дуудлага */}
      <section className="w-full max-w-4xl mx-auto mt-24 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Таны төсөл дараагийнх нь байх болно</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg font-light">
          Бид таны санааг бодит болгох технологийн шийдлийг санал болгоход бэлэн байна.
        </p>
        <Link 
          href="/contact" 
          className="inline-block px-10 py-4 bg-logo-blue text-white rounded-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:-translate-y-1"
        >
          Бидэнтэй холбогдох
        </Link>
      </section>

    </main>
  );
}