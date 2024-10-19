import QuizzesSlider from "@/components/quizzesSlider/quizzesSlider";
import QuizCard from "@/components/shared/quizCard";
import { getAllQuizes } from "@/utils/fetchQuizes";

const Quizes = async () => {
    const quizes = await getAllQuizes()
    return (
        <div className="lg:max-w-7xl xl:max-w-full mx-auto lg:px-16 px-5 mb-10">
            <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:text-black text-center lg:my-20 md:my-16 my-10'>Quizes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {quizes?.map(item => <QuizCard key={item?._id} item={item} />)}
            </div>
            <div className="my-10 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-center mb-4">Recent Quizzes</h2>
                <p className="text-center">The <b>Recent Quizzes</b> section highlights the latest quizzes added to the platform, giving users easy access to fresh and exciting content. Stay up-to-date with the newest challenges, explore various topics, and dive into quizzes that spark your interest. Whether you&apos;re looking for a quick brain teaser or an in-depth challenge, the Recent Quizzes section ensures there&apos;s always something new to try.</p>
            </div>
            <QuizzesSlider quizes={quizes} />
        </div>
    );
};

export default Quizes;