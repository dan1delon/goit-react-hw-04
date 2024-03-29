import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';

import initialValues from './contacts.json';

const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContact] = useState(() => {
    const savedContacts = window.localStorage.getItem('contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return initialValues;
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = contactData => {
    const finalContact = {
      id: nanoid(),
      ...contactData,
    };

    setContact(prevContacts => [...prevContacts, finalContact]);
  };

  const deleteContact = contactId => {
    console.log(contactId);
    setContact(prevContacts => {
      console.log(prevContacts);
      return prevContacts.filter(contact => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phone book</h1>
      <ContactForm onAddContact={onAddContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
