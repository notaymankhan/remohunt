import { Avatar } from '@mantine/core';
import { Rating } from '@mantine/core';

const tesimonialsArray = [
    {
        "name": "Shivam Patel",
        "rating": 4.5,
        "desc": "RemoHunt made job search quick and easy.Recommend to All Job Seekers!"
    },
    {
        "name": "Rajesh Kumar",
        "rating": 4.0,
        "desc": "RemoHunt is a great platform for finding remote jobs and internships."
    },
    {
        "name": "Anushka Sharma",
        "rating": 5.0,
        "desc": "Found my dream job within a week on RemoHunt. Thank you RemoHunt!"
    },
    {
        "name": "Rahul Singh",
        "rating": 4.5,
        "desc": "Amazing platform for finding remote jobs. Highly Recommended!"
    }
]

const Testimonials=()=>{
    return (
        <div className="mt-20 pb-5">
            <div className="text-4xl font-semibold text-mine-shaft-100 text-center mb-3">
                What People <span className="text-bright-sun-400"> Tell</span> About Us
            </div>
            <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
                100's of Happy Testimonials Recieved Till Date
            </div>
            <div className='flex justify-evenly'>
                {
                    tesimonialsArray.map((testimonial,index)=>{
                        return(
                            <div key={index} className='flex flex-col gap-3 w-[20%] border border-bright-sun-400 p-3 rounded-xl'>
                                <div className="flex gap-2 items-center">
                                    <Avatar className="!h-14 !w-14" src="avatar-9.png" alt="it's me" />
                                    <div className="flex flex-col">
                                        <div className="text-lg text-mine-shaft-100 font-semibold">
                                            {testimonial.name}
                                        </div>
                                        <Rating value={testimonial.rating} fractions={2} readOnly />
                                    </div>
                                </div>
                                <div className='text-xs text-mine-shaft-300'>{testimonial.desc}</div>
                            </div>
                        )
                    })
                }


            </div>
            
        </div>
    );
}
export default Testimonials;