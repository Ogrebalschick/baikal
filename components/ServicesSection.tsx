
'use client';

import { useState, useEffect } from 'react';

export default function ServicesSection() {
  const [selectedVehicle, setSelectedVehicle] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [currentLightboxIndex, setCurrentLightboxIndex] = useState(0);

  const vehicles = [
    {
      name: 'TANK 500',
      year: '2023',
      color: 'Золотой',
      capacity: 'до 4 мест',
      features: 'Вместительный багажник, автокресло',
      description: 'Новый премиальный внедорожник 2023 года в золотом цвете с повышенным комфортом и проходимостью',
      exteriorImage: 'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/343413c583e88da0478c6fc340a8168b.jfif',
      interiorImages: [
        'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/b59f62bc20383dc7994f8cc1f8e0a5d0.jfif',
        'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/15874399ca2512caadec2b55a596b83e.jfif',
        'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/039b319a5143d2b9a579f9b0ecbfc84b.jfif'
      ],
      priceNote: 'Премиум тариф',
      amenities: [
        'Автокресло для малыша',
        'Климат-контроль',
        'Панорамная крыша',
        'Массаж сидений',
        'Премиум аудиосистема',
        'USB зарядка'
      ]
    },
    {
      name: 'EXEED TXL',
      year: '2022',
      color: 'Серый',
      capacity: 'до 4 мест',
      features: 'Вместительный багажник, автокресло',
      description: 'Комфортабельный кроссовер 2022 года в сером цвете с современным дизайном и технологиями',
      exteriorImage: 'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/c82ef44e886a428332216c3954acb893.jfif',
      interiorImages: [
        'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/f5fe32bddbc09229a5c943726aa7a961.jfif',
        'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/5cdd876949e35688ef10351eec7b4e23.jfif',
        'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/1d0ce428d457a12098e592c519be509f.jfif'
      ],
      priceNote: 'Стандартный тариф',
      amenities: [
        'Автокресло для малыша',
        'Кондиционер',
        'Подогрев сидений',
        'Мультимедиа система',
        'Bluetooth',
        'USB зарядка'
      ]
    },
    {
      name: 'Toyota Esquire',
      year: '2019',
      color: 'Серый',
      capacity: 'до 6 мест',
      features: 'Просторный салон, автокресло',
      description: 'Надежный минивэн 2019 года для больших компаний с отличной репутацией качества Toyota',
      exteriorImage: 'https://public.readdy.ai/ai/img_res/767d4ea3-404c-44ee-8b19-0d8ec92494f4.jpg',
      interiorImages: [
        'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/18b3bdb11dc08306c20f440a9306207c.jfif',
        'https://static.readdy.ai/image/28865717ac2bd0499aa0614980ae2fbc/98d286708fbd9e1a4831d23d8e72ede2.jfif'
      ],
      priceNote: 'Групповой тариф',
      amenities: [
        'Автокресло для малыша',
        'Климат-контроль',
        'Индивидуальные столики',
        'Шторки на окнах',
        'Дополнительные сиденья',
        'Зарядные устройства'
      ]
    }
  ];

  const openLightbox = (images: string[], startIndex: number) => {
    console.log('Opening lightbox with images:', images, 'at index:', startIndex);
    setLightboxImages(images);
    setCurrentLightboxIndex(startIndex);
    setLightboxImage(images[startIndex]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    console.log('Closing lightbox');
    setLightboxImage(null);
    setLightboxImages([]);
    setCurrentLightboxIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentLightboxIndex + 1) % lightboxImages.length;
    setCurrentLightboxIndex(nextIndex);
    setLightboxImage(lightboxImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentLightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    setCurrentLightboxIndex(prevIndex);
    setLightboxImage(lightboxImages[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxImage) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, lightboxImages, currentLightboxIndex]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const scrollToBooking = (vehicleId: string) => {
    const element = document.getElementById('booking');
    element?.scrollIntoView({ behavior: 'smooth' });
    
    // Устанавливаем выбранный автомобиль в форме бронирования
    setTimeout(() => {
      const radioElement = document.querySelector(`input[name="vehicle"][value="${vehicleId}"]`) as HTMLInputElement;
      if (radioElement) {
        radioElement.checked = true;
        radioElement.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, 500);
  };

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-100 text-blue-600 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <i className="ri-car-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1.5 sm:mr-2"></i>
            Премиальный автопарк
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Наш автопарк
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Современные и надежные автомобили для комфортных поездок на Байкал
          </p>
        </div>

        {/* Мобильная версия с горизонтальной прокруткой */}
        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto gap-4 pb-4 px-1 snap-x snap-mandatory">
            {vehicles.map((vehicle, index) => (
              <div key={index} className="flex-none w-72 bg-white rounded-2xl shadow-lg overflow-hidden snap-start">
                <div className="relative overflow-hidden">
                  <img 
                    src={vehicle.exteriorImage} 
                    alt={`${vehicle.name} ${vehicle.year} ${vehicle.color} внешний вид`}
                    className="w-full h-40 object-cover object-top"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                    {vehicle.priceNote}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {vehicle.name}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-1.5">
                      <i className="ri-calendar-line w-3 h-3 flex items-center justify-center mr-1.5 text-blue-500"></i>
                      <span className="text-xs font-medium">{vehicle.year} г.</span>
                    </div>
                    <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-1.5">
                      <i className="ri-palette-line w-3 h-3 flex items-center justify-center mr-1.5 text-blue-500"></i>
                      <span className="text-xs font-medium">{vehicle.color}</span>
                    </div>
                    <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-1.5">
                      <i className="ri-user-line w-3 h-3 flex items-center justify-center mr-1.5 text-blue-500"></i>
                      <span className="text-xs font-medium">{vehicle.capacity}</span>
                    </div>
                    <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-1.5">
                      <i className="ri-suitcase-line w-3 h-3 flex items-center justify-center mr-1.5 text-blue-500"></i>
                      <span className="text-xs font-medium truncate">{vehicle.features}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                    {vehicle.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="ri-check-line w-3 h-3 flex items-center justify-center mr-1.5 text-green-500"></i>
                      Включено:
                    </h4>
                    <div className="grid grid-cols-2 gap-1">  
                      {vehicle.amenities.slice(0, 4).map((amenity, amenityIndex) => (
                        <div key={amenityIndex} className="flex items-center text-xs text-gray-600">
                          <i className="ri-check-line w-3 h-3 flex items-center justify-center mr-1 text-green-500 flex-shrink-0"></i>
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-900 mb-2 flex items-center">
                      <i className="ri-camera-line w-3 h-3 flex items-center justify-center mr-1.5"></i>
                      Салон:
                    </h4>
                    <div className="grid grid-cols-3 gap-1.5">
                      {vehicle.interiorImages.map((image, imgIndex) => (
                        <div 
                          key={imgIndex} 
                          className="relative group/img overflow-hidden rounded-lg cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            openLightbox(vehicle.interiorImages, imgIndex);
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`${vehicle.name} салон ${imgIndex + 1}`}
                            className="w-full h-16 object-cover object-top hover:scale-110 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <i className="ri-zoom-in-line text-white text-sm w-4 h-4 flex items-center justify-center"></i>
                          </div>
                          <div className="absolute bottom-0.5 right-0.5 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                            {imgIndex + 1}/{vehicle.interiorImages.length}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => scrollToBooking(['tank500', 'exeed', 'esquire'][index])}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap font-semibold shadow-lg hover:shadow-xl text-sm"
                  >
                    <span className="flex items-center justify-center">
                      <i className="ri-check-line w-4 h-4 flex items-center justify-center mr-2"></i>
                      Выбрать
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Индикатор прокрутки для мобильной версии */}
          <div className="flex justify-center space-x-2 mt-4">
            {vehicles.map((_, index) => (
              <div key={index} className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Десктопная версия - сетка */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {vehicles.map((vehicle, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={vehicle.exteriorImage} 
                  alt={`${vehicle.name} ${vehicle.year} ${vehicle.color} внешний вид`}
                  className="w-full h-36 sm:h-40 md:h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/95 backdrop-blur-sm text-gray-900 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                  {vehicle.priceNote}
                </div>
              </div>
              
              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  {vehicle.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-1.5 sm:p-2">
                    <i className="ri-calendar-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1.5 sm:mr-2 text-blue-500"></i>
                    <span className="text-xs sm:text-sm font-medium">{vehicle.year} г.</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-1.5 sm:p-2">
                    <i className="ri-palette-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1.5 sm:mr-2 text-blue-500"></i>
                    <span className="text-xs sm:text-sm font-medium">{vehicle.color}</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-1.5 sm:p-2">
                    <i className="ri-user-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1.5 sm:mr-2 text-blue-500"></i>
                    <span className="text-xs sm:text-sm font-medium">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center text-gray-600 bg-gray-50 rounded-lg p-1.5 sm:p-2">
                    <i className="ri-suitcase-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1.5 sm:mr-2 text-blue-500"></i>
                    <span className="text-xs sm:text-sm font-medium truncate">{vehicle.features}</span>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {vehicle.description}
                </p>

                {/* Удобства */}
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <i className="ri-check-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1.5 sm:mr-2 text-green-500"></i>
                    Включено в стоимость:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                    {vehicle.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center text-xs text-gray-600">
                        <i className="ri-check-line w-3 h-3 flex items-center justify-center mr-1 text-green-500 flex-shrink-0"></i>
                        <span className="truncate">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-5 md:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <i className="ri-camera-line w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center mr-1.5 sm:mr-2"></i>
                    Салон автомобиля:
                  </h4>
                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {vehicle.interiorImages.map((image, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        className="relative group/img overflow-hidden rounded-lg cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          openLightbox(vehicle.interiorImages, imgIndex);
                        }}
                      >
                        <img 
                          src={image} 
                          alt={`${vehicle.name} салон ${imgIndex + 1}`}
                          className="w-full h-16 sm:h-20 object-cover object-top hover:scale-110 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <i className="ri-zoom-in-line text-white text-sm sm:text-lg w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"></i>
                        </div>
                        <div className="absolute bottom-0.5 sm:bottom-1 right-0.5 sm:right-1 bg-black/70 text-white text-xs px-1 py-0.5 rounded">
                          {imgIndex + 1}/{vehicle.interiorImages.length}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => scrollToBooking(['tank500', 'exeed', 'esquire'][index])}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2.5 sm:py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center">
                    <i className="ri-check-line w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2"></i>
                    Выбрать автомобиль
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительный блок с общими удобствами */}
        <div className="mt-12 sm:mt-14 md:mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-blue-100">
          <div className="text-center mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center justify-center">
              <i className="ri-star-line w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center mr-2 sm:mr-3 text-blue-600"></i>
              Все необходимое для комфортного путешествия
            </h3>
            <p className="text-sm sm:text-base text-gray-600">В каждом автомобиле предусмотрено все для удобства пассажиров</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i className="ri-parent-line w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Автокресло</h4>
                <p className="text-xs sm:text-sm text-gray-600">для малыша</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i className="ri-temp-cold-line w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Климат-контроль</h4>
                <p className="text-xs sm:text-sm text-gray-600">комфортная температура</p>
              </div>
            </div>
            
            <div className="flex items-center p-3 sm:p-4 bg-white rounded-xl shadow-sm sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                <i className="ri-usb-line w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-blue-600"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">USB зарядка</h4>
                <p className="text-xs sm:text-sm text-gray-600">для всех устройств</p>
              </div>
            </div>
          </div>
        </div>

        {/* Лайтбокс для просмотра фотографий на полный экран с навигацией */}
        {lightboxImage && (
          <div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-[9999] backdrop-blur-sm"
            style={{ zIndex: 9999 }}
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-[90vh] mx-2 sm:mx-4 animate-zoom-in" onClick={(e) => e.stopPropagation()}>
              <img 
                src={lightboxImage} 
                alt="Увеличенное изображение салона"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                style={{ maxHeight: '85vh' }}
              />
              
              {/* Кнопка закрытия */}
              <button 
                onClick={closeLightbox}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white text-gray-900 hover:bg-gray-100 transition-colors rounded-full p-2 sm:p-3 shadow-lg z-10"
              >
                <i className="ri-close-line text-lg sm:text-xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
              </button>
              
              {/* Навигация по фотографиям */}
              {lightboxImages.length > 1 && (
                <>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-4 backdrop-blur-sm transition-all duration-300 z-10"
                  >
                    <i className="ri-arrow-left-line text-lg sm:text-2xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                  </button>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 sm:p-4 backdrop-blur-sm transition-all duration-300 z-10"
                  >
                    <i className="ri-arrow-right-line text-lg sm:text-2xl w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center"></i>
                  </button>
                  
                  {/* Индикатор текущего изображения */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-sm">
                    <span className="text-xs sm:text-sm font-medium">
                      {currentLightboxIndex + 1} из {lightboxImages.length}
                    </span>
                  </div>
                  
                  {/* Точки навигации */}
                  <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                    {lightboxImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentLightboxIndex(index);
                          setLightboxImage(lightboxImages[index]);
                        }}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                          index === currentLightboxIndex 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-zoom-in {
          animation: zoom-in 0.3s ease-out;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #e5e7eb 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
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
