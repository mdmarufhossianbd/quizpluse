import RegisterFrom from "@/components/register/registerFrom";
import Image from "next/image";
import loginImage from '../../../../public/assets/login.webp';

const Register = () => {
    return (
        <div className="my-10 md:my-14 lg:my-16 xl:my-20 px-5">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-center bg-[#f5f5f5] rounded-md px-5 md:px-0 md:pl-5">
                <div className="md:w-1/2 w-full">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Welcome to QuizePluse</h2>
                    <h2 className="font-semibold text-2xl md:2xl lg:text-3xl text-center my-10">Register</h2>
                    <RegisterFrom />
                </div>
                <div className="md:w-1/2 w-full">
                    <Image className="w-full h-[800px] md:rounded-r-md rounded-t-md" src={loginImage} width={500} height={700} alt="login" unoptimized priority />
                </div>
            </div>
        </div>
    );
};

export default Register;