import { IconBookmark,IconClockHour3 } from "@tabler/icons-react";
import { Text } from '@mantine/core';
import { Divider } from '@mantine/core';

const JobsCard = (props:any) => {
    return(
        <div className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-md">
                        <img className='h-7'src={`/Companies/${props.company}.png`} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold">{props.jobTitle}</div>
                        <div className="text-xs text-mine-shaft-300">{props.company}&#x2022; {props.applicants}</div>
                    </div>
                </div>
                <div className="text-mine-shaft-300 cursor-pointer "><IconBookmark stroke={2} /></div>
            </div>
            <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800 [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs">
                <div>{props.experience}</div>
                <div>{props.jobType}</div>
                <div>{props.location}</div>
            </div>
            <div>
                <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={4}>{props.description}</Text>
            </div>
            <Divider color='mine-shaft.7' size = 'xs' />
            <div className="flex justify-between">
                <div className="font-semibold text-mine-shaft-200">$ {props.package}</div>
                <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                    <IconClockHour3 className='h-5 w-5' stroke={1.5} />
                    {props.postedDaysAgo} days ago
                </div>
            </div>
        </div>
    )
}
export default JobsCard;