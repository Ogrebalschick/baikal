
'use client';

export default function DestinationsSection() {
  const destinations = [
    {
      name: 'Остров Ольхон',
      description: 'Крупнейший остров Байкала с сакральным мысом Бурхан и знаменитой скалой Шаманка. Центр шаманизма и место силы с потрясающими закатами и видами на озеро.',
      distance: '280 км',
      time: '4 часа',
      price: '18 000₽',
      image: '/images/destinations/1.jpg'
    },
    {
      name: 'Листвянка',
      description: 'Популярный туристический поселок на берегу Байкала с нерпинарием, Байкальским музеем, рынком омуля и канатной дорогой на камень Черского.',
      distance: '65 км',
      time: '1.5 часа',
      price: '4 000₽',
      image: '/images/destinations/2.jpg'
    },
    {
      name: 'Аршан',
      description: 'Бальнеологический курорт в предгорьях Саян с целебными минеральными источниками, водопадами и чистейшим горным воздухом для оздоровления и отдыха.',
      distance: '200 км',
      time: '3 часа',
      price: '10 500₽',
      image: '/images/destinations/3.jpg'
    },
    {
      name: 'Большое Голоустное',
      description: 'Историческое сибирское село XVII века на берегу Байкала с сохранившейся деревянной архитектурой, песчаными пляжами и археологическими находками.',
      distance: '120 км',
      time: '2 часа',
      price: '6 000₽',
      image: '/images/destinations/4.jpg'
    },
    {
      name: 'Байкальск',
      description: 'Город у подножия Соболиной горы с развитой туристической инфраструктурой, горнолыжным комплексом и живописными видами на южную часть Байкала.',
      distance: '150 км',
      time: '2.5 часа',
      price: '9 500₽',
      image: '/images/destinations/5.jpg'
    },
    {
      name: 'Сахюрта (МРС)',
      description: 'Уединенная база отдыха на восточном берегу Байкала с горячими источниками, нетронутой природой и возможностью полного единения с дикой тайгой.',
      distance: '350 км',
      time: '5 часов',
      price: '14 000₽',
      image: '/images/destinations/6.jpg'
    }
  ];

  const scrollToBooking = (destinationName: string) => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
    
    // Устанавливаем выбранное направление в форме бронирования
    setTimeout(() => {
      const selectElement = document.querySelector('select[name="to"]') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = destinationName;
        selectElement.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, 500);
  };

  return (
    <section id="destinations" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Популярные направления
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Доставим вас в самые красивые и интересные места вокруг Байкала
          </p>
        </div>

        {/* Мобильная версия с горизонтальной прокруткой */}
        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto gap-4 pb-4 px-1 snap-x snap-mandatory">
            {destinations.map((destination, index) => (
              <div key={index} className="flex-none w-72 bg-white rounded-xl shadow-lg overflow-hidden snap-start">
                <div className="relative h-40">
                  <img 
                    src={destination.image} 
                    alt={destination.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full">
                    <span className="text-xs font-semibold text-gray-900">{destination.distance}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-3">
                    {destination.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-500">
                      <i className="ri-time-line w-3 h-3 flex items-center justify-center mr-1"></i>
                      <span className="text-xs">{destination.time}</span>
                    </div>
                    <span className="text-lg font-bold text-blue-600">от {destination.price}</span>
                  </div>
                  <button 
                    onClick={() => scrollToBooking(destination.name)}
                    className="w-full bg-blue-600 text-white py-2.5 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-sm font-semibold"
                  >
                    Выбрать направление
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Индикатор прокрутки */}
          <div className="flex justify-center space-x-2 mt-4">
            {destinations.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Десктопная версия - сетка */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="relative h-48">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">{destination.distance}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-500">
                    <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2"></i>
                    <span className="text-sm">{destination.time}</span>
                  </div>
                  <span className="text-xl font-bold text-blue-600">от {destination.price}</span>
                </div>
                <button 
                  onClick={() => scrollToBooking(destination.name)}
                  className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
                >
                  Выбрать направление
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Скрываем скроллбар для мобильной прокрутки */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}