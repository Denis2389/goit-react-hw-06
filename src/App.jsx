import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact, selectContacts } from './redux/contactsSlice';
import { changeFilter, selectNameFilter } from './redux/filtersSlice';
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      savedContacts.forEach(contact => {
        dispatch(addContact(contact));
      });
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleChangeFilter = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: 0, marginLeft: -100 }}>
        Phonebook
      </h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox value={filter} onChange={handleChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
