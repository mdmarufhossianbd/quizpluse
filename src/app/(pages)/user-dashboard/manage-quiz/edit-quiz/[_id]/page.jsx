import EditQuiz from '@/components/userDashboard/manageQuiz/editQuiz';
import axios from 'axios';
import React from 'react';


const getQuizDetails = async (_id) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await axios.get(`${baseURL}/api/v1/quiz/${_id}`)
    const data = await res.data;
    const quiz = data.result
    return quiz;
}


const page = async ({ params }) => {
    const { _id } = await params;
    const quiz = await getQuizDetails(_id)

    return (
        <div>
            <EditQuiz quiz={quiz}></EditQuiz>
        </div>
    );
};

export default page;