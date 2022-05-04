import axios from "axios";
import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";


/** Show list of all jobs.
 *
 * Props: none
 *
 * State: jobs - { data: [{id, title, salary, equity, companyHandle, companyName}, ...], isLoading: true }
 *
 * RouteList -> JobList -> [JobCardList -> JobCard, SearchForm]
 */

function JobList() {

  const [jobs, setJobs] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchJobsOnRender() {
      async function getJobs() {
        const resp = await axios.get(`http://localhost:3001/jobs`);
        setJobs({ data: resp.data.jobs, isLoading: false });
      }
      getJobs();
    },
    []
  );

/** Makes axios request based on search term, updates jobs state */
  async function searchJobs(searchTerm) {
    const resp = await axios.get(
      `http://localhost:3001/jobs?title=${searchTerm}`
    );
    setJobs({ data: resp.data.jobs, isLoading: false });
  }

  if (jobs.isLoading) return <i>Loading...</i>;

  return (
    <div>
      <SearchForm search={searchJobs} />
      <JobCardList jobs={jobs.data} />
    </div>
  );
}

export default JobList;
