import {Divider} from '@mantine/core'
import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Profile from '../TalentProfile/Profile'
import {profile} from '../Data/TalentData'
import RecommendTalent from '../TalentProfile/RecommendTalent';

const TalentProfilePage = () => {
    return (    
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size = 'xs' />
            <Link className='my-5 inline-block 'to="/find-talent">
                    <Button color='bright-sun.4' leftSection={<IconArrowLeft stroke={2} />} variant="light" >Back</Button>
            </Link>
            <div className='flex gap-5 justify-around'>
                <Profile {...profile}/>
                <RecommendTalent/>
                
            </div>


            
        
            
        </div> 
    );
}

export default TalentProfilePage;