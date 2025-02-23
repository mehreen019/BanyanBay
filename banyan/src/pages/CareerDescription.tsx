import JobDescription from "../components/JobDescription"
import NavBar from '../components/NavBar'
import { useParams } from "react-router-dom"
import { jobs } from "../types/Job"

const CareerDescription = () => {

    const { title } = useParams();
    const currentJob = jobs.findIndex(job => 
      job.title.replace(/\s+/g, '-') === title
    );

  return (
    <div>
        <NavBar />
        <JobDescription currentJob={currentJob} />
    </div>
  )
}

export default CareerDescription