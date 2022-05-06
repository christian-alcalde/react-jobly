import UserContext from "./userContext";
import { useContext, useEffect, useState } from "react";
import JoblyApi from "./api";
import Loading from "./Loading";

/** Displays a single JobCard
 *
 * Props: job - {id, title, salary, equity, companyHandle, companyName}
 *
 * State: none
 *
 * RouteList -> JobList -> JobCardList -> JobCard
 */

function JobCard({ job, handleApplications }) {
  const { currentUser } = useContext(UserContext);
  const [jobsApplied, setJobsApplied] = useState(new Set(currentUser.applications));
  const [isLoading, setIsLoading] = useState(false);

  function handleClick(){
    setIsLoading(true);
    handleApplications(job.id);
    const updatedSet = jobsApplied.add(job.id);
    setJobsApplied(updatedSet);
    setIsLoading(false);
  }

  console.log("jobsApplied=", jobsApplied);

  return (
    <div>
      <p className="fw-bold">{job.title}</p>
      <p className="">{job.companyName}</p>
      <p className="fw-light">Salary: {job.salary}</p>
      <p className="fw-light">Equity: {job.equity}</p>

      {isLoading
      ? <Loading />
      : (!jobsApplied.has(job.id) ? (
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={handleClick}>
            Apply
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={handleClick}>
            Applied
          </button>
        </div>

      ))}


    </div>
  );
}

export default JobCard;
