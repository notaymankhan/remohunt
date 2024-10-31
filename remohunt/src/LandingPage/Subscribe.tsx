import { TextInput,Button } from '@mantine/core';
const Subscribe =()=>{
    return (
        <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
            <div className="text-4xl w-2/5 font-semibold text-mine-shaft-100 text-center">
                Get Remote Jobs Directly To Your<span className="text-bright-sun-400"> Mailbox</span>
            </div>
            <div className="flex gap-4 rounded-xl bg-mine-shaft-700 px-3 py-2 items-center">
                <TextInput className="[&_input]:text-mine-shaft-100 font-semibold" variant="unstyled" size="xl" placeholder="Name@email.com"/>
                <Button className="!rounded-lg" color="bright-sun.4" size="lg" variant="filled">Subscribe</Button>
            </div>
        </div>
    );

}
export default Subscribe;