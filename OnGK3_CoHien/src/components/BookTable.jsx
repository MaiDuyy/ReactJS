import React, { useState, useEffect } from 'react';
import { useBooking } from '../contexts/BookingContext';

const BookTable = () => {
  const { availableTimes, addBooking, checkAvailability } = useBooking();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    notes: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);

 
  useEffect(() => {
    if (formData.date && formData.time && formData.guests) {
      const available = checkAvailability(formData.date, formData.time, Number(formData.guests));
      setIsAvailable(available);
      setError(available ? '' : 'Xin lỗi, thời gian này đã được đặt hoặc không đủ bàn trống.');
    }
  }, [formData.date, formData.time, formData.guests, checkAvailability]);


  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const dateInput = document.getElementById('date');
    if (dateInput) {
      dateInput.min = today;
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isAvailable) {
      setError('Không thể đặt bàn vào thời gian này. Vui lòng chọn thời gian khác.');
      return;
    }

    try {
      addBooking(formData);
      setShowSuccess(true);
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        notes: ''
      });
      setError('');
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      setError('Có lỗi xảy ra khi đặt bàn. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Đặt bàn</h2>
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
          Đặt bàn thành công! Chúng tôi sẽ liên hệ với bạn sớm.
        </div>
      )}
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg text-center">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Họ và tên
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Số điện thoại
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                Ngày
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                Giờ
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Chọn giờ</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">
              Số người
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              max="30"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">
              Ghi chú
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <button
            type="submit"
            disabled={!isAvailable}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-colors
              ${isAvailable 
                ? 'bg-primary text-white hover:bg-blue-600' 
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
          >
            Xác nhận đặt bàn
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookTable; 