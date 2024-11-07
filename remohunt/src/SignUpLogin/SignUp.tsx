import { TextInput, rem , PasswordInput,Checkbox, Anchor,Button} from '@mantine/core';
import { IconAt,IconLock } from '@tabler/icons-react';
import { Link } from 'react-router-dom';

const SignUp =()=>{
    return (
        <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput label="Full Name"  placeholder="Your Name" withAsterisk/>
            <TextInput leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="email" placeholder="Your email" withAsterisk/>
            <PasswordInput leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" withAsterisk/>
            <PasswordInput leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder="Confirm Password" withAsterisk/>
            <Checkbox autoContrast label={<>I accept{' '} <Anchor>terms & conditions</Anchor></>} color="bright-sun.4"/>
            <Button autoContrast variant="filled">Sign Up</Button>
            <div className='mx-auto'>
                Already Have an account? <Link to="/login" className='text-bright-sun-400 hover:underline'>Login </Link>
            </div>
        </div>
    )

}

export default SignUp;