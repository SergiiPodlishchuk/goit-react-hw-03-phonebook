import React from "react";

export default function ContactListItem({ name, number, onDeleteContact }) {
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
}
