import { Component } from 'react';
import Form from './Form/Form';
import Filter from './Form/formComponents/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactsFilter = () => {
    const curState = this.state.contacts;
    console.log(curState);
  };

  formSubmitHandler = data => {
    console.log(data);
    const newContact = {
      name: data.name,
      number: data.number,
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
      >
        <Filter />
      </Form>
    );
  }
}
