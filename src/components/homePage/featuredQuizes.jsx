import { getAllQuizes } from "@/utils/fetchQuizes";
import Image from "next/image";
import { Button } from "../ui/button";

const FeaturedQuizes = async () => {
  const quizes = await getAllQuizes();
  return (
    <div className="lg:max-w-7xl xl:max-w-full mx-auto lg:px-16 px-5">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:text-black text-center lg:my-20 md:my-16 my-10">
        Featured Quizes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {quizes?.map((item, index) => {
          return (
            <div
              key={index}
              className="text-start group p-5 bg-[#D6A0F8]/10 rounded-lg flex flex-col  justify-center gap-2 relative after:absolute after:h-full after:bg-[#dcabf84b] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0
              "
            >
              <Image
                className="rounded group-hover:opacity-50 group-hover:scale-105 duration-200 w-full"
                src={item.imageUrl}
                alt={item.quizName}
                width={300}
                height={200}
              />
              <p className="font-semibold tracking-wider group-hover:text-gray-700 text-xl">
                {item.quizName}
              </p>
              <div className="flex justify-between">
                <p>Questions : {item.numberOfQuestions} </p>
                <p> Duration: {item.totalDuration}</p>
              </div>
              <div className="flex justify-between text-xs">
                <p>Created by {item.createdBy}</p>
                <p>Published on: {item.publishDate}</p>
              </div>

              <Button className="hidden group-hover:flex absolute left-[40%] top-[40%]">
                Start Now
              </Button>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedQuizes;
