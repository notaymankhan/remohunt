import { Divider } from "@mantine/core";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDescription from "../PostedJob/PostedJobDescription";
import JobHistory from "../JobHistory/JobHistory";

const JobHistoryPage = () => {

    return (    
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
            <div className='my-5'>
                <JobHistory/>
            </div>
        </div> 
    );
}

export default JobHistoryPage;