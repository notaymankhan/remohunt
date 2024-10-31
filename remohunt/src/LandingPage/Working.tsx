import { Avatar } from '@mantine/core';

const workingArray = [
    {
        "img": "/Working/resumelogo",
        "name":"Build Your Resume",
        "desc":"Cater your Resume to Job Description and get noticed by the recruiters",
    },
    {
        "img": "/Working/applylogo",
        "name":"Apply for Remote Jobs",
        "desc": "Find and Apply to jobs that match your skills and experience",
    },
    {
        "img": "/Working/hiredlogo",
        "name": "Get Hired",
        "desc": "Interview with the companies and get hired for your dream job",
    }
]

const Working=()=>{
    return(
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold text-mine-shaft-100 text-center mb-3">How it<span className="text-bright-sun-400"> Works</span></div>
            <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">Effortlessly navigate through the process and land your dream job</div>
            <div className="flex px-16 justify-between items-center">
                 <div className="w-[30rem] relative">
                    <img src="/Working/hero-2.png" alt="working section lady" />
                    <div className='absolute top-[30%] -right-[25%] flex flex-col items-center gap-1 w-36 border border-bright-sun-400 rounded-xl py-3 px-1 backdrop-blur-md'>
                        <Avatar src="avatar-7.png" alt="it's me" className='!h-16 !w-16'/>
                        <div className='text-sm font-semibold text-mine-shaft-200 text-center'>Complete your profile</div>
                        <div className='text-xs font-semibold text-mine-shaft-300 text-center'>70% Completed</div>
                    </div>
                </div>
                 <div className="flex flex-col gap-10">
                    {
                        workingArray.map((item,index)=>{
                            return(
                                <div key={index} className="flex items-center gap-6">
                                    <div className="p-3 bg-bright-sun-300 rounded-full">
                                        <img src={`${item.img}.png`} className="h-12 w-12" alt="" />
                                    </div>
                                    <div>
                                        <div className="text-mine-shaft-200 text-xl font-semibold">{item.name}</div>
                                        <div className="text-mine-shaft-300 ">{item.desc}</div>
                                    </div>
                                </div>
                            )

                        })
                    }
                </div>
                 
                 </div>
        </div>
    )

}

export default Working;