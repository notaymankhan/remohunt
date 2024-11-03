import { Link } from 'react-router-dom';
import { Button,Divider,TextInput,NumberInput } from '@mantine/core';
import { IconBookmark } from '@tabler/icons-react';



const ApplyJobComp = () => {
    return(
        <div className='w-2/3 mx-auto'>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-3 bg-mine-shaft-800 rounded-xl">
                        <img className='h-14'src={`/Companies/google.png`} alt="" />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className="text-2xl font-semibold">Software Engineer</div>
                        <div className="text-lg text-mine-shaft-300">Google&#x2022; 3 Days Ago &#x2022; 48 Applicants</div>
                    </div>
                </div>
                <div className='flex flex-col gap-2 items-center'>
                    <Link to='/apply-job'>
                        <Button size='sm' color='bright-sun.4' variant="light">Apply</Button>
                    </Link>
                    <div className="text-bright-sun-400 cursor-pointer"><IconBookmark stroke={2} /></div>
                </div>

            </div>
            <Divider my="xl"/> 
            <div className='text-xl font-semibold mb-5'>Submit Your Application</div>
            <div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <TextInput label="Full Name" placeholder="Enter Name" withAsterisk/>
                    <TextInput label="Email" placeholder="Enter email" withAsterisk/>
                </div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <NumberInput label="Phone Nuber" placeholder="Enter Phone Number" withAsterisk hideControls min={0} max = {9999999999} clampBehavior ="strict"/>
                    <TextInput label="Personal Website" placeholder="Enter url" withAsterisk/>
                </div>
            </div>
        </div>
    )
}

export default ApplyJobComp;