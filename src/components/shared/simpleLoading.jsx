import { ImSpinner9 } from "react-icons/im";

const SimpleLoading = () => {
    return (
        <div className="w-full min-h-screen bg-[#00000042] absolute top-0 right-0 z-50">
            <div className="absolute top-1/2 right-1/2">
                <ImSpinner9 className="animate-spin" size={50} />
            </div>
        </div>
    );
};

export default SimpleLoading;