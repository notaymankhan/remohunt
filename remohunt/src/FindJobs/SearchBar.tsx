import MultiInput from "./MultiInput";
import { dropDownData } from "../Data/JobsData";
import { Divider } from '@mantine/core';
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';



const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1, 1000]);
    return (
        <div className="flex px-5 py-8">
            {
                dropDownData.map((item,index) =>{
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