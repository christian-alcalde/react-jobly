import axios from "axios";
import { useEffect, useState } from "react";
import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import JoblyApi from "//api";


/** Show list of all jobs.
 *
 * Props: none
 *
 * State: jobs - { data: [{id, title, salary, equity, companyHandle, companyName}, ...], isLoading: true }
 *
 * RouteList -> JobList -> [JobCardList -> JobCard, SearchForm]
 */

const api = JoblyApi();

function JobList() {

  const [jobs, setJobs] = useState({ data: null, isLoading: true });

  useEffect(
    function fetchJobsOnRender() {
      async function getJobsList() {
        const resp = api.getJobs()
        setJobs({ data: resp.data.jobs, isLoading: false });
      }
      getJobsList();
    },
    []
  );

/** Makes axios request based on search term, updates jobs state */
  async function searchJobs(searchTerm) {
    const resp = api.getJobs(searchTerm)
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
