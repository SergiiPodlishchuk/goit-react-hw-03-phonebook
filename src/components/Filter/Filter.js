import React from "react";

export default function Filter({ value, inputFilter }) {
  return (
    <div>
      Find contacts by name or number
      <input
        placeholder="What do you want to find???"
        type="text"
        value={value}
        onChange={({ target }) => inputFilter(target.value)}
      />
    </div>
  );
}
