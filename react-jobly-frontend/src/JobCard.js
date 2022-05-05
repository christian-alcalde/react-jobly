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

function JobCard({job}) {

  const { currentUser } = useContext(UserContext);
  const [applied, setApplied] = useState(false);

  async function handleApply(){
    try{
    await JoblyApi.apply(currentUser.username, job.id);
    setApplied(true);
    }catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <p className="fw-bold">{job.title}</p>
      <p className="mb-5">{job.companyName}</p>
      <p className="fw-light">Salary: {job.salary}</p>
      <p className="fw-light">Equity: {job.equity}</p>

      {!currentUser.applications.includes(job.id) && !applied
      ? <button className="btn btn-danger" onClick={handleApply}>Apply</button>
      : <button disabled className="btn btn-danger">Applied</button>}
    </div>
  )

}

export default JobCard;

