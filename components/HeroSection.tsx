
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "https://readdy.ai/api/search-image?query=Stunning%20panoramic%20view%20of%20Lake%20Baikal%20in%20Siberia%20Russia%20with%20crystal%20clear%20turquoise%20waters%20pristine%20wilderness%20snow-capped%20mountains%20in%20background%20dramatic%20cloudy%20sky%20golden%20hour%20lighting%20serene%20natural%20landscape%20perfect%20for%20travel%20destination%20photography%20modern%20cinematic%20style&width=1920&height=1080&seq=hero-baikal-1&orientation=landscape",
      alt: "Панорамный вид на озеро Байкал"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Beautiful%20winter%20Lake%20Baikal%20with%20frozen%20ice%20surface%20blue%20crystal%20formations%20snow%20covered%20pine%20trees%20on%20shore%20dramatic%20clouds%20and%20sunset%20colors%20magical%20winter%20wonderland%20scenery%20Siberian%20landscape%20cinematic%20photography%20style&width=1920&height=1080&seq=hero-baikal-2&orientation=landscape",
      alt: "Зимний Байкал с ледяными образованиями"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Listvyanka%20village%20Lake%20Baikal%20sunset%20golden%20hour%20wooden%20houses%20traditional%20Russian%20architecture%20lakefront%20peaceful%20evening%20atmosphere%20beautiful%20mountain%20backdrop%20reflection%20in%20water%20scenic%20destination%20travel%20photography&width=1920&height=1080&seq=hero-listvyanka-new&orientation=landscape",
      alt: "Поселок Листвянка на закате"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Irkutsk%20city%20center%20historic%20architecture%20wooden%20houses%20traditional%20Siberian%20buildings%20Angara%20river%20embankment%20sunset%20golden%20hour%20urban%20landscape%20beautiful%20old%20Russian%20city%20cultural%20heritage%20tourism%20photography&width=1920&height=1080&seq=hero-irkutsk-1&orientation=landscape",
      alt: "Исторический центр Иркутска"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Sayan%20Mountains%20Irkutsk%20Oblast%20pristine%20alpine%20meadows%20snow-capped%20peaks%20crystal%20clear%20mountain%20lakes%20untouched%20wilderness%20dramatic%20landscape%20pine%20forests%20nature%20photography%20Siberian%20mountains%20breathtaking%20scenery&width=1920&height=1080&seq=hero-sayan-1&orientation=landscape",
      alt: "Саянские горы"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Angara%20river%20Irkutsk%20Oblast%20flowing%20through%20taiga%20forest%20pristine%20wilderness%20rocky%20shores%20dense%20pine%20and%20birch%20forests%20dramatic%20cliffs%20beautiful%20Siberian%20river%20landscape%20nature%20photography%20serene%20water%20flow&width=1920&height=1080&seq=hero-angara-1&orientation=landscape",
      alt: "Река Ангара в тайге"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Tunka%20valley%20Irkutsk%20Oblast%20surrounded%20by%20Sayan%20mountains%20vast%20green%20steppes%20traditional%20Buryat%20villages%20distant%20snow-capped%20peaks%20golden%20grasslands%20dramatic%20mountain%20backdrop%20Siberian%20landscape%20photography&width=1920&height=1080&seq=hero-tunka-1&orientation=landscape",
      alt: "Тункинская долина"
    },
    {
      url: "https://readdy.ai/api/search-image?query=Primorsky%20Range%20Irkutsk%20Oblast%20dense%20taiga%20forest%20endless%20pine%20and%20fir%20trees%20rolling%20hills%20mountain%20ridges%20pristine%20wilderness%20untouched%20nature%20dramatic%20Siberian%20landscape%20green%20forest%20canopy%20aerial%20view&width=1920&height=1080&seq=hero-primorsky-1&orientation=landscape",
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