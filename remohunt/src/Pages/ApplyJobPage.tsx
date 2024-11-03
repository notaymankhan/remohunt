import {Link} from 'react-router-dom';
import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import ApplyJobComp from '../ApplyJob/ApplyJobComp';

const ApplyJobPage = () =>{
    return (    
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4 ">
            <Link className='my-5 inline-block 'to="/jobs">
                    <Button color='bright-sun.4' leftSection={<IconArrowLeft stroke={2} />} variant="light" >Back</Button>
            </Link>
            <ApplyJobComp/>
            
            
        </div> 
    );
}

export default ApplyJobPage;