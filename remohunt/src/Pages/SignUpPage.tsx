import { IconBeach } from "@tabler/icons-react";
import SignUp from "../SignUpLogin/SignUp";
import Login from "../SignUpLogin/Login";
import { useLocation } from "react-router-dom";

const SignUpPage = () => {
    const location = useLocation();
    return (
        <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
            <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000 ${location.pathname === '/signup' ? '-translate-x-1/2' : 'translate-x-0'}`}>
                <Login />
                <div className={`w-1/2 h-full transition-all duration-1000 ease-in-out ${location.pathname === '/signup'?'rounded-r-[200px]':'rounded-l-[200px]'} bg-mine-shaft-900 flex flex-col gap-5 items-center justify-center`}>
                    <div className='flex gap-3 items-center text-bright-sun-400'>
                        <IconBeach stroke={2.5} className="h-16 w-16" />
                        <div className='text-6xl font-semibold'>RemoHunt</div>
                    </div>
                    <div className="font-semibold text-mine-shaft-200 text-2xl">
                        Find the Remote Job Made for you
                    </div>
                </div>
                <SignUp />
            </div>
        </div>
    );
}

export default SignUpPage;
