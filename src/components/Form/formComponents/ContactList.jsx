export default function ContactList() {
  return (
    <div>
      <h2>Contacts</h2>
      {this.props.children}
      <ul>
        {contactsState.map(el => {
          return <li key={nanoid()}>{`${el.name}: ${el.number}`}</li>;
        })}
      </ul>
    </div>
  );
}
