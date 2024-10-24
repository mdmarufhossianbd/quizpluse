'use client'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ImSpinner9 } from "react-icons/im";
import { toast, Toaster } from 'sonner';
import SocialLogin from '../shared/socialLogin';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const RegisterFrom = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleRegister = async (e) => {
        setLoading(true)
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value
        if (!email || !password) {
            setLoading(false)
            return toast.error('Please enter email and password.')
        }
        if (password.length < 6) {
            setLoading(false)
            return toast.error("Password at least 6 characters")
        }
        if (password !== confirmPassword) {
            setLoading(false)
            return toast.error("Don't match your password.")
        }
        const loginInfo = { name, email, password }

        await axios.post('/api/v1/register', loginInfo)
            .then(res => {
                if (res.data.success) {
                    setLoading(false)
                    toast.success(res.data.message)
                    e.target.reset()
                    router.push('/login')
                } else if (res.data.status === 406) {
                    setLoading(false)
                    toast.error(res.data.message)
                }
                setLoading(false)
            })
    }
    return (
        <div className="lg:w-2/3 w-full mx-auto">
            <Toaster richColors position='top-center' />
            <form onSubmit={handleRegister} className="flex flex-col gap-2">
                <label className='font-semibold'>Your Full Name</label>
                <input className="border focus:outline-none px-5 py-2 rounded" type="name" name="name" placeholder="Enter Full Name " required />
                <label className='font-semibold'>Your Email</label>
                <input className="border focus:outline-none px-5 py-2 rounded" type="email" name="email" placeholder="Enter email" />
                <label className='font-semibold'>Your Password</label>
                <div className="relative">
                    <input
                        className="border focus:outline-none px-5 py-2 rounded w-full"
                        type={passwordVisible ? "text" : "password"} // Toggle between password and text
                        name="password"
                        placeholder="Enter password"
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-500"
                        onClick={() => setPasswordVisible(!passwordVisible)} // Toggle visibility
                    >
                        {passwordVisible ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                <div className="relative">
                    <input
                        className="border focus:outline-none px-5 py-2 rounded w-full"
                        type={confirmPasswordVisible ? "text" : "password"} // Toggle for confirm password
                        name="confirmPassword"
                        placeholder="Enter password"
                    />
                    <button
                        type="button"
                        className="absolute right-3 top-3 text-gray-500"
                        onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} // Toggle visibility
                    >
                        {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>
                {
                    loading ? <button disabled className='cursor-not-allowed flex items-center gap-2 justify-center py-2 rounded border     bg-[#5C0096] hover:bg-[#500081] text-white border-none'><ImSpinner9 className='animate-spin' /> Creating account</button> : <input className="py-2 rounded border hover:cursor-pointer bg-[#5C0096] hover:bg-[#500081] text-white border-none" type="submit" value="Register" />
                }
            </form>
            <div className='mt-5 text-center'>
                <p>or</p>
                <p className='my-5'>Already have an account? <Link href={'/login'} className='underline font-semibold'>Login</Link></p>
            </div>
            <SocialLogin />
        </div>
    );
};

export default RegisterFrom;