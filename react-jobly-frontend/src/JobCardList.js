import JobCard from "./JobCard";

/** Displays a list of jobs
 *
 * Props: jobs - [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 * State: none
 *
 * RouteList -> { JobList, CompanyDetail } -> JobCardList -> JobCard
 */

function JobCardList({jobs}) {

  return (
    <ul>
          {jobs.map(job => (
          <li key={job.id}>
            <JobCard job={job} />
          </li>
      ))}
      </ul>
  )
}

export default JobCardList;
