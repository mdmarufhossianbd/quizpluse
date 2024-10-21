import { getAllQuizes } from "@/utils/fetchQuizes";
import QuizCard from "../shared/quizCard";

const FeaturedQuizes = async () => {
  const quizes = await getAllQuizes();
  // console.log(quizes)

  return (
    <div className="max-w-7xl mx-auto lg:px-16 px-5 my-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:text-black text-center lg:my-10 md:my-8 my-6">Featured Quizes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {quizes?.map(item => <QuizCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedQuizes;
