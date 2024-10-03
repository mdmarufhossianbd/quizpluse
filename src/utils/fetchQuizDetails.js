
export const getQuizDetails = async (_id) => {
    const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseURL}/api/quiz/${_id}`)
    const data = await res.json();
    const quiz = data.result
    console.log(quiz);
    return quiz
}