import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

/** Show list of all companies.
 *
 * Props: none
 *
 * State: companies- { data: [{handle, name, description, numEmployees, logoUrl}, ...], isLoading: true }
 *
 * RouteList -> CompanyList -> [CompanyCard, SearchForm]
 */

function CompanyList() {
  const [companies, setCompanies] = useState({ data: null, isLoading: true });

  useEffect(function fetchCompaniesOnRender() {
    async function getCompanies(name) {
      const resp = await axios.get(`http://localhost:3001/companies`);
      setCompanies({ data: resp.data.companies, isLoading: false });
    }
    getCompanies();
  }, []);

  /** Makes axios request based on search term, updates companies state */
  async function searchCompanies(searchTerm) {
    const resp = await axios.get(
      `http://localhost:3001/companies?name=${searchTerm}`
    );
    setCompanies({ data: resp.data.companies, isLoading: false });
  }

  if (companies.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <div>
        <SearchForm search={searchCompanies} />
      </div>
      <div className="row justify-content-center">
        <ul className="col-9">
          {companies.data.map((company) => (
            <li key={company.handle} className="card m-3">
              <CompanyCard company={company} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompanyList;
