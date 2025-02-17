// components/MyComponent.jsx
import React from 'react';
import AddUserInfo from './AddUserInfor';
import DisplayInfo from './DisplayInfor';


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: [
        { id: 1, Name: "Dung", Age: 49 },
        { id: 2, Name: "Hoang", Age: 17 },
        { id: 3, Name: "Chien", Age: 32 },
      ]
    };
  }

  handleAddnewUser = (userObject) => {
    this.setState(prevState => ({
      listUser: [userObject, ...prevState.listUser]
    }));
  };

  handleDeleteUser = (userID) => {
    this.setState(prevState => ({
      listUser: prevState.listUser.filter(item => item.id !== userID)
    }));
  };

  render() {
    return (
      <div>
        <AddUserInfo handleAddnewUser={this.handleAddnewUser} />
        <hr />
        <DisplayInfo 
          listUser={this.state.listUser} 
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

export default MyComponent;