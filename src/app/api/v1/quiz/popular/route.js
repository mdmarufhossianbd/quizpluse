import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes');
    try {
        const {searchParams} = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const query = {
            quizStatus: 'publish',
            totalParticipated: { $gte: 5 }
          }
        const skip = (page -1) * limit;
        const sort = {_id: -1}
        const totalQuizzes = await quizCollection.countDocuments(query)
        const result = await quizCollection.find(query).sort(sort).skip(skip).limit(limit).toArray();
        return NextResponse.json({
            message: 'All Popular Quiz',
            status: 200,
            success: true,
            totalQuizzes,
            result,
            currentPage: page,
            totalPages: Math.ceil(totalQuizzes / limit)
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong',
            status: 500,
            success: false
        })
    }
}