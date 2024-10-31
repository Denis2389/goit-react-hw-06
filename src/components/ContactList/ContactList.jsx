import Contact from "../Contact/Contact";
import s from '../Contact/Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { deleteContact } from '../../redux/contactsSlice';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={s.wrapperList}>
      {filteredContacts.map(contact => (
        <Contact 
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={() => handleDelete(contact.id)}
        />
      ))}
    </ul>
  );
}

export default ContactList;
