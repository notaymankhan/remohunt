import { IconBeach,IconBrandFacebook,IconBrandInstagram, IconBrandLinkedin, IconBrandX} from '@tabler/icons-react';

const footerLinks =[
    {
        "title": "Product",
        "links": ["Find Job","Find Company","Find Employee"]
    },
    {
        "title": "Company",
        "links": ["About Us","Contact Us","Privacy Policy","Terms of Service"]
    },
    {
        "title": "Support",
        "links": ["Help and Support","FAQ","FeedBack"]
    }
]

const Footer =()=>{
    return(
        <div className="mt-20 pb-5 flex gap-5 justify-around">
            <div className='w-1/4 flex flex-col gap-4'>
                <div className='flex gap-3 items-center text-bright-sun-400'>
                    <IconBeach stroke={2} className='h-6 w-6'/> 
                    <div className='text-2xl font-semibold'>RemoHunt</div>
                </div>
                <div className='text-sm text-mine-shaft-300 '>
                    Remote Job Portal that aggregates remote jobs from all over the web
                </div>
                <div className='flex gap-3 text-bright-sun-400 [&>div]:bg-mine-shaft-900 [&>div]:p-2 [&>div]:rounded-full [&>div]:cursor-pointer hover:[&>div]:bg-mine-shaft-700'>
                    <div><IconBrandFacebook stroke={2} /></div>
                    <div><IconBrandInstagram stroke={2} /></div>
                    <div><IconBrandLinkedin stroke={2} /></div>
                    <div><IconBrandX stroke={2} /></div>
                </div>
                
            </div>
            
                {
                    footerLinks.map((item,index)=>{
                        return(
                            <div key={index}>
                                <div className='text-lg font-semibold text-bright-sun-400 mb-4'>{item.title}</div>
                                {
                                    item.links.map((fl,index) =>{
                                        return(
                                            <div className='text-sm text-mine-shaft-300 hover:text-bright-sun-400 mb-1 hover:translate-x-2 transition duration-300 ease-in-out cursor-pointer'>{fl}</div>
                                        )
                                    })
                                }

                            </div>

                        )
                    })
                }

           
            
            {/* {
                footerLinks.map((item,index) => 
                    <div key={index}>
                        <div className='font-lg font-semi-bold '>{item.title}</div>
                        {
                            item.links.map((fl,index) =>{
                                <div key={index} className='text-mine-shaft-300 text-sm hover:text-bright-sun-400'>{fl}</div>
                            }
                        
                        )}

                    </div>
                )

            } */}
            
                
            

           
        </div>
    )
}
export default Footer;