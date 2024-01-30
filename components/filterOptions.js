function FilterOption({ text, handleChange, id, state }) {
  return (
    <div>
      <input type="checkbox" id={id} onChange={handleChange} checked={state ? true : null} />
      {text}
    </div>
  );
}

export default FilterOption;
