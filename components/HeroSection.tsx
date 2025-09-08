
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "/images/1.jpg",
      alt: "Панорамный вид на озеро Байкал"
    },
    {
      url: "/images/2.jpg",
      alt: "Зимний Байкал с ледяными образованиями"
    },
    {
      url: "/images/3.jpg",
      alt: "Поселок Листвянка на закате"
    },
    {
      url: "/images/4.jpg",
      alt: "Исторический центр Иркутска"
    },
    {
      url: "/images/5.jpg",
      alt: "Саянские горы"
    },
    {
      url: "/images/6.jpg",
      alt: "Река Ангара в тайге"
    },
    {
      url: "/images/7.jpg",
      alt: "Тункинская долина"
    },
    {
      url: "/images/8.jpg",
      alt: "Приморский хребет"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-start overflow-hidden">
      {/* SEO скрытые ключевые слова */}
      <div className="sr-only" aria-hidden="true">
        Транспорт Иркутск, Поездки Иркутск, Транспорт Байкал, Транспорт Листвянка, Транспорт Иркутская область, трансфер межгород, трансфер между городами, поездки межгород, междугородний трансфер, заказать трансфер межгород, трансфер Иркутск, трансфер Байкал, трансфер Ольхон, трансфер Листвянка, трансфер Аршан, трансфер Кырен, трансфер Байкальск, трансфер Голоустное, трансфер Мамай, трансфер Харанцы, трансфер по Иркутской области, трансфер на Байкал из Иркутска, перевозка пассажиров до 6 человек, заказать микроавтобус до 6 человек, трансфер для компании до 6 человек, Байкал, Ольхон, Харанцы, Листвянка, Мамай, Байкальск, Иркутск, Голоустное, Аршан, Кырен, Иркутская область, озеро Байкал
      </div>

      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-all duration-2000 ease-in-out transform ${
            index === currentImageIndex 
              ? 'opacity-100 z-10 scale-100' 
              : 'opacity-0 z-0 scale-105'
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%), url('${image.url}')`
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent z-15"></div>
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white animate-fade-in-up">
          <div className="mb-3 sm:mb-6 mt-8 sm:mt-16 md:mt-6">
            <div className="inline-flex items-center px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              <i className="ri-award-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1 sm:mr-2"></i>
              Лучший сервис трансферов на Байкал
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Комфортный трансфер на Байкал
          </h1>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8 opacity-90 leading-relaxed font-light">
            Надежные поездки из Иркутска на Ольхон, Листвянку, Аршан и другие красивейшие места Байкала. Опытные водители и современный автопарк.
          </p>
          <div className="flex flex-col gap-2 sm:gap-4">
            <button 
              onClick={scrollToBooking}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer whitespace-nowrap overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center justify-center">
                <i className="ri-car-line w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2"></i>
                Заказать трансфер
              </span>
            </button>
            <button 
              onClick={scrollToPricing}
              className="group relative border-2 border-white/80 text-white px-4 sm:px-8 py-2.5 sm:py-4 rounded-full text-sm sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl cursor-pointer whitespace-nowrap backdrop-blur-sm w-full sm:w-auto"
            >
              <span className="relative flex items-center justify-center">
                <i className="ri-price-tag-3-line w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2"></i>
                Узнать цены
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 z-20 grid grid-cols-4 gap-1 sm:gap-2 max-w-24 sm:max-w-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentImageIndex 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/50 hover:bg-white/70 scale-100'
            }`}
          />
        ))}
      </div>
      
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-4 h-6 sm:w-6 sm:h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-0.5 sm:w-1 h-1.5 sm:h-3 bg-white rounded-full mt-1 sm:mt-2 animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </section>
  );
}