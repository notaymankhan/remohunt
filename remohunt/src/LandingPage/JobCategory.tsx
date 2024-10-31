import { Carousel } from '@mantine/carousel';
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

const jobCategories = [
    {
        "name": "QA",
        "desc": "Remote Jobs in QA and Testing Domain",
        "jobs": "2.5k"
    },
    {
        "name": "DevOps",
        "desc": "Remote Jobs in DevOps Domain",
        "jobs": "4.2k"

    },
    {
        "name": "SoftwareEngineering",
        "desc": "Remote Jobs in Software Engineering,Programming Domain",
        "jobs": "10k"

    },
    { 
        "name": "DataScience",
        "desc": "Remote Jobs in Data Science and Analytics Domain",
        "jobs": "2k"

    },
    {
        "name": "CustomerSuccess",
        "desc": "Remote Jobs in Customer Success and Support Domain",
        "jobs": "3k"
    },
    { 
        "name": "MarketingAndSales",
        "desc": "Remote Jobs in Marketing and Sales Domain",
        "jobs": "4k"

    },
    { 
        "name": "DesignAndCreative",
        "desc": "Remote Jobs in Design,Creative,UI,UX Domain",
        "jobs": "2.7k"

    },
    {
        "name": "ProductAndOperations",
        "desc": "Remote Jobs in Product Management and Operations Domain",
        "jobs": "2k"

    },
    {
        "name": "FinanceAndLegal",
        "desc": "Remote Jobs in Finance and Legal Domain",
        "jobs": "1.2k"

    },
    {
        "name": "HrAndRecruiting",
        "desc": "Remote Jobs in HR and Recruiting Domain",
        "jobs": "700"

    },
    {
        "name": "Others",
        "desc": "Remote Jobs in Other Domains",
        "jobs": "500"
    }]

const JobCategory=()=>{
    return(
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold text-mine-shaft-100 text-center mb-3">Browse <span className="text-bright-sun-400"> Remote Jobs</span> by <span className="text-bright-sun-400">Categories</span></div>
            <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">Explore diverse job opportunities tailored to your skills.Start your career journey today!!</div>
            <Carousel slideSize="22%" 
            nextControlIcon={<IconArrowRight className='h-8 w-8' />}
            previousControlIcon={<IconArrowLeft className='h-8 w-8' />}
            slideGap="md" loop className='focus-visible:[&_button]:!outline-none
            [&_button]:!bg-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 [&_button]:opacity-0 hover:[&_button]:opacity-100' >
                {
                    jobCategories.map((jobCategory,index) =>{
                        return(
                            <Carousel.Slide>
                                <div key={index}>
                                <div className="flex flex-col items-center gap-2 border border-bright-sun-400 p-5 rounded-lg hover:cursor-pointer hover:shadow-[0_0_5px_2px_black] my-3 transition duration-300 ease-in-out !shadow-bright-sun-300">
                                        <div className="p-2 bg-bright-sun-400 rounded-full">
                                            <img className='h-8 w-8' src={`/Category/${jobCategory.name}.png`} alt={`${jobCategory.name}`} />
                                        </div>
                                        <div className="text-mine-shaft-100 text-xl font-semibold">{jobCategory.name}</div>
                                        <div className="text-sm text-center text-mine-shaft-300 h-12">{jobCategory.desc}</div>
                                        <div className="text-bright-sun-300 text-lg">{jobCategory.jobs}+ new jobs posted</div>
                                </div>                      
                                
                                </div>
                            </Carousel.Slide>
                            

                        );
                    })
                }
            </Carousel>
            
        </div>
    )

}

export default JobCategory;