import React from 'react';
import Contact from './Contact';

const ContactList = ({ contacts, onDeleteContact, onDeleteAllContacts }) => {
  return (
    <div style={{display : 'flex'}}>
      <button onClick={onDeleteAllContacts} style={{height: "50px"}}>Delete All Contacts</button>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
      ))}
    </div>
  );
};

export default ContactList;