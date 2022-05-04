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
      <p>{job.title}</p>
      <p>{job.companyName}</p>
      <p>{job.salary}</p>
      <p>{job.equity}</p>
    </div>
  )

}

export default JobCard;

