import { jobList } from "../Data/JobsData";
import JobsCard from "../FindJobs/JobsCard";
const CompanyJobs = () => {
    return <div className="mt-10 flex flex-wrap gap-5">
    {
        jobList.map((job,index) => <JobsCard key={index} {...job}/>)
    }
</div>

}


export default CompanyJobs;