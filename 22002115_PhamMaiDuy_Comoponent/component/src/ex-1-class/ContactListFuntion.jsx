import React from 'react'
import ContactFuntion from './ContactFuntion'

const ContactListFuntion = (contacts) => {
  return (
    <div>
            {contacts.map(contact => (
              <ContactFuntion key={contact.id} contact={contact} />
            ))}
          </div>
  )
}

export default ContactListFuntion