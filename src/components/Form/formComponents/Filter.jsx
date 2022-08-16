export default function Filter({}) {
  return (
    <label>
      Find contacts by name
      <br />
      <input
        type="text"
        name="filter"
        // value={this.state.filter}
        // onChange={this.handleChange}
      />
    </label>
  );
}
