import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form data:', formData);
    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Liên hệ</h1>
      
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">Thông tin liên hệ</h3>
          <div className="space-y-4">
            <p>
              <strong className="text-gray-700">Địa chỉ:</strong>
              <br />
              123 Đường ABC, Quận XYZ, TP. Huế
            </p>
            <p>
              <strong className="text-gray-700">Điện thoại:</strong>
              <br />
              (0234) 123 456
            </p>
            <p>
              <strong className="text-gray-700">Email:</strong>
              <br />
              info@nhahangabc.com
            </p>
            <p>
              <strong className="text-gray-700">Giờ mở cửa:</strong>
              <br />
              Thứ 2 - Chủ nhật: 10:00 - 22:00
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-6">Gửi tin nhắn cho chúng tôi</h3>
          {showSuccess && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">
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
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Tin nhắn
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6">Bản đồ</h3>
        <div className="w-full h-[450px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.3020338115697!2d107.5778321!3d16.4598096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a13915555555%3A0xa0c0c0c0c0c0c0c0!2zSHXhur8sIFRo4burYSBUaGnDqm4gSHXhur8sIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1625000000000!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Restaurant Location"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact; 