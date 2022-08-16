import { Component } from 'react';
import s from './form.module.scss';

class Form extends Component {
  state = {
    name: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.renderContacts(this.props.currentContacts);
    this.reset();
  };

  renderContacts = arr => {
    console.log(arr[0]);
    return <li>{arr[0].name}</li>;
  };

  reset = () => {
    this.setState({ name: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    // console.log(e);
  };

  render() {
    return (
      <section>
        <h1>Phonebook</h1>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <div>
          <h2>Contacts</h2>
          <ul>{this.renderContact}</ul>
        </div>
      </section>
    );
  }
}

export default Form;
