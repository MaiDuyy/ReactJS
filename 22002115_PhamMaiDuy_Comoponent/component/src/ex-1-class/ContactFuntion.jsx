import React from 'react';

const ContactFuntion = ({ contact }) => {
  return (
    <div>
      <h2>Name: {contact.name}</h2>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
    </div>
  );
};

export default ContactFuntion;