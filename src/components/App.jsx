import { Component } from 'react';
import Form from './Form/Form';

export class App extends Component {
  state = {
    contacts: [{ name: 'baget' }],
    name: '',
  };

  formSubmitHandler = data => {
    const newContact = {
      nema: data.name,
    };
    this.setState(el => ({
      contacts: [newContact, ...el.contacts],
    }));
    // console.log(this.state);
  };

  render() {
    return (
      <Form
        onSubmit={this.formSubmitHandler}
        currentContacts={this.state.contacts}
      />
    );
  }
}
