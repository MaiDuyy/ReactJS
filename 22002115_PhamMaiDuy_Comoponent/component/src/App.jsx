// App.js
// import { useState } from 'react';
// import UserForm from './components/UserForm';
// import UserList from './components/UserList';



// function App() {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     address: 'IUH' // Giá trị mặc định theo hình ảnh
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.age) return;
    
//     const newUser = {
//       id: Date.now(),
//       ...formData
//     };
    
//     setUsers([...users, newUser]);
//     setFormData({ ...formData, name: '', age: '' });
//   };

//   const handleDelete = (userId) => {
//     setUsers(users.filter(user => user.id !== userId));
//   };

//   return (
//     <div className="container">
//       <h1>User Management</h1>
      
//       <UserForm 
//         formData={formData}
//         setFormData={setFormData}
//         onSubmit={handleSubmit}
//       />
      
//       <UserList 
//         users={users}
//         onDelete={handleDelete}
//       />
//     </div>
//   );
// }

// export default App;

// App.jsx
import React from 'react';
import MyComponent from './components/Mycomponet';


class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>User Management</h1>
        <MyComponent />
      </div>
    );
  }
}

export default App;
