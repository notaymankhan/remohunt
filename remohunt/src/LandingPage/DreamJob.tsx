import { TextInput,Avatar } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob =()=>{
    return (
        <div className="flex items-center px-16">
            <div className="flex flex-col w-[45%] gap-3">
                    <div className="text-6xl leading-tight font-bold text-mine-shaft-100 [&>span]:text-bright-sun-400">
                        Find Your  <span> Dream Remote Job </span>
                    </div>
                    <div className="text-lg text-mine-shaft-200">
                        Explore Remote Jobs Aggregated from various Job Boards
                    </div>
                    <div className='flex gap-3 mt-5' >
                        <TextInput className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-400 [&_input]:!text-mine-shaft-100'
                            label="Job Title"
                            variant="unstyled"
                            placeholder="Software Engineer"
                        />
                         <TextInput className='bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-400 [&_input]:!text-mine-shaft-100'
                            label="Type"
                            variant="unstyled"
                            placeholder="Full Time"
                        />
                        <div className='flex items-center justify-center w-20 h-full text-mine-shaft-100 bg-bright-sun-400 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer'> 
                            <IconSearch stroke={2} className='h-[85%] w-[85%]' />
                        </div>
                        
                    </div>
            </div>
            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[30rem] relative">
                    <img src="/hero-6-bgr.png" alt="hero-image" />
                    <div className='absolute -right-10 w-fit top-[50%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md'>
                        <div className='text-center text-mine-shaft-100 text-sm mb-1'>10k+ got jobs </div>
                            <Avatar.Group>
                            <Avatar src="avatar-7.png" />
                            <Avatar src="avatar-9.png" />
                            <Avatar src="avatar-7.png" />
                            <Avatar>+9k</Avatar>
                            </Avatar.Group>
                    </div>
                    <div className='absolute w-fit -left-9 top-[28%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col'>
                        <div className='flex gap-2 items-center'>
                        <div className='w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg'>
                            <img src="google.png" alt="" />
                        </div>
                        <div className='text-mine-shaft-100 text-sm'>
                            <div>Software Engineer</div>
                            <div className='text-mine-shaft-200 text-xs'>Remote</div>
                        </div>
                        
                        </div>
                        <div className='flex gap-2 text-mine-shaft-200 text-xs justify-around'>
                            <span>1 Day Ago</span>
                            <span>120 Applicants</span>
                        </div>
                    </div>
                    
                </div>

            </div> 
        </div>
    );
}


export default DreamJob;