
export const getAllQuizes = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
    const res = await fetch(`${baseUrl}/api/v1/quiz`, {cache : 'no-store'})
    const data = await res.json();
    const quizes = data.result
    return quizes || []
}