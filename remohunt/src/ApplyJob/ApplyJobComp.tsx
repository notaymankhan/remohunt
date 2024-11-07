import { Link, useNavigate } from 'react-router-dom';
import { Button,Divider,TextInput,NumberInput,FileInput,Textarea ,Notification, rem,LoadingOverlay} from '@mantine/core';
import { IconBookmark,IconPaperclip,IconCheck } from '@tabler/icons-react';
import { useState } from 'react';



const ApplyJobComp = () => {
    const [preview, setPreview] = useState(false);
    const [submit ,setSubmit]= useState(false);
    const [sec,setSec] = useState(5);
    const handlePreview = () => {
        setPreview(!preview);
        window.scrollTo({top:0,behavior:'smooth'});
    }
    const navigate = useNavigate();
    const handleSubmit = () => {
        setSubmit(true);
        let x= 5;
        setInterval(()=>{
            x--;
            setSec(x);
            if(x===0){
                navigate('/find-jobs');
            }

        },1000)
    }
    
    return(
        <>
        <div className='w-2/3 mx-auto'>
        <LoadingOverlay
          className='!fixed'
          visible={submit}
          zIndex={1000}
          overlayProps={{ radius: 'sm', blur: 2 }}
          loaderProps={{ color: 'bright-sun.4', type: 'bars' }}
        />
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
            <div className='flex flex-col gap-5'>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Full Name" placeholder="Enter Name" withAsterisk/>
                    <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Email" placeholder="Enter email" withAsterisk/>
                </div>
                <div className='flex gap-10 [&>*]:w-1/2'>
                    <NumberInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Phone Nuber" placeholder="Enter Phone Number" withAsterisk hideControls min={0} max = {9999999999} clampBehavior ="strict"/>
                    <TextInput readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`} label="Personal Website" placeholder="Enter url" withAsterisk/>
                </div>
                <div>
                    <FileInput
                        withAsterisk
                        leftSection={<IconPaperclip/>}
                        label="Attach your CV"
                        placeholder="Your CV"
                        leftSectionPointerEvents="none"
                        readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`}/>
                </div>
                <div>
                    <Textarea
                        withAsterisk
                        placeholder="Your chance to talk to the recruiter"
                        label="Cover Letter"
                        autosize
                        minRows={4}
                        readOnly={preview} variant={preview?"unstyled":"default"} className={`${preview?"text-mine-shaft-300 font-semibold":""}`}/>
                </div>
                    {!preview && <Button onClick={handlePreview} color='bright-sun.4' variant="light">Preview Application</Button>}
                    {/* <Button color='bright-sun.4' variant="outline">Submit Application</Button> */}
                    {
                        preview && <div className='flex gap-10 [&>*]:w-1/2'>
                            <Button  fullWidth onClick={handlePreview} color='bright-sun.4' variant="light">Edit</Button>
                            <Button fullWidth onClick={handleSubmit} color='bright-sun.4' variant="outline">Submit</Button>
                        </div>
                    }
                

            </div>
        </div>
            <Notification className={`!border !z-[1001] !border-bright-sun-400 transition duration-300 ease-in-out !fixed top-0 left-[35%] ${submit?"translate-y-0 ":"-translate-y-20"}`} icon={<IconCheck style={{width:rem(20),height:rem(20)}}/>} color="bright-sun.4" withBorder title="Application Submitted" mt="md" withCloseButton={false}>
                Redirecting to Find Jobs Page in {sec} seconds
            </Notification>
        </>
    )
}

export default ApplyJobComp;