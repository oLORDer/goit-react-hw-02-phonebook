export default function Filter({ contactsFilter, currentValue }) {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        value={currentValue}
        onChange={contactsFilter}
      />
    </label>
  );
}
