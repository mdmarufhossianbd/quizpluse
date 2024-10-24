'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import QuizzesSlider from '../quizzesSlider/quizzesSlider';

const CategoryWizeQuiz = ({ category }) => {
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        const getQuizByCategory = async () => {
            try {
                const res = await axios.get(`/api/v1/quiz/category-wise-quiz?category=${category}`)
                setQuizzes(res.data?.result)
            } catch (error) {
                toast.error(error.message)
            }
        }
        getQuizByCategory()

    }, [category])

    return (
        <div>
            <QuizzesSlider quizes={quizzes} />
        </div>
    );
};

export default CategoryWizeQuiz;