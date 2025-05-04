import { useState, useEffect } from 'react';
import { FiSearch, FiBook, FiClock, FiKey, FiBell, FiCalendar, FiRefreshCw, FiBookmark, FiPrinter } from 'react-icons/fi';

const ReaderDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [notifications, setNotifications] = useState([]);
  const [currentBooks, setCurrentBooks] = useState([]);
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [events, setEvents] = useState([]);

  // Mock data - in real app you would fetch from API
  useEffect(() => {
    setNotifications([
      { id: 1, message: 'Sách "Clean Code" sắp hết hạn trả (02/05/2023)', read: false },
      { id: 2, message: 'Thư viện sẽ đóng cửa ngày 30/04', read: true }
    ]);

    setCurrentBooks([
      { id: 1, title: 'Clean Code', author: 'Robert Martin', dueDate: '02/05/2023', cover: '/covers/clean-code.jpg' },
      { id: 2, title: 'Design Patterns', author: 'GoF', dueDate: '15/05/2023', cover: '/covers/design-patterns.jpg' }
    ]);

    setRecommendedBooks([
      { id: 3, title: 'Refactoring', author: 'Martin Fowler', cover: '/covers/refactoring.jpg' },
      { id: 4, title: 'The Pragmatic Programmer', author: 'Andrew Hunt', cover: '/covers/pragmatic.jpg' },
      { id: 5, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', cover: '/covers/js-good-parts.jpg' }
    ]);

    setEvents([
      { id: 1, title: 'Workshop ReactJS', date: '15/05/2023' },
      { id: 2, title: 'Giới thiệu sách mới', date: '20/05/2023' }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Thư viện Đại học XYZ</h1>
          <div className="flex items-center space-x-4">
            <FiBell className="text-xl cursor-pointer" />
            <span className="font-medium">Nguyễn Văn A</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-600 font-bold">
              N
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - 3 Column Layout */}
      <main className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
        {/* Column 1 - Left (25%) */}
        <div className="w-full md:w-1/4 space-y-6">
          {/* User Profile */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-3 overflow-hidden">
                <img src="/avatars/user.jpg" alt="User" className="w-full h-full object-cover" />
              </div>
              <h2 className="font-bold text-lg">Nguyễn Văn A</h2>
              <p className="text-gray-600">Mã thẻ: TV2023001</p>
              <p className="text-sm text-gray-500">Hết hạn: 31/12/2023</p>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="bg-white p-4 rounded-lg shadow">
            <nav>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => setActiveTab('search')}
                    className={`w-full flex items-center p-2 rounded ${activeTab === 'search' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
                  >
                    <FiSearch className="mr-2" /> Tìm sách
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('borrowed')}
                    className={`w-full flex items-center p-2 rounded ${activeTab === 'borrowed' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
                  >
                    <FiBook className="mr-2" /> Sách đang mượn
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('history')}
                    className={`w-full flex items-center p-2 rounded ${activeTab === 'history' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
                  >
                    <FiClock className="mr-2" /> Lịch sử mượn
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center p-2 rounded ${activeTab === 'settings' ? 'bg-green-100 text-green-700' : 'hover:bg-gray-100'}`}
                  >
                    <FiKey className="mr-2" /> Đổi mật khẩu
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Notifications */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold flex items-center">
                <FiBell className="mr-2" /> Thông báo
                {notifications.filter(n => !n.read).length > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {notifications.filter(n => !n.read).length}
                  </span>
                )}
              </h3>
              <button className="text-sm text-gray-500">Xem tất cả</button>
            </div>
            <ul className="space-y-2">
              {notifications.slice(0, 3).map(notification => (
                <li 
                  key={notification.id} 
                  className={`p-2 text-sm rounded ${!notification.read ? 'bg-blue-50' : ''}`}
                >
                  {notification.message}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Column 2 - Middle (50%) */}
        <div className="w-full md:w-2/4 space-y-6">
          {/* Quick Search */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm sách..."
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FiSearch className="absolute left-3 top-3.5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-sm text-gray-500">Gợi ý:</span>
              <button className="text-sm bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">JavaScript</button>
              <button className="text-sm bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">React</button>
              <button className="text-sm bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded">Design Patterns</button>
            </div>
          </div>

          {/* Currently Borrowed Books */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">Sách đang mượn</h3>
              <button className="text-sm text-green-600 hover:underline">Xem tất cả</button>
            </div>
            <div className="space-y-4">
              {currentBooks.map(book => (
                <div key={book.id} className="flex gap-4 p-2 hover:bg-gray-50 rounded">
                  <div className="w-16 h-20 bg-gray-200 rounded overflow-hidden">
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{book.title}</h4>
                    <p className="text-sm text-gray-600">{book.author}</p>
                    <p className={`text-sm mt-1 ${new Date(book.dueDate) < new Date() ? 'text-red-500' : 'text-gray-500'}`}>
                      Hạn trả: {book.dueDate}
                    </p>
                  </div>
                  <button className="self-center text-sm text-green-600 hover:underline">Gia hạn</button>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Books */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">Sách đề xuất</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {recommendedBooks.map(book => (
                <div key={book.id} className="cursor-pointer group">
                  <div className="w-full h-40 bg-gray-200 rounded overflow-hidden mb-2">
                    <img 
                      src={book.cover} 
                      alt={book.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <h4 className="font-medium text-sm group-hover:text-green-600">{book.title}</h4>
                  <p className="text-xs text-gray-600">{book.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Column 3 - Right (25%) */}
        <div className="w-full md:w-1/4 space-y-6">
          {/* Personal Stats */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-3">Thống kê cá nhân</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Sách đang mượn</span>
                  <span className="font-medium">2/5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Sách đã mượn</span>
                  <span className="font-medium">24</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Sách trả trễ</span>
                  <span className="font-medium text-red-500">1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Library Events */}
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg">Sự kiện thư viện</h3>
              <button className="text-sm text-green-600 hover:underline">Xem tất cả</button>
            </div>
            <div className="space-y-3">
              {events.map(event => (
                <div key={event.id} className="p-2 border border-gray-100 rounded hover:bg-gray-50">
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-gray-500 flex items-center">
                    <FiCalendar className="mr-1" /> {event.date}
                  </p>
                  <button className="mt-2 text-xs bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded">
                    Đăng ký
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-3">Thao tác nhanh</h3>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center p-2 bg-gray-50 hover:bg-green-50 rounded-lg">
                <FiRefreshCw className="text-green-600 text-xl mb-1" />
                <span className="text-xs">Gia hạn sách</span>
              </button>
              <button className="flex flex-col items-center p-2 bg-gray-50 hover:bg-green-50 rounded-lg">
                <FiBookmark className="text-green-600 text-xl mb-1" />
                <span className="text-xs">Đặt mượn trước</span>
              </button>
              <button className="flex flex-col items-center p-2 bg-gray-50 hover:bg-green-50 rounded-lg">
                <FiPrinter className="text-green-600 text-xl mb-1" />
                <span className="text-xs">In thẻ thư viện</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-6 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-3 md:mb-0">
              <h4 className="font-bold">Lịch trả sách</h4>
              <div className="flex space-x-1 mt-2">
                {[1, 2, 3, 4, 5].map(day => (
                  <div 
                    key={day} 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm 
                      ${day === 2 ? 'bg-red-100 text-red-600 border border-red-300' : 'hover:bg-gray-100'}`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-600">© 2023 Thư viện Đại học XYZ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ReaderDashboard;