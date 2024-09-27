import Image from "next/image";
import { Button } from "../ui/button";

const QuizCard = ({item}) => {
    return (
        <div className="text-start group p-5 bg-[#D6A0F8]/10 rounded-lg flex flex-col  justify-center gap-2 relative after:absolute after:h-full after:bg-[#dcabf84b] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0">
            <Image
                className="rounded group-hover:opacity-50 group-hover:scale-105 duration-200 w-full"
                src={item?.quizImage}
                alt={item?.quizName}
                width={300}
                height={200}
            />
            <p className="font-semibold tracking-wider group-hover:text-gray-700 text-xl">
                {item?.quizName}</p>
            <div className="flex justify-between">
                <p>Questions : {item?.totalQuestions} </p>
                <p>Duration: {item?.quizDuration} minutes</p>
            </div>
            <div className="flex justify-between text-xs">
                <p>Created by {item?.quizCreatorName}</p>
                <p>Published on: {new Date(item?.createAt).toLocaleString()}</p>
            </div>
            <Button className="hidden group-hover:flex absolute left-[40%] top-[40%]">
                Start Now
            </Button>

        </div>
    );
};

export default QuizCard;