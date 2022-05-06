import { useState } from "react";
import _ from "lodash";

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
  async function handleChange(evt) {
    const { value } = evt.target;
    setFormData(value)
    console.log("formData=", formData);

      if(formData.title.length > 0){
        const handleLiveSearch = _.debounce(await search(formData), 1000)
        handleLiveSearch()
      }
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    search(formData);
    setFormData("");
  }


  return (
    <form className="SearchForm-form row g-3 my-3 justify-content-center" onSubmit={handleSubmit}>
      <div className="col-4">
        <input
          id="listSearch"
          name="search"
          placeholder="Search"
          className="form-control"
          onChange={handleChange}
          value={formData}
          aria-label="Search"
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary">Search</button>
      </div>
    </form>
  );
}

export default SearchForm;
