import { TextInput, rem , PasswordInput,Checkbox, Anchor,Button} from '@mantine/core';
import { IconAt,IconLock } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const Login =()=>{
    return(
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Login Account</div>
            <TextInput leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="email" placeholder="Your email" withAsterisk/>
            <PasswordInput leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" withAsterisk/>
            <Button autoContrast variant="filled">Login</Button>
            <div className='mx-auto'>
                Havent Registered Yet? <Link to="/signup" className='text-bright-sun-400 hover:underline'>SignUp </Link>
            </div>
        </div>
    )
}

export default Login;