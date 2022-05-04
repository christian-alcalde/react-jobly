import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import { Link }from "react-router-dom"
import JoblyApi from "//api.js"

/** Show list of all companies.
 *
 * Props: none
 *
 * State: companies- { data: [{handle, name, description, numEmployees, logoUrl}, ...], isLoading: true }
 *
 * RouteList -> CompanyList -> [CompanyCard, SearchForm]
 */

const api = JoblyApi();

function CompanyList() {
  const [companies, setCompanies] = useState({ data: null, isLoading: true });

  useEffect(function fetchCompaniesOnRender() {
    async function getCompanyList() {
      const resp = api.getCompanies();
      setCompanies({ data: resp.data.companies, isLoading: false });
    }
    getCompanyList();
  }, []);

  /** Makes axios request based on search term, updates companies state */
  async function searchCompanies(searchTerm) {
    const resp = api.getCompanies(searchTerm)
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
              <Link to={`/companies/${company.handle}`}><CompanyCard company={company} /></Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CompanyList;
