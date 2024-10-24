import RegisterFrom from "@/components/register/registerFrom";
import Image from "next/image";
import loginImage from '../../../../public/assets/login.webp';
import LoginAnimation from "@/components/shared/loginAnimation";

const Register = () => {
    return (
        <div className="my-6 md:my-14 lg:my-10 xl:my-16 mx-4">
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-10 items-center bg-[#f5f5f5] rounded-md px-5 md:px-0 md:pl-5">
                <div className="md:w-1/2 w-full p-2 md:p-4 lg:p-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Welcome to QuizePluse</h2>
                    <h2 className="font-semibold text-2xl md:2xl lg:text-3xl text-center my-6">Please Register</h2>
                    <RegisterFrom />
                </div>
                <div className="flex justify-center w-full md:w-1/2 p-10 md:p-4">
                    <LoginAnimation />
                    {/* <Image className="w-full h-[800px] md:rounded-r-md rounded-t-md" src={loginImage} width={500} height={700} alt="login" unoptimized priority /> */}
                </div>
            </div>
        </div>
    );
};

export default Register;