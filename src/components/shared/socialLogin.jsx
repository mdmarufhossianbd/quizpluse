'use client'
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { Toaster } from "sonner";

const SocialLogin = () => {
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect')

    const handleGoogleLogin = async (provider) => {
       await signIn(provider, {
            redirect: true,
            callbackUrl: path ? path : '/user-dashboard'
        })
    }
    return (
        <div className="my-5 max-w-full mx-auto w-full">
            <Toaster richColors position="top-right" />
            <button onClick={() => handleGoogleLogin('google')} className="py-2 bg-white text-black w-full border-none rounded-xl hover:bg-[#5C0096] hover:text-white duration-300 flex gap-3 items-center justify-center"><FcGoogle size={22} /> Login with Google</button>
        </div>
    );
};

export default SocialLogin;