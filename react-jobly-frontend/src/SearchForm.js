import { useState } from "react";

function SearchForm({ search }) {
  const [formData, setFormData] = useState("");

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("formdata", formData);
    search(formData);
    setFormData("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          id="listSearch"
          name="search"
          className="form-control"
          placeholder="Search"
          onChange={handleChange}
          value={formData}
          aria-label="Search"
        />
      </div>
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
