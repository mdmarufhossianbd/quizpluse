import CategoryWizeQuiz from "@/components/quizzes/categoryWizeQuiz";
import Heading from "@/components/quizzes/heading";
import PublishQuizzes from "@/components/quizzes/publishQuizzes";
import QuizzesSlider from "@/components/quizzesSlider/quizzesSlider";
import { getAllQuizes } from "@/utils/fetchQuizes";

const Quizes = async () => {
    const quizes = await getAllQuizes()
    return (
        <div className="lg:max-w-7xl xl:max-w-full mx-auto mb-10">
           
            <div className="bg-gradient-to-r from-[#5959eda9] to-[#9e65e9b7] py-10 mb-10 px-2 md:px-4 lg:px-6 xl:px-10">
                <Heading name={'Quizzes'} description={"Welcome to our comprehensive Quizzes section, where knowledge meets fun! Explore a diverse range of quizzes across multiple categories, designed to entertain, challenge, and educate. Whether you're looking to test your general knowledge, deep dive into specific topics, or just pass the time with engaging brain teasers, our Quizzes section has something for everyone. With new quizzes added regularly, there's always a fresh challenge waiting for you. Sharpen your mind, discover new interests, and compete with others to see where you stand!"} />
                <PublishQuizzes />
            </div>
            <div className="my-10 max-w-4xl mx-auto">
                <Heading name={'Latest Quizzes'} description={"The Latest Quizzessection highlights the latest quizzes added to the platform, giving users easy access to fresh and exciting content. Stay up-to-date with the newest challenges, explore various topics, and dive into quizzes that spark your interest. Whether you're looking for a quick brain teaser or an in-depth challenge, the Recent Quizzes section ensures there's always something new to try."} />
            </div>
            <div className="mx-5 md:mx-8 lg:mx-10">
                <QuizzesSlider quizes={quizes} />
            </div>
            <div className="py-10 my-10 px-2 md:px-4 lg:px-6 xl:px-10">
                <Heading name={'Programming'} description="Test your coding skills and tech knowledge with our Programming Quizzes. From beginner concepts to advanced algorithms, explore questions on various languages, frameworks, and development best practices. Perfect for students, professionals, or tech enthusiasts, these quizzes provide a fun way to sharpen your programming knowledge and keep up with the ever-evolving tech world." />
                <CategoryWizeQuiz category={'Programming'} />
            </div>
            <div className="py-10 my-10 px-2 md:px-4 lg:px-6 xl:px-10">
                <Heading name={'Movie'} description={"Dive into the world of cinema with our Movie Quizzes. From classic films to the latest blockbusters, challenge your knowledge of movie trivia, famous quotes, iconic scenes, and legendary actors. Whether you're a film buff or just looking to test your Hollywood expertise, our Movie Quizzes offer a fun and engaging experience for all movie lovers."} />
                <CategoryWizeQuiz category={'Movie'} />
            </div>
            <div className="py-10 my-10 px-2 md:px-4 lg:px-6 xl:px-10">
                <Heading name={'Sports'} description={"Step up your game with our Sports Quizzes, covering everything from historical moments to recent championships. Whether you're a fan of football, basketball, cricket, or any other sport, these quizzes are perfect for testing your sports knowledge. Explore different sports topics, challenge yourself, and see how well you know the world's most thrilling games and athletes."} />
                <CategoryWizeQuiz category={'Sports'} />
            </div>
        </div>
    );
};

export default Quizes;