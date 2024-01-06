function FilterButton({ text, handleChange, id }) {
  return (
    <div>
      <button id={id} className="filter_button" onClick={handleChange}>
        {text}
      </button>
    </div>
  );
}

export default FilterButton;
