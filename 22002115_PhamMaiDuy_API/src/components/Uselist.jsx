import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUsers } from "../context/UserProvider";
import UserDetails from "./UserDetails";
import { Search } from "lucide-react";

function Uselist() {
  const { users, loading } = useUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const usersPerPage = 5;


  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="p-6 bg-gray-10 min-h-screen">
  <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Danh sách người dùng</h2>
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="border border-gray-300 rounded-lg p-3 w-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
      </div>

      {loading ? (
        <p className="text-center text-gray-500 animate-pulse">
          Đang tải dữ liệu...
        </p>
      ) : (
        <>

          <ul className="space-y-4">
            <AnimatePresence>
              {currentUsers.map((user) => (
                <motion.li
                  key={user.id}
                  className="p-4 border rounded-lg shadow-md bg-white hover:bg-blue-50 cursor-pointer flex items-center space-x-4"
                  onClick={() => setSelectedUser(user)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
  
                  <img
                    src={`https://i.pravatar.cc/150?img=${user.id}`}
                    alt={`${user.name}'s Avatar`}
                    className="w-12 h-12 rounded-full border"
                  />
           
                  <div>
                    <h2 className="font-bold text-gray-800">{user.name}</h2>
                    <p className="text-gray-600">Email: {user.email}</p>
                    <p className="text-gray-600">City: {user.address.city}</p>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>

      
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from(
              { length: Math.ceil(filteredUsers.length / usersPerPage) },
              (_, index) => (
                <motion.button
                  key={index}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-600"
                  } hover:bg-blue-100 transition-colors duration-200`}
                  onClick={() => setCurrentPage(index + 1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index + 1}
                </motion.button>
              )
            )}
          </div>
        </>
      )}


      <AnimatePresence>
        {selectedUser && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Uselist;
