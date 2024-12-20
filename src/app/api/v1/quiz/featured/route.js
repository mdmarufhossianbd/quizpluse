import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request)  {
    const db = await connectDB();
    const quizCollection = db.collection('quizes');
    try {
        const {searchParams} = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const query = {featured : 'Yes'};
        const skip = (page -1) * limit;
        const sort = {_id: -1};
        const totalQuiz = await quizCollection.countDocuments(query);
        const result = await quizCollection.find(query).sort(sort).skip(skip).limit(limit).toArray()
        return NextResponse.json({
            message: 'All featured quizzes',
            status: 200,
            success: true,
            totalQuiz,
            result,
            currentPage: page,
            totalPages: Math.ceil(totalQuiz / limit)
        });
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong',
            success: false,
            status: 500
        })
    }
}