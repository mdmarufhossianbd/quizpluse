import { ImSpinner9 } from "react-icons/im";
import DataLoader from "./dataLoader/dataLoader";

const SimpleLoading = () => {
    return (
        <div className="w-full min-h-screen bg-[#00000042] absolute top-0 right-0 z-50">
            <div className="absolute top-1/2 right-1/2">
                <DataLoader />
            </div>
        </div>
    );
};

export default SimpleLoading;