
// import React from 'react';

// class AddUserInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       Name: '',
//       Age: '',
//       Address: 'IUH'
//     };
//   }

//   handleOnChangeInput = (event) => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddnewUser({
//       id: Math.floor(Math.random() * 1000),
//       ...this.state
//     });
//     this.setState({
//       Name: '',
//       Age: ''
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleOnSubmit} className="user-form">
//         <label >Name : {this.state.Name}</label>
//         <label >Age : {this.state.Age}</label>
//         <div>
//           <label>
//             Your name:
//             <input
//               type="text"
//               name="Name"
//               value={this.state.Name}
//               onChange={this.handleOnChangeInput}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Your Age:
//             <input
//               type="number"
//               name="Age"
//               value={this.state.Age}
//               onChange={this.handleOnChangeInput}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Address:
//             <input
//               type="text"
//               name="Address"
//               value={this.state.Address}
//               onChange={this.handleOnChangeInput}
//             />
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

// export default AddUserInfo;

import React, { useState } from 'react';

const AddUserInfo = ({ handleAddnewUser }) => {
  const [userInfo, setUserInfo] = useState({
    Name: '',
    Age: '',
    Address: 'IUH'
  });

  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    handleAddnewUser({
      id: Math.floor(Math.random() * 1000),
      ...userInfo
    });
    setUserInfo({
      Name: '',
      Age: '',
      Address: 'IUH'
    });
  };

  return (
    <form onSubmit={handleOnSubmit} className="user-form">
      <label>Name : {userInfo.Name}</label>
      <label>Age : {userInfo.Age}</label>
      <div>
        <label>
          Your name:
          <input
            type="text"
            name="Name"
            value={userInfo.Name}
            onChange={handleOnChangeInput}
          />
        </label>
      </div>
      <div>
        <label>
          Your Age:
          <input
            type="number"
            name="Age"
            value={userInfo.Age}
            onChange={handleOnChangeInput}
          />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input
            type="text"
            name="Address"
            value={userInfo.Address}
            onChange={handleOnChangeInput}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUserInfo;