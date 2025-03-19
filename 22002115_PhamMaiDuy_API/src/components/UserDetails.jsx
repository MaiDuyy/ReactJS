import { motion } from "framer-motion"; 
const UserDetails = ({ user, onClose }) => { 
    return ( 
      <motion.div 
        className="fixed inset-0 flex items-center justify-center 
  bg-black bg-opacity-50" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
      > 
        <motion.div 
          className="bg-white p-6 rounded shadow-lg max-w-sm w
  full" 
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          exit={{ y: 50, opacity: 0 }} 
        > 
            <img
                    src={`https://i.pravatar.cc/150?img=${user.id}`}
                    alt={`${user.name}'s Avatar`}
                    className="w-20 h-20  border"
                  />
          <h2 className="text-lg font-bold text-blue
  600">{user.name}</h2> 
  
          <p><strong>Email:</strong> {user.email}</p> 
          <p><strong>Phone:</strong> {user.phone}</p> 
          <p><strong>Website:</strong> {user.website}</p> 
          <p><strong>Company:</strong> {user.company.name}</p> 
          <button 
            className="mt-4 px-4 py-2 bg-red-500 text-white 
  rounded" 
            onClick={onClose} 
          > 
            Đóng 
          </button> 
        </motion.div> 
      </motion.div> 
    ); 
  }; 
   
  export default UserDetails; 