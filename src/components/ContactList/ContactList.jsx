import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import s from '../Contact/Contact.module.css';

function ContactList() {
  const contacts = useSelector(state => state.contacts.items); 
  const filter = useSelector(state => state.filters.name);

  console.log(filter)

  const filtered = contacts.filter(contact => filter ? contact.name.toLowerCase().includes(filter.toLowerCase()) : true)

  return (
      <ul className={s.wrapperList}>
        {filtered.map(contact => (
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
