/** Displays a single JobCard
 *
 * Props: job - {id, title, salary, equity, companyHandle, companyName}
 *
 * State: none
 *
 * RouteList -> JobList -> JobCardList -> JobCard
 */

function JobCard({job}) {

  return (
    <div>
      <p className="fw-bold">{job.title}</p>
      <p className="mb-5">{job.companyName}</p>
      <p className="fw-light">Salary: {job.salary}</p>
      <p className="fw-light">Equity: {job.equity}</p>
    </div>
  )

}

export default JobCard;

