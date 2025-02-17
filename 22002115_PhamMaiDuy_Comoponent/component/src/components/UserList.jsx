// UserList.js
import React, { useState } from 'react';

const UserList = ({ users, onDelete }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="user-list">
      <div className="list-header">
        <h2>User List</h2>
        <button onClick={toggleVisibility}>
          {isHidden ? "Show List" : "Hide List"}
        </button>
      </div>
      
      {!isHidden && users.map(user => (
        <div key={user.id} className="user-item">
          <div>
            <span>User name is: {user.name}</span> <br />
            <span>User Age: {user.age}</span>
          </div>
          <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;