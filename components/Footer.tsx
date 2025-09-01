
'use client';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="font-['Pacifico'] text-3xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Байкал
              </span>
              <span className="ml-2 text-xl font-semibold text-white">
                Трансфер
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Комфортные и надежные трансферы на озеро Байкал. Современный автопарк, опытные водители, индивидуальный подход к каждому клиенту.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-gray-300">
                <i className="ri-shield-check-line w-5 h-5 flex items-center justify-center mr-2 text-green-400"></i>
                <span className="text-sm">Лицензированная деятельность</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Навигация</h3>
            <ul className="space-y-3">
              {[
                { name: 'Главная', id: 'hero' },
                { name: 'Автопарк', id: 'services' },
                { name: 'Цены', id: 'pricing' },
                { name: 'Направления', id: 'destinations' },
                { name: 'Отзывы', id: 'testimonials' },
                { name: 'Бронирование', id: 'booking' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer text-sm"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Контакты</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-3 text-blue-400 mt-0.5"></i>
                <div>
                  <a href="tel:+79999999999" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                    +7 (950) 111-31-98
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Круглосуточно</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-3 text-blue-400 mt-0.5"></i>
                <div>
                  <p className="text-gray-300 text-sm">г. Иркутск</p>
                  <p className="text-xs text-gray-400 mt-1">Подача по всему городу</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-4">
                <a 
                  href="https://t.me/lekidss" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-2xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl cursor-pointer"
                >
                  <i className="ri-telegram-line text-2xl w-7 h-7 flex items-center justify-center text-white group-hover:scale-110 transition-transform"></i>
                </a>
                <a 
                  href="https://wa.me/79501113198" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl cursor-pointer"
                >
                  <i className="ri-whatsapp-line text-2xl w-7 h-7 flex items-center justify-center text-white group-hover:scale-110 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 text-sm mb-4 md:mb-0">
              <i className="ri-copyright-line w-4 h-4 flex items-center justify-center mr-2"></i>
              <span>2024 Байкал Трансфер. Все права защищены.</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2 text-blue-400"></i>
                <span>Работаем 24/7</span>
              </div>
              <div className="flex items-center">
                <i className="ri-star-fill w-4 h-4 flex items-center justify-center mr-2 text-yellow-400"></i>
                <span>Рейтинг 4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #374151 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </footer>
  );
}
