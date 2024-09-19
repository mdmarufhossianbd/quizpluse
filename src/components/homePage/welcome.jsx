import PopularQuize from "./popular/popularQuize";

const Welcome = () => {
    return (
        <div>
            Welcome to QuizPluse
            <h1 className='text-3xl font-bold m-2 p-2'>Popular Quize</h1>
            <PopularQuize></PopularQuize>
        </div>
    );
};

export default Welcome;