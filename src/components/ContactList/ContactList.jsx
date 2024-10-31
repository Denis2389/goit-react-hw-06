import Contact from "../Contact/Contact"
import s from '../Contact/Contact.module.css'
/* eslint-disable react/prop-types */

function ContactList({ contacts, onDelete }) {
  return (
      <ul className={s.wrapperList}>
        {contacts.map(contact => (
            <Contact 
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => onDelete(contact.id)}
            />
        ))}
      </ul>
  );
}

export default ContactList