import MultiInput from "../FindJobs/MultiInput";
import { Divider,Input } from '@mantine/core';
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';
import { searchFields } from "../Data/TalentData";
import { IconUserCircle } from '@tabler/icons-react';



const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 1000]);
    return (
        <div className="flex items-center !text-mine-shaft-100 px-5 py-8">
            <div className="flex items-center">
                <div className="text-bright-sun-400 bg-mine-shaft-900 rounded-full p-1 mr-2"><IconUserCircle size={20}/></div>
                <Input variant="unstyled" placeholder="Talent Name" className="[&_input]:!placeholder-mine-shaft-300" />
            </div>
            <Divider mr='xs' size = 'xs' orientation="vertical" />
            {
                searchFields.map((item,index) =>{
                    return (
                        <><div key={index} className="w-1/5">
                            <MultiInput {...item} />
                        </div>
                        <Divider mr='xs' size = 'xs' orientation="vertical" />
                        </>
                    )
                })
            }
            <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
                <div className="flex justify-between">
                    <div>Salary</div>
                    <div>${value[0]}k - ${value[1]}k</div>
                </div>
                <RangeSlider color= 'bright-sun.4' size='xs' value={value} onChange={setValue} labelTransitionProps={{ transition: 'skew-down', duration: 150, timingFunction: 'linear',}}/>

            </div>
            
            
        </div>
    );
}

export default SearchBar;