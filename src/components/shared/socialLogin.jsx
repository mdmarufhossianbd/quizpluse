'use client'
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

const SocialLogin = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    // const session = useSession()
    const path = searchParams.get('redirect')

    const handleGoogleLogin = async(provider) => {
        const res = await signIn(provider, {
            redirect : true,
            callbackUrl : path ? path : '/admin'
        })

        console.log(res);
    }
    return (
        <div>
            <div className="my-5 max-w-full mx-auto border">
                <Button onClick={() => handleGoogleLogin('google')}>Login with Google</Button>
            </div>
        </div>
    );
};

export default SocialLogin;