import React from "react";

import ContactListItem from "./ContactListItem";

export default function ContactList({ visibleContacts, onDeleteContact }) {
  const arrFilterredContact = visibleContacts();
  return (
    <ul>
      {arrFilterredContact.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        );
      })}
    </ul>
  );
}
