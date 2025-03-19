import React from 'react';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <div>
  

      <div style={{ border: "1px solid #ddd", padding: "15px", borderRadius: "5px", margin: "10px", width: "250px" }}>
      <h3>{contact.name}</h3>
      <p><strong>{contact.name}</strong></p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Address:</strong> {contact.email}</p>
      <button onClick={() => onDelete(contact.phone)} style={{ height:'50px',backgroundColor: "blue", color: "white", border: "none", padding: "8px", cursor: "pointer" }}>
        Delete
      </button>
    </div>
    </div>
  );
};

export default Contact;