import React, { Component } from "react";

import style from "./ContactForm.module.css";

const INITIAL_CONTACT_STATE = {
  name: "",
  number: "",
};

export default class ContactForm extends Component {
  state = INITIAL_CONTACT_STATE;

  inputName = ({ target }) => {
    this.setState({
      name: target.value,
    });
  };

  inputNumber = ({ target }) => {
    this.setState({
      number: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    const { addContact } = this.props;

    addContact({ name, number });
    this.setState({ ...INITIAL_CONTACT_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            placeholder="Enter name"
            className={style.inputName}
            type="text"
            value={name}
            onChange={this.inputName}
          />
        </label>
        <label>
          Number
          <input
            placeholder="Enter number in format xxx-xx-xx"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            value={number}
            onChange={this.inputNumber}
          />
        </label>

        <button type="submit">Add contact</button>
      </form>
    );
  }
}
