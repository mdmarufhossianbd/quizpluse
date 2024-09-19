'use client'
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import SocialLogin from '../shared/socialLogin';

const LoginFrom = () => {
    const [loading, setLoading] = useState(false)

    const handleLogin = async(e) => {
        setLoading(true)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        const loginInfo = {
            email, password
        }
        if(!email || !password){
            setLoading(false)
            return toast.error('Please enter email and password.')
        }
        console.log(loginInfo);
    }
    return (
        <div className="w-2/3 mx-auto">
            <Toaster richColors position='top-center' />
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <input className="border focus:outline-none px-5 py-2 rounded" type="email" name="email" placeholder="Enter email" />
                <input className="border focus:outline-none px-5 py-2 rounded" type="password" name="password" placeholder="Enter password" />
                {
                    loading ? <button disabled>Loading</button> : <input className="py-2 rounded border hover:cursor-pointer bg-[#5C0096] hover:bg-[#500081] text-white border-none" type="submit" value="Login" />
                }
            </form>
            <SocialLogin />
        </div>
    );
};

export default LoginFrom;