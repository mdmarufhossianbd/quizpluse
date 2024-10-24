import PublishQuizzes from "@/components/quizzes/publishQuizzes";
import QuizzesSlider from "@/components/quizzesSlider/quizzesSlider";
import { getAllQuizes } from "@/utils/fetchQuizes";

const Quizes = async () => {
    const quizes = await getAllQuizes()
    return (
        <div className="lg:max-w-7xl xl:max-w-full mx-auto mb-10">
            <div className="my-10 max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-center mb-4">Latest Quizzes</h2>
                <p className="text-center">The <b>Latest Quizzes</b> section highlights the latest quizzes added to the platform, giving users easy access to fresh and exciting content. Stay up-to-date with the newest challenges, explore various topics, and dive into quizzes that spark your interest. Whether you&apos;re looking for a quick brain teaser or an in-depth challenge, the Recent Quizzes section ensures there&apos;s always something new to try.</p>
            </div>
            <div className="mx-5 md:mx-8 lg:mx-10">
                <QuizzesSlider quizes={quizes} />
            </div>
            <div className="bg-gradient-to-r from-[#5959eda9] to-[#9e65e9b7] py-10 my-10 px-2 md:px-4 lg:px-6 xl:px-10">
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:text-black text-center lg:mb-20 md:mb-16 mb-10'>Quizzes</h2>
                <PublishQuizzes />
            </div>
        </div>
    );
};

export default Quizes;