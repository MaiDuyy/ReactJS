import React, { useState } from "react";

const initialUsers = [
  {
    firstName: "Chidi",
    lastName: "Anagonye",
    phone: "555-366-8987",
    address: "St. John's University, Sydney, Australia",
  },
  {
    firstName: "Eleanor",
    lastName: "Shellstrop",
    phone: "555-483-1457",
    address: "335 Avalon St, Apt 2C, Pheonix, Arizona",
  },
  {
    firstName: "Tahani",
    lastName: "Al-Jamil",
    phone: "555-276-7991",
    address: "1 Lancaster Terrace, London, England",
  },
  {
    firstName: "Jason",
    lastName: "Mendoza",
    phone: "555-113-8388",
    address: "779 William St, Miami, Florida",
  },
];

const UserCard = ({ user, onDelete }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px", margin: "10px", width: "250px" }}>
      <h3>{user.firstName}</h3>
      <p><strong>{user.lastName}</strong></p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <button onClick={() => onDelete(user.phone)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "8px", cursor: "pointer" }}>
        Delete
      </button>
    </div>
  );
};

const UserList = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (phone) => {
    setUsers(users.filter(user => user.phone !== phone));
  };

  const handleDeleteAll = () => {
    setUsers([]); // Xóa toàn bộ danh sách
  };

  return (
    <div>
      <div style={{ marginBottom: "15px" }}>
        <button 
          onClick={handleDeleteAll} 
          style={{ backgroundColor: "red", color: "white", border: "none", padding: "10px", cursor: "pointer", fontSize: "16px" }}>
          Delete All
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {users.map(user => (
          <UserCard key={user.phone} user={user} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default UserList;