import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

function CompanyList() {
  const [companies, setCompanies] = useState({ data: null, isLoading: true });

  useEffect(function fetchCompaniesOnRender() {
    async function getCompanies(name) {
      const resp = await axios.get(`http://localhost:3001/companies`);
      setCompanies({ data: resp.data.companies, isLoading: false });
    }
    getCompanies();
  }, []);

  async function searchCompanies(searchTerm) {
    console.log("searchTerm", searchTerm);
    const resp = await axios.get(
      `http://localhost:3001/companies?name=${searchTerm}`
    );
    setCompanies({ data: resp.data.companies, isLoading: false });
  }

  if (companies.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm search={searchCompanies} />
      <ul>
        {companies.data.map((company) => (
          <li key={company.handle}>
            <CompanyCard company={company} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;
