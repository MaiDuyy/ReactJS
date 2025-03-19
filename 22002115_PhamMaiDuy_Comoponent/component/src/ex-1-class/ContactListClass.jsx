import React from 'react';
import ContactClass from './ContactClass';


class ContactList extends React.Component {
  render() {
    const { contacts } = this.props;
    return (
      <div>
        {contacts.map(contact => (
          <ContactClass key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default ContactList;