import { getAllQuizes } from '@/utils/fetchQuizes';
import QuizCard from '../shared/quizCard';


const PopularQuize = async () => {

  const quizes = await getAllQuizes()

  return (
    <div className="lg:max-w-7xl xl:max-w-full mx-auto lg:px-16 px-5">
      <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold lg:text-black text-center lg:my-20 md:my-16 my-10'>Popular Quizes</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {quizes?.map(item => <QuizCard key={item?._id} item={item} />)}
      </div>
    </div>
  );
};

export default PopularQuize;
