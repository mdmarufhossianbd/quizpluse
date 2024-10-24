
import LoginForm from "@/components/login/LoginForm"; // Ensure correct naming
import Image from "next/image";
import loginImage from '../../../../public/assets/login.webp'; // Login image
import LoginAnimation from "@/components/shared/loginAnimation";


const Login = () => {
    return (
        <div className="my-6 md:my-14 lg:my-16 xl:my-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-[#f5f5f5] rounded-md">
                <div className="flex justify-center w-full md:w-1/2 ">
                    {/* Lottie Animation */}
                    <LoginAnimation />

                    {/* <Image className="w-full h-[700px] rounded-l-md" src={loginImage} width={500} height={800} alt="login" unoptimized priority /> */}
                </div>
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Welcome to QuizPulse</h2>
                    <h2 className="font-semibold text-2xl md:text-2xl lg:text-3xl text-center my-10">Login</h2>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
