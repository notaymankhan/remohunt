import { IconHeart, IconMapPin,IconCalendarMonth } from "@tabler/icons-react";
import { Avatar, Text, Button,Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Divider } from '@mantine/core';
import { Link } from 'react-router-dom'; 
import {DateInput ,TimeInput} from '@mantine/dates';
import { useRef, useState } from 'react';
// Import the Link component from react-router-dom



const TalentCard = (props: any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    return (
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400 ">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar size='lg' src={`/${props.image}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-lg ">{props.name}</div>
                        <div className="text-sm text-mine-shaft-300">{props.role} &bull; {props.company}</div>
                    </div>
                </div>
                <div className="text-mine-shaft-300 cursor-pointer "><IconHeart stroke={2} /></div>
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
                {
                    props.topSkills.map((skill:any,index:any) =>{
                        return(
                            <div key={index} className="p-2 py-1 bg-mine-shaft-800 text-bright-sun-400">{skill}</div>
                        );
                    })
                }
            </div>
            <div>
                <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={4}>{props.about}</Text>
            </div>
            <Divider color='mine-shaft.7' size='xs' />
            {
                props.invited?
                <div className="flex gap-1 text-mine-shaft-200 text-xs items-center">
                    <IconCalendarMonth stroke={1.5}/>Interview :August 27,2024 10:00 AM
                </div>
                :
                <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">{props.expectedCtc}</div>
                <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                    <IconMapPin className='h-5 w-5' stroke={1.5} />
                    {props.location}
                </div>
            </div>
            }
            
            <Divider color='mine-shaft.7' size='xs' />
            <div className="flex [&>*]:w-1/2 [&>*]:p-1">
            {
                !props.invited && 
                <>
                    <Link to="/talent-profile">
                        <Button color='bright-sun.4' variant="outline" fullWidth>Profile</Button>
                    </Link>
                    <div>
                        {props.posted?<Button onClick={open}rightSection={<IconCalendarMonth className="h-3 w-3"/>} color='bright-sun.4' variant="light" fullWidth>Schedule</Button>:<Button color='bright-sun.4' variant="light" fullWidth>Message</Button>}
                    </div>
                </>
            }
            {
                props.invited && 
                <>

                        <div>
                            <Button color='bright-sun.4' variant="light" fullWidth>Accept</Button>
                        </div>
                        <div>
                            <Button color='red.4' variant="light"  fullWidth>Reject</Button>
                        </div>

                </>
                
 
            }
                
            </div>
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div className="flex flex-col gap-4">
                    <DateInput value={value} minDate={new Date()}onChange={setValue} label="Date" placeholder="Enter Date"/>
                    <TimeInput label = "Time" ref = {ref} placeholder="Enter Time" onClick={() => ref.current?.showPicker()}/>
                    <Button color='bright-sun.4' variant="light" fullWidth>Schedule</Button>
                </div>
            </Modal>
        </div>
    )
}
export default TalentCard;