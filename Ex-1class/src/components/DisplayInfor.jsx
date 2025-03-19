

// // components/DisplayInfo.jsx
// import React from 'react';

// class DisplayInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isHidden: false
//     };
//   }

//   toggleVisibility = () => {
//     this.setState(prevState => ({
//       isHidden: !prevState.isHidden
//     }));
//   };

//   render() {
//     const { listUser, handleDeleteUser } = this.props;
//     const { isHidden } = this.state;

//     return (
//       <div className="user-list">
//         <div className="list-header">
//           <h2>User List</h2>
//           <button onClick={this.toggleVisibility}>
//             {isHidden ? "Show List" : "Hide List"}
//           </button>
//         </div>
        
//         {!isHidden && listUser.map(user => (
//           <div key={user.id} className={`user-item ${user.Age < 18 ? 'red' : 'blue'}`}>
//             <div>
//               <span>User name is: {user.Name}</span><br />
//               <span>User Age: {user.Age}</span>
//             </div>
//             <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default DisplayInfo;

import React, { useState } from 'react';

const DisplayInfo = ({ listUser, handleDeleteUser }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(prevState => !prevState);
  };

  return (
    <div className="user-list">
      <div className="list-header">
        <h2>User List</h2>
        <button onClick={toggleVisibility}>
          {isHidden ? "Show List" : "Hide List"}
        </button>
      </div>
      
      {!isHidden && listUser.map(user => (
        <div key={user.id} className={`user-item ${user.Age < 18 ? 'red' : 'blue'}`}>
          <div>
            <span>User name is: {user.Name}</span><br />
            <span>User Age: {user.Age}</span>
          </div>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default DisplayInfo;