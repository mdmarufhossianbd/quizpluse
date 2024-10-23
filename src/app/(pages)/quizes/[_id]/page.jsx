import QuizPlayground from '@/components/quiz/quizPlayground';
import axios from 'axios';

const getQuizDetails = async(_id) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await axios.get(`${baseURL}/api/v1/quiz/${_id}`)
    const data = await res.data;
    const quiz = data.result
    return quiz;
}

const QuizPlay = async ({ params }) => {
    const {_id} = await params;
    const quiz = await getQuizDetails(_id)
    // console.log('quiz =>', quiz);
    return (
        <div>
            <QuizPlayground quiz={quiz} />
        </div>
    );
};

export default QuizPlay;