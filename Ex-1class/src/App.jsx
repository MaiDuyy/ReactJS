import React, { useState } from 'react';
import ContactList from './ex-1-class/ContactList';


const App = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' }
  ]);

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const deleteAllContacts = () => {
    setContacts([]);
  };

  return (
    <div>
      <h1>Contact List</h1>
      <ContactList
        contacts={contacts}
        onDeleteContact={deleteContact}
        onDeleteAllContacts={deleteAllContacts}
      />
    </div>
  );
};

export default App;