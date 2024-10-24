'use client'
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import { toast, Toaster } from 'sonner';
import SocialLogin from '../shared/socialLogin';

const LoginForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        setLoading(true)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value
        if (!email || !password) {
            setLoading(false)
            return toast.error('Please enter email and password.')
        }
        const res = await signIn('credentials', {
            email, password, redirect: false
        })
        if (res.ok) {
            setLoading(false)
            e.target.reset()
            toast.success('Successfully login your account')
            router.push('/user-dashboard')
        } else {
            setLoading(false)
            toast.error('Please enter email and password.')
        }
    }

    return (
        <div className="w-2/3 mx-auto">
            <Toaster richColors position='top-center' />
            <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <input className="border focus:outline-none px-5 py-2 rounded" type="email" name="email" placeholder="Enter email" />
                <input className="border focus:outline-none px-5 py-2 rounded" type="password" name="password" placeholder="Enter password" />
                {
                    loading ? <button disabled className='cursor-not-allowed flex items-center gap-2 justify-center py-2 rounded border     bg-[#5C0096] hover:bg-[#500081] text-white border-none'><ImSpinner9 className='animate-spin' /> Logging your account</button> : <input className="py-2 rounded border hover:cursor-pointer bg-[#5C0096] hover:bg-[#500081] text-white border-none" type="submit" value="Login" />
                }
            </form>
            <div className='mt-5 text-center'>
                <p>or</p>
                <p className='my-5'>Don&apos;t have an account? <Link href={'/register'} className='underline font-semibold'>Register</Link></p>
            </div>
            <SocialLogin />
        </div>
    );
};

export default LoginForm;