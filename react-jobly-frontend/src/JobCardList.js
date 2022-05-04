import JobCard from "./JobCard";

/** Displays a list of jobs
 *
 * Props: jobs - [{id, title, salary, equity, companyHandle, companyName}, ...]
 *
 * State: none
 *
 * RouteList -> { JobList, CompanyDetail } -> JobCardList -> JobCard
 */

function JobCardList({ jobs }) {
  return (
    <div className="row justify-content-center">
      <ul className="col-9">
        {jobs.map((job) => (
          <li key={job.id} className="card m-3">
            <JobCard job={job} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobCardList;
