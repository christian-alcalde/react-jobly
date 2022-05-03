import JobCard from "./JobCard";


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
