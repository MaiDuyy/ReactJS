// components/AddUserInfo.jsx
import React from 'react';

class AddUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Age: '',
      Address: 'IUH'
    };
  }

  handleOnChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddnewUser({
      id: Math.floor(Math.random() * 1000),
      ...this.state
    });
    this.setState({
      Name: '',
      Age: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="user-form">
        <label >Name : {this.state.Name}</label>
        <label >Age : {this.state.Age}</label>
        <div>
          <label>
            Your name:
            <input
              type="text"
              name="Name"
              value={this.state.Name}
              onChange={this.handleOnChangeInput}
            />
          </label>
        </div>
        <div>
          <label>
            Your Age:
            <input
              type="number"
              name="Age"
              value={this.state.Age}
              onChange={this.handleOnChangeInput}
            />
          </label>
        </div>
        <div>
          <label>
            Address:
            <input
              type="text"
              name="Address"
              value={this.state.Address}
              onChange={this.handleOnChangeInput}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddUserInfo;