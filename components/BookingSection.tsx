
'use client';

import { useState } from 'react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    from: 'Иркутск',
    to: '',
    passengers: '1',
    date: '',
    time: '',
    name: '',
    phone: '',
    vehicle: '',
    returnTrip: false,
    returnDate: '',
    returnTime: '',
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const destinations = [
    'Остров Ольхон',
    'Листвянка',
    'Аршан',
    'Большое Голоустное',
    'Байкальск',
    'Сахюрта (МРС)',
    'Мамай',
    'Кырен',
    'Харанцы',
    'Ангарск',
    'Кабанск',
    'Слюдянка',
    'Утулик',
    'Северобайкальск',
    'Нижнеангарск'
  ];

  const vehicles = [
    {
      id: 'tank500',
      name: 'TANK 500',
      capacity: 'до 4 мест',
      badge: 'Премиум'
    },
    {
      id: 'exeed',
      name: 'EXEED TXL',
      capacity: 'до 4 мест',
      badge: 'Стандарт'
    },
    {
      id: 'esquire',
      name: 'Toyota Esquire',
      capacity: 'до 6 мест',
      badge: 'Групповой'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const selectedVehicle = vehicles.find(v => v.id === formData.vehicle);
  
      // ✨ Текст для телеграма
      const message = `
  🚖 Новая заявка на трансфер:
  ------------------------------
  📍 Откуда: ${formData.from}
  📍 Куда: ${formData.to}
  👥 Пассажиров: ${formData.passengers}
  📅 Дата: ${formData.date}
  ⏰ Время: ${formData.time}
  🙍 Имя: ${formData.name}
  📞 Телефон: ${formData.phone}
  🚗 Авто: ${selectedVehicle?.name || 'Не выбран'} (${selectedVehicle?.badge || ''})
  🔄 Обратный трансфер: ${formData.returnTrip ? 'Да' : 'Нет'}
  ${formData.returnTrip ? `📅 Дата обратно: ${formData.returnDate}\n⏰ Время обратно: ${formData.returnTime}` : ''}
  💬 Комментарий: ${formData.comment || '—'}
      `;
  
      // ⚡️ Заменить на твои данные
      const TELEGRAM_BOT_TOKEN = "8431554708:AAEjeUCOm0fDPu9gXJfUE3SxPq-Z7uun--g";
      const CHAT_ID = "-4845910441";
  
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message,
          // убираем parse_mode или можно поставить "HTML"
        })
      });
      
  
      if (!response.ok) throw new Error("Ошибка Telegram API");
  
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
      setFormData({
        from: 'Иркутск',
        to: '',
        passengers: '1',
        date: '',
        time: '',
        name: '',
        phone: '',
        vehicle: '',
        returnTrip: false,
        returnDate: '',
        returnTime: '',
        comment: ''
      });
  
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Ошибка при отправке заявки. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const value = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <section id="booking" className="py-12 sm:py-14 md:py-16 bg-gradient-to-br from-blue-900 to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Забронировать трансфер
          </h2>
          <p className="text-base sm:text-lg text-blue-100">
            Заполните форму и мы свяжемся с вами в течение 15 минут
          </p>
        </div>

        <form id="booking-form" data-readdy-form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-white/20">

          {/* Выбор автомобиля */}
          <div className="mb-5 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
              <i className="ri-car-line w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mr-2"></i>
              Выберите автомобиль
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {vehicles.map((vehicle) => (
                <label key={vehicle.id} className="cursor-pointer">
                  <input
                    type="radio"
                    name="vehicle"
                    value={vehicle.id}
                    checked={formData.vehicle === vehicle.id}
                    onChange={handleChange}
                    className="sr-only"
                    required
                  />
                  <div className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 ${formData.vehicle === vehicle.id
                    ? 'border-blue-400 bg-blue-500/20'
                    : 'border-white/30 bg-white/5 hover:border-white/50'
                    }`}>
                    <div className="flex justify-between items-start mb-1 sm:mb-2">
                      <h4 className="font-bold text-xs sm:text-sm">{vehicle.name}</h4>
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs bg-white/20">
                        {vehicle.badge}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300">{vehicle.capacity}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2">Откуда</label>
              <input
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                readOnly
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2">Куда</label>
              <select
                name="to"
                value={formData.to}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 pr-8 text-sm sm:text-base"
              >
                <option value="">Выберите направление</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest} className="text-gray-900 bg-white">{dest}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2">Пассажиров</label>
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 pr-8 text-sm sm:text-base"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num} className="text-gray-900 bg-white">{num}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2">Дата</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2">Время</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2">Ваше имя</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                placeholder="Введите имя"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium mb-2">Телефон</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                placeholder="+7 (___) ___-__-__"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-center space-x-2 sm:space-x-3 cursor-pointer p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/20 hover:bg-white/10 transition-all">
                <input
                  type="checkbox"
                  name="returnTrip"
                  checked={formData.returnTrip}
                  onChange={handleChange}
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 bg-white/20 border-white/30 rounded focus:ring-blue-500"
                />
                <span className="text-xs sm:text-sm">Нужен обратный трансфер</span>
              </label>
            </div>

            {formData.returnTrip && (
              <>
                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Дата обратно</label>
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    min={formData.date}
                    className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium mb-2">Время обратно</label>
                  <input
                    type="time"
                    name="returnTime"
                    value={formData.returnTime}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base"
                  />
                </div>
              </>
            )}

            <div className="sm:col-span-2">
              <label className="block text-xs sm:text-sm font-medium mb-2">Комментарий</label>
              <textarea
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                rows={2}
                maxLength={500}
                className="w-full px-3 py-2.5 sm:py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none text-sm sm:text-base"
                placeholder="Особые пожелания..."
              ></textarea>
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting || showSuccess}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-base sm:text-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap disabled:opacity-50 flex items-center justify-center mx-auto w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <i className="ri-loader-4-line w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin"></i>
                  Отправляем...
                </>
              ) : showSuccess ? (
                <>
                  <i className="ri-check-line w-4 h-4 sm:w-5 sm:h-5 mr-2"></i>
                  Отправлено!
                </>
              ) : (
                <>
                  <i className="ri-send-plane-line w-4 h-4 sm:w-5 sm:h-5 mr-2"></i>
                  Забронировать
                </>
              )}
            </button>

            {showSuccess && (
              <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-green-500/20 border border-green-400/30 rounded-xl">
                <p className="text-green-200 text-xs sm:text-sm">
                  Заявка отправлена! Мы свяжемся с вами в течение 15 минут.
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
