import UserContext from "./userContext";
import { useContext, useEffect, useState } from "react";
import JoblyApi from "./api";

/** Displays a single JobCard
 *
 * Props: job - {id, title, salary, equity, companyHandle, companyName}
 *
 * State: none
 *
 * RouteList -> JobList -> JobCardList -> JobCard
 */

function JobCard({ job }) {
  const { currentUser } = useContext(UserContext);
  const [applied, setApplied] = useState(false);
  const jobsApplied = new Set(currentUser.applications);

  async function handleApply() {
    try {
      await JoblyApi.apply(currentUser.username, job.id);
      setApplied(true);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUnApply() {
    console.log("here made it");
    try {
      await JoblyApi.unApply(currentUser.username, job.id);
      setApplied(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <p className="fw-bold">{job.title}</p>
      <p className="">{job.companyName}</p>
      <p className="fw-light">Salary: {job.salary}</p>
      <p className="fw-light">Equity: {job.equity}</p>

      {!jobsApplied.has(job.id) && !applied ? (
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={handleApply}>
            Apply
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-end">
          <button className="btn btn-danger" onClick={handleUnApply}>
            Applied
          </button>
        </div>
      )}
    </div>
  );
}

export default JobCard;
