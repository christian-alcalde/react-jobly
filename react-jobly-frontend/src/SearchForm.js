import { useState } from "react";

/** Form for filtering companies/jobs.
 *
 * Props:
 * - search: function to call in parent.
 *
 * { JobList, CompanyList } -> SearchForm
 */

function SearchForm({ search }) {
  const [formData, setFormData] = useState("");

  /** Update form input. */
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value);
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
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
