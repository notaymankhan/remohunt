import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import JobDesc from '../JobDesc/JobDesc';
import RecommendedJobs from '../JobDesc/RecommendedJob';

const JobDescPage = () => {
    return (    
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Link className='my-5 inline-block 'to="/find-jobs">
                    <Button color='bright-sun.4' leftSection={<IconArrowLeft stroke={2} />} variant="light" >Back</Button>
            </Link>
            <div className='flex gap-5 justify-around'>
                <JobDesc />
                <RecommendedJobs />

            </div>
            

            
        
            
        </div> 
    );
}

export default JobDescPage;