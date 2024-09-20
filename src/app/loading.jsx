import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {

    return (
        <div>
            <AlertDialog defaultOpen>
                <AlertDialogTrigger>
                    {/* button here */}
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>
                            {/* title here */}
                        </AlertDialogTitle>
                        <AlertDialogDescription className='flex items-center justify-center py-20'>
                            <AiOutlineLoading3Quarters className="animate-spin" size={50} />
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    {/* <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter> */}
                </AlertDialogContent>
            </AlertDialog>

        </div>
    );
};

export default Loading;