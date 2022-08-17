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

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  contactsFilter = () => {
    const { contacts, filter } = this.state;

    const filteredCont = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );

    console.log(...filteredCont);
    return filteredCont;
  };

  formSubmitHandler = data => {
    // console.log(data);
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
    const { filter } = this.state;
    const bookInfo = this.contactsFilter();

    /* <ContactForm ... /> */

    /* <Filter ... /> */
    /* <ContactList ... /> */
    return (
      <Form onSubmit={this.formSubmitHandler} currentContacts={bookInfo}>
        <Filter contactsFilter={this.changeFilter} currentValue={filter} />
      </Form>
    );
  }
}
