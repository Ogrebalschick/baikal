
'use client';

import { useState } from 'react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Анна Петрова',
      location: 'Москва',
      rating: 5,
      text: 'Отличный сервис! Водитель приехал точно вовремя, автомобиль чистый и комфортный. Однозначно рекомендую!',
      destination: 'Ольхон',
      avatar: '/images/testimonials/1.jpg'
    },
    {
      name: 'Михаил Сидоров',
      location: 'Санкт-Петербург',
      rating: 5,
      text: 'Ездили компанией из 6 человек на Аршан. Микроавтобус просторный, кондиционер работал отлично. Цена очень адекватная. Спасибо за комфортную поездку!',
      destination: 'Аршан',
      avatar: '/images/testimonials/2.jpg'
    },
    {
      name: 'Елена Козлова',
      location: 'Новосибирск',
      rating: 5,
      text: 'Пользуюсь услугами уже третий раз. Всегда пунктуальны, вежливые водители, честные цены. Это единственная компания, которой я доверяю поездки на Байкал.',
      destination: 'Листвянка',
      avatar: '/images/testimonials/3.jpg'
    },
    {
      name: 'Дмитрий Волков',
      location: 'Екатеринбург',
      rating: 5,
      text: 'Заказывал VIP трансфер для деловой поездки. Автомобиль премиум-класса, подача точно вовремя. Сервис на высшем уровне!',
      destination: 'Байкальск',
      avatar: '/images/testimonials/4.jpg'
    },
    {
      name: 'Ольга Морозова',
      location: 'Красноярск',
      rating: 5,
      text: 'Семьей ездили в Большое Голоустное. Детям понравилась поездка, водитель очень терпеливый и аккуратный. Автомобиль оборудован детскими креслами.',
      destination: 'Большое Голоустное',
      avatar: '/images/testimonials/5.jpg'
    },
    {
      name: 'Александр Попов',
      location: 'Иркутск',
      rating: 5,
      text: 'Местный житель, но иногда нужен трансфер для гостей. БайкалТрансфер - моя первая рекомендация всем приезжающим. Надежно и качественно!',
      destination: 'Сахюрта',
      avatar: '/images/testimonials/6.jpg'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <i key={index} className={`ri-star-${index < rating ? 'fill' : 'line'} text-yellow-400`}></i>
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/30"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-medium mb-6 shadow-lg">
            <i className="ri-chat-heart-line w-5 h-5 flex items-center justify-center mr-2"></i>
            Отзывы наших клиентов
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
            Что говорят о нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Более 2000 довольных клиентов выбирают наш сервис для поездок на Байкал
          </p>
        </div>

        <div className="relative">
          {/* Мобильная версия - один отзыв */}
          <div className="md:hidden">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 mx-4">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover object-top border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center border-3 border-white shadow-lg">
                    <i className="ri-check-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <div className="flex items-center text-gray-500 text-sm">
                    <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-1"></i>
                    {testimonials[currentIndex].location}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
                <span className="text-sm text-blue-700 bg-gradient-to-r from-blue-100 to-indigo-100 px-3 py-1 rounded-full font-medium shadow-sm">
                  {testimonials[currentIndex].destination}
                </span>
              </div>
              
              <div className="relative">
                <i className="ri-double-quotes-l absolute -top-2 -left-2 text-4xl text-blue-200"></i>
                <p className="text-gray-700 leading-relaxed font-medium relative z-10 pl-4">
                  {testimonials[currentIndex].text}
                </p>
                <i className="ri-double-quotes-r absolute -bottom-2 -right-2 text-4xl text-blue-200"></i>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-sm text-gray-500">
                <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2"></i>
                Проверенный отзыв
              </div>
            </div>

            {/* Кнопки навигации для мобильной версии */}
            <div className="flex justify-between items-center mt-6 px-4">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer border border-white/50"
              >
                <i className="ri-arrow-left-line text-xl text-gray-700"></i>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer shadow-lg ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 scale-125' 
                        : 'bg-white/70 hover:bg-white/90 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer border border-white/50"
              >
                <i className="ri-arrow-right-line text-xl text-gray-700"></i>
              </button>
            </div>
          </div>

          {/* Десктопная версия - три отзыва */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover object-top border-4 border-white shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center border-3 border-white shadow-lg">
                        <i className="ri-check-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <div className="flex items-center text-gray-500 text-sm">
                        <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-1"></i>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <span className="text-sm text-blue-700 bg-gradient-to-r from-blue-100 to-indigo-100 px-4 py-2 rounded-full font-medium shadow-sm">
                      {testimonial.destination}
                    </span>
                  </div>
                  
                  <div className="relative">
                    <i className="ri-double-quotes-l absolute -top-2 -left-2 text-4xl text-blue-200"></i>
                    <p className="text-gray-700 leading-relaxed font-medium relative z-10 pl-4">
                      {testimonial.text}
                    </p>
                    <i className="ri-double-quotes-r absolute -bottom-2 -right-2 text-4xl text-blue-200"></i>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-sm text-gray-500">
                    <i className="ri-time-line w-4 h-4 flex items-center justify-center mr-2"></i>
                    Проверенный отзыв
                  </div>
                </div>
              ))}
            </div>

            {/* Кнопки навигации для десктопа */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer border border-white/50"
            >
              <i className="ri-arrow-left-line text-2xl text-gray-700"></i>
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-xl flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer border border-white/50"
            >
              <i className="ri-arrow-right-line text-2xl text-gray-700"></i>
            </button>

            {/* Индикаторы для десктопа */}
            <div className="flex justify-center mt-12 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer shadow-lg ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-600 scale-125' 
                      : 'bg-white/70 hover:bg-white/90 hover:scale-110'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
