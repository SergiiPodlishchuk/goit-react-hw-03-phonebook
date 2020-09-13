import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const CONTACTS_DATA = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default class App extends Component {
  state = {
    contacts: CONTACTS_DATA,
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    if (contacts) {
      this.setState({
        contacts: JSON.parse(contacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  addContact = ({ name, number }) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    const { contacts } = this.state;

    const contactsNames = contacts.map((contact) => contact.name);

    if (contactsNames.includes(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [...contacts, newContact],
      };
    });
  };

  removeContact = (contactId) => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  onChangeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} inputFilter={this.onChangeFilter} />
        <ContactList items={visibleContacts} onRemove={this.removeContact} />
      </div>
    );
  }
}
