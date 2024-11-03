import {IconBookmark,IconMapPin} from '@tabler/icons-react'
import { Button,Divider,ActionIcon } from '@mantine/core';
import { Link } from 'react-router-dom';
import {card,skills,desc} from '../Data/JobDescData'
// @ts-ignore
import DOMPurify from 'dompurify';



const JobDesc = () => {
    const data= DOMPurify.sanitize(desc);
    return (  
        <div className="w-2/3">
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
                        <Button size = 'sm' color='bright-sun.4' variant="light" >Apply</Button>
                    </Link>
                    <div className="text-bright-sun-400 cursor-pointer "><IconBookmark stroke={2} /></div>
                    

                </div>
            </div>
            <Divider my="xl"/> 
            <div className='flex  justify-between'>
                    {
                        card.map((item,index)=>

                                    <div key={index} className='flex flex-col items-center gap-1'>
                                        <ActionIcon className="!h-12 !w-12" variant="light" color="bright-sun.4" size="lg" radius="xl" aria-label="Settings">
                                            <item.icon className='h-4/5 w-4/5' stroke={1.5} />
                                        </ActionIcon>
                                            <div className="text-sm text-mine-shaft-300">{item.name}</div>
                                            <div className="font-semibold ">{item.value}</div>
                                    </div>
)
                    }
            </div>
            <Divider my="xl"/>
            <div>
                <div className='text-xl font-semibold mb-5'>Required Skills</div>
                <div className='flex flex-wrap gap-2'>
                    {
                        skills.map((skill,index)=>{
                            return(
                                <ActionIcon className="!h-fit !w-fit font-medium !text-sm" p="xs" variant="light" color="bright-sun.4" radius="xl" aria-label="Settings">{skill}</ActionIcon>

                            )
                        })
                    }
                    

                </div>
            </div>
            <Divider my="xl"/>
            <div className='[&_h4]:text-xl [&_h4]:my-5 [&_h4]:font-semibold [&_*]:text-mine-shaft-300 [&_p]:text-justify [&_li]:marker:text-bright-sun-400 [&_li]:mb-1' dangerouslySetInnerHTML={{__html:data}}>
            </div>
            <Divider my="xl"/>
            <div>
                <div className='text-xl font-semibold mb-5'>About Company</div>
            </div>
            <div>
                <div className="flex  justify-between mb-3">
                    <div className="flex gap-2 items-center">
                        <div className="p-3 bg-mine-shaft-800 rounded-xl">
                            <img className='h-8'src={`/Companies/google.png`} alt="" />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <div className="text-lg font-medium">Google</div>
                            <div className="text-mine-shaft-300">10k+employees</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <Link to=''>
                            <Button color='bright-sun.4' variant="light" >Company Page</Button>
                        </Link>
                        
                    </div>
                </div>
                <div className='text-mine-shaft-300 text-justify'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea sequi labore, iste dolorem, laborum facere consectetur officiis similique quae sapiente libero!
                </div>

            </div>


        </div>
      )
}

export default JobDesc;