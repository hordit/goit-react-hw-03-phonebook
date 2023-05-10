import React, {Component} from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyles';
import initialValues from './Data/Contacts.json';
import { capitalizedName } from './Utils/capitalizedName';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const INITIAL_STATE = {
  contacts: initialValues,
  filter: '',
};
export class App extends Component {
  state = { ...INITIAL_STATE };

  addContact = newContact => {
    const isNameExsist = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    const normalizedName = {
      ...newContact,
      name: capitalizedName(newContact.name),
    };

    if (isNameExsist) {
      alert(`${capitalizedName(newContact.name)} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, normalizedName],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = ({ contacts, filter }) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts(this.state);

    return (
      <Layout>
        <GlobalStyle />
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />
      </Layout>
    );
  }
}

