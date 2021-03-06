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
  const jobsApplied = new Set(currentUser.applications);

  async function handleClick() {
    await handleApplications(job.id);
  }

  const buttonColor = !jobsApplied.has(job.id) ? "danger" : "warning";
  const applyApplied = !jobsApplied.has(job.id) ? "Apply" : "Applied";

  return (
    <div>
      <p className="fw-bold">{job.title}</p>
      <p className="">{job.companyName}</p>
      <p className="fw-light">Salary: {job.salary}</p>
      <p className="fw-light">Equity: {job.equity}</p>

        <div className="d-flex justify-content-end">
          <button className={`btn btn-${buttonColor}`} onClick={handleClick}>
          {applyApplied}
          </button>
        </div>

    </div>
  );
}

export default JobCard;
