
import FormForLogin from "@/components/login/formForLogin";
import LoginAnimation from "@/components/shared/loginAnimation";

const Login = () => {
    return (
        <div className="my-6 md:my-14 lg:my-10 xl:my-16 mx-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center bg-[#f5f5f5] rounded-md">
                <div className="flex justify-center w-full md:w-1/2 p-10 md:p-4">
                    {/* Lottie Animation */}
                    <LoginAnimation />

                    {/* <Image className="w-full h-[700px] rounded-l-md" src={loginImage} width={500} height={800} alt="login" unoptimized priority /> */}
                </div>
                <div className="w-full md:w-1/2 p-2 md:p-4 lg:p-8">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Welcome to QuizPulse</h2>
                    <h2 className="font-semibold text-2xl md:text-2xl lg:text-3xl text-center my-6">Please Login</h2>
                    <FormForLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;
