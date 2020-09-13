import React from "react";

import ContactListItem from "./ContactListItem";

export default function ContactList({ items, onRemove }) {
  return (
    <ul>
      {items.map(({ id, ...props }) => {
        return (
          <ContactListItem
            key={id}
            {...props}
            onDeleteContact={() => onRemove(id)}
          />
        );
      })}
    </ul>
  );
}
