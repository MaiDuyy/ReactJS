import React from 'react';

class ContactClass extends React.Component {
  render() {
    const { contact } = this.props;
    return (
      <div>
        <h2>Name: {contact.name}</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </div>
    );
  }
}

export default ContactClass;