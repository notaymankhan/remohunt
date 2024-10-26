import { IconBeach } from '@tabler/icons-react';
const Header =()=>{
    return <div className="w-full bg-black px-6 text-white h-20 flex justify-between items-center">
        <div className='flex gap-3 items-center'><IconBeach stroke={2} height='32px' width='32px'/> 
        <div className='text-2xl'>RemoHunt</div>
        
        </div>
        <div>Links</div>
        <div>Profile</div>
    </div>

}

export default Header;