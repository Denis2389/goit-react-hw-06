import ContactForm from "./components/ContactForm/ContactForm"
import SearchBox from "./components/SearchBox/SearchBox"
import ContactList from "./components/ContactList/ContactList"
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, selectContacts } from './redux/contactsSlice';
import { changeFilter, selectNameFilter } from './redux/filtersSlice';



function App() {

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
  }
  
  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact))
  }

  const handleChangeFilter = (e) => {
    dispatch(changeFilter(e.target.value))
  }

  return (
        <div>
          <h1
            style={{ textAlign: "center", marginBottom: 0, marginLeft: -100 }}
          >
            Phonebook
          </h1>
          <ContactForm
            onSubmit={handleAddContact}
          />
          <SearchBox
            value={filter}
            onChange={handleChangeFilter}
          />
          <ContactList contacts={filteredContacts} onDelete={handleDelete} />
        </div>
  );
}

export default App