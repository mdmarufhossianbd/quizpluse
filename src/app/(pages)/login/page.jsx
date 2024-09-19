import LoginFrom from "@/components/login/loginFrom";
import Image from "next/image";
import loginImage from '../../../../public/assets/login.webp';
const Login = () => {

    

    return (
        <div className="my-10 md:my-14 lg:my-16 xl:my-20">
            <div className="max-w-7xl mx-auto flex gap-10 items-center bg-[#f5f5f5] rounded-md">
                <div className="w-1/2">
                    <Image className="w-full h-[800px] rounded-l-md" src={loginImage} width={500} height={800} alt="login" unoptimized priority />
                </div>
                <div className="w-1/2">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Welcome to QuizePluse</h2>
                    <h2 className="font-semibold text-2xl md:2xl lg:text-3xl text-center my-10">Login</h2>
                    <LoginFrom />
                </div>
            </div>
        </div>
    );
};

export default Login;