import ManageQuiz from '@/components/userDashboard/manageQuiz/manageQuiz';

const ManageQuizzes = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6 text-center">Manage Quizzes</h2>
            <ManageQuiz className="overflow-x-auto"></ManageQuiz>
        </div>
    );
};

export default ManageQuizzes;