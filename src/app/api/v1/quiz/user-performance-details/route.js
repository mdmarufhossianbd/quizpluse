import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const db = await connectDB();
        const quizCollection = db.collection('quizes');
        const resultCollection = db.collection('result');
        const {searchParams} = new URL(request.url);
        const email = searchParams.get('email') || ''
        const query = {quizCreatorEmail : email}
        const totalCreatedQuiz = await quizCollection.countDocuments(query)
        return NextResponse.json({
            message : 'Successfully get details',
            totalCreatedQuiz,
            status : 200,
            success : true
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}