
'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [selectedTab, setSelectedTab] = useState('all');

  const routes = [
    { destination: 'Ольхон (Хужир)', exeedPrice: '18 000₽', tankPrice: '21 000₽', distance: '280 км', category: 'popular' },
    { destination: 'МРС (Сахюрта)', exeedPrice: '14 000₽', tankPrice: '17 000₽', distance: '220 км', category: 'popular' },
    { destination: 'Листвянка', exeedPrice: '4 000₽', tankPrice: '5 000₽', distance: '70 км', category: 'popular' },
    { destination: 'Аршан', exeedPrice: '10 500₽', tankPrice: '12 500₽', distance: '200 км', category: 'popular' },
    { destination: 'Кырен', exeedPrice: '10 500₽', tankPrice: '12 500₽', distance: '190 км', category: 'standard' },
    { destination: 'Байкальск', exeedPrice: '9 500₽', tankPrice: '11 500₽', distance: '160 км', category: 'standard' },
    { destination: 'Кабанск', exeedPrice: '18 000₽', tankPrice: '21 000₽', distance: '290 км', category: 'standard' },
    { destination: 'Ангарск', exeedPrice: '3 000₽', tankPrice: '4 000₽', distance: '50 км', category: 'city' },
    { destination: 'Большое Голоустное', exeedPrice: '6 000₽', tankPrice: '7 500₽', distance: '120 км', category: 'standard' },
    { destination: 'Мамай', exeedPrice: '12 000₽', tankPrice: '15 000₽', distance: '230 км', category: 'standard' },
    { destination: 'Харанцы', exeedPrice: '8 000₽', tankPrice: '10 000₽', distance: '140 км', category: 'standard' },
    { destination: 'Слюдянка', exeedPrice: '11 000₽', tankPrice: '13 500₽', distance: '180 км', category: 'standard' },
    { destination: 'Утулик', exeedPrice: '13 000₽', tankPrice: '16 000₽', distance: '210 км', category: 'standard' },
    { destination: 'Северобайкальск', exeedPrice: '25 000₽', tankPrice: '30 000₽', distance: '450 км', category: 'long' },
    { destination: 'Нижнеангарск', exeedPrice: '28 000₽', tankPrice: '33 000₽', distance: '480 км', category: 'long' }
  ];

  const filteredRoutes = selectedTab === 'all' ? routes : routes.filter(route => route.category === selectedTab);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-12 sm:py-14 md:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
            Тарифы трансфера
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Фиксированные цены без доплат. В стоимость включена подача и ожидание до 30 минут.
          </p>
        </div>

        {/* Компактные фильтры */}
        <div className="flex justify-center mb-6 sm:mb-8 gap-1 sm:gap-2 overflow-x-auto pb-2">
          {[
            { id: 'all', name: 'Все' },
            { id: 'popular', name: 'Популярные' },
            { id: 'city', name: 'Городские' },
            { id: 'standard', name: 'Стандартные' },
            { id: 'long', name: 'Дальние' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap flex-shrink-0 ${
                selectedTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Мобильная версия с горизонтальной прокруткой */}
        <div className="sm:hidden mb-6">
          <div className="flex overflow-x-auto gap-3 pb-4 px-1 snap-x snap-mandatory">
            {filteredRoutes.map((route, index) => (
              <div key={index} className="flex-none w-64 bg-white rounded-lg shadow-sm border border-gray-100 p-4 snap-start">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{route.destination}</h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded ml-2 flex-shrink-0">{route.distance}</span>
                </div>
                <div className="space-y-2">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">EXEED / Toyota</p>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full font-semibold text-sm">
                      {route.exeedPrice}
                    </span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">TANK 500</p>
                    <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-semibold text-sm">
                      {route.tankPrice}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Индикатор прокрутки */}
          <div className="flex justify-center space-x-1 mt-2">
            {Array.from({ length: Math.ceil(filteredRoutes.length / 3) }).map((_, index) => (
              <div key={index} className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Десктопная версия - таблица */}
        <div className="hidden sm:block bg-white rounded-lg shadow-sm overflow-hidden mb-6 sm:mb-8">
          <div className="bg-gray-100 px-4 py-3">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700">
              <div>Направление</div>
              <div className="text-center">EXEED / Toyota</div>
              <div className="text-center">TANK 500</div>
              <div className="text-center">Расстояние</div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
            {filteredRoutes.map((route, index) => (
              <div key={index} className="grid grid-cols-4 gap-4 px-4 py-3 text-sm hover:bg-gray-50">
                <div className="font-medium text-gray-900">
                  {route.destination}
                </div>
                <div className="text-center">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                    {route.exeedPrice}
                  </span>
                </div>
                <div className="text-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                    {route.tankPrice}
                  </span>
                </div>
                <div className="text-center text-gray-600">
                  {route.distance}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Краткие преимущества */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="text-center bg-white p-3 sm:p-4 rounded-lg shadow-sm">
            <i className="ri-price-tag-line text-xl sm:text-2xl text-blue-600 mb-2 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mx-auto"></i>
            <h3 className="font-semibold mb-1 text-sm sm:text-base">Без доплат</h3>
            <p className="text-xs sm:text-sm text-gray-600">Фиксированная стоимость</p>
          </div>
          <div className="text-center bg-white p-3 sm:p-4 rounded-lg shadow-sm">
            <i className="ri-time-line text-xl sm:text-2xl text-green-600 mb-2 w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mx-auto"></i>
            <h3 className="font-semibold mb-1 text-sm sm:text-base">Ожидание 30 мин</h3>
            <p className="text-xs sm:text-sm text-gray-600">Бесплатно включено</p>
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center">
          <p className="text-gray-500 mb-3 sm:mb-4 text-xs sm:text-sm">
            Цены за поездку в одну сторону из Иркутска
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <button 
              onClick={scrollToBooking}
              className="bg-blue-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap text-sm sm:text-base w-full sm:w-auto"
            >
              Заказать трансфер
            </button>
            <a 
              href="tel:+79501113198" 
              className="bg-gray-100 text-gray-700 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap text-sm sm:text-base w-full sm:w-auto"
            >
              +7 (950) 111-31-98
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
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