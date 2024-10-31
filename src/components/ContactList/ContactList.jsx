import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import s from '../Contact/Contact.module.css';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items); 

  return (
      <ul className={s.wrapperList}>
        {contacts.map(contact => (
            <Contact 
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            />
        ))}
      </ul>
  );
}

export default ContactList;
