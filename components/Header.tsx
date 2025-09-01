
'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      return;
    }
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          <div className="flex items-center">
            {/* Логотип */}
            <div className="relative mr-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg ${
                isScrolled 
                  ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500' 
                  : 'bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-400'
              }`}>
                <div className="relative w-8 h-8">
                  {/* Стилизованная буква "Б" с элементами природы */}
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-white">
                    {/* Основа буквы Б */}
                    <path d="M6 4V28H18C21 28 24 26 24 22C24 20 23 18 21 17C22.5 16 23.5 14 23.5 12C23.5 8 20.5 4 17 4H6Z" fill="currentColor"/>
                    <path d="M10 8H16C17.5 8 19 9 19 11C19 13 17.5 14 16 14H10V8Z" fill="rgba(255,255,255,0.3)"/>
                    <path d="M10 18H17C18.5 18 20 19 20 21C20 23 18.5 24 17 24H10V18Z" fill="rgba(255,255,255,0.3)"/>
                    
                    {/* Декоративные элементы - волны Байкала */}
                    <path d="M26 8C28 6 30 10 32 8" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6"/>
                    <path d="M26 12C28 10 30 14 32 12" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4"/>
                    
                    {/* Маленькие точки - звезды/снежинки */}
                    <circle cx="28" cy="16" r="1" fill="currentColor" opacity="0.7"/>
                    <circle cx="26" cy="20" r="0.8" fill="currentColor" opacity="0.5"/>
                  </svg>
                </div>
              </div>
              
              {/* Световой эффект */}
              <div className={`absolute -inset-1 rounded-2xl blur-sm opacity-30 transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gradient-to-br from-emerald-500 via-teal-500 to-blue-500' 
                  : 'bg-gradient-to-br from-emerald-400 via-teal-400 to-blue-400'
              }`}></div>
            </div>
            
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <span className="font-['Pacifico'] text-3xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Байкал
              </span>
              <span className={`ml-2 font-semibold ${isScrolled ? 'text-gray-700' : 'text-white/90'}`}>
                Трансфер
              </span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-1">
            {[
              { name: 'Главная', id: 'hero', icon: 'ri-home-line' },
              { name: 'Автопарк', id: 'services', icon: 'ri-car-line' },
              { name: 'Цены', id: 'pricing', icon: 'ri-price-tag-line' },
              { name: 'Направления', id: 'destinations', icon: 'ri-map-pin-line' },
              { name: 'Отзывы', id: 'testimonials', icon: 'ri-chat-smile-line' },
              { name: 'Бронирование', id: 'booking', icon: 'ri-calendar-check-line' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <i className={`${item.icon} w-4 h-4 flex items-center justify-center mr-2 group-hover:scale-110 transition-transform`}></i>
                {item.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel://+79501113198" 
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <i className="ri-phone-line w-4 h-4 flex items-center justify-center mr-2"></i>
              +7 (950) 111-31-98
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-full transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20 backdrop-blur-sm'
            }`}
          >
            <i className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
              isMobileMenuOpen ? 'ri-close-line rotate-180' : 'ri-menu-line'
            }`}></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-200/20 animate-slide-down">
            <div className="px-4 py-6 space-y-2">
              {[
                { name: 'Главная', id: 'hero', icon: 'ri-home-line' },
                { name: 'Автопарк', id: 'services', icon: 'ri-car-line' },
                { name: 'Цены', id: 'pricing', icon: 'ri-price-tag-line' },
                { name: 'Направления', id: 'destinations', icon: 'ri-map-pin-line' },
                { name: 'Отзывы', id: 'testimonials', icon: 'ri-chat-smile-line' },
                { name: 'Бронирование', id: 'booking', icon: 'ri-calendar-check-line' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full flex items-center px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <i className={`${item.icon} w-5 h-5 flex items-center justify-center mr-3`}></i>
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a 
                  href="tel://+79501113198" 
                  className="w-full flex items-center px-4 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors cursor-pointer"
                >
                  <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-3"></i>
                  +7 (950) 111-31-98
                </a>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes slide-down {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-slide-down {
            animation: slide-down 0.3s ease-out;
          }
        `}</style>
      </div>
    </header>
  );
}
