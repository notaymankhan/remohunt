import { IconBeach,IconSettings,IconBell } from '@tabler/icons-react';
import { Avatar,Indicator } from '@mantine/core';
import NavLinks from './NavLinks';


const Header =()=>{
    return <div className="w-full bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']">
        <div className='flex gap-3 items-center text-bright-sun-400'>
            <IconBeach stroke={2} height='32px' width='32px'/> 
            <div className='text-2xl font-semibold'>RemoHunt</div>
        </div>
        {NavLinks()}
        <div className='flex gap-3 items-center'>
            <div className='flex gap-2 items-center'>
                <div>Ayman</div>
                <Indicator processing>
                    <Avatar src="avatar-9.png" alt="Ayman" />
                </Indicator>

            </div>
            <div className= 'items-center bg-mine-shaft-900 p-1 rounded-full'>
                <IconSettings stroke={1.5} />
            </div>
            <div className='items-center bg-mine-shaft-900 p-1 rounded-full'>
                <Indicator processing offset={5} color='brightSun.4'>
                    <IconBell stroke={1.5} />
                </Indicator>
                
            </div>
        </div>
    </div>

}

export default Header;