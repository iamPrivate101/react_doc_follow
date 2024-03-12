import { useState } from 'react';
import Chat from './Chat'
import ContactList from './ContactList'

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];

export default function ResetingAFormWithKey() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <>
      <ContactList contacts= {contacts} selectedContact = {to} onSelect={contact => setTo(contact)} />

      <Chat key={to.id} contact={to} />
    </>
  )
}
