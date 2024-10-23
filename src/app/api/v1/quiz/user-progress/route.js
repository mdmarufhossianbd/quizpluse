import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
    const db = await connectDB();        
    const resultCollection = db.collection('results');   
    const {searchParams} = new URL(request.url);
    const email = searchParams.get('email');
    const query = {userEmail : email}
    const quizResult = await resultCollection.find(query).toArray();
    const totalPoints = await resultCollection.aggregate([
        {
            $match : {userEmail : email}
        },
        {
            $group : {
                _id : "$userEmail",
                totalEarnedPoints : {$sum : "$earnedPoint"}
            }
        }
    ]).toArray();
    const totalCompletedQuiz = await resultCollection.countDocuments(query)
    if(totalPoints.length === 0){
        return NextResponse.json({
            message : 'Successfully get details',
            status : 200,
            success : true,
            quizResult,
            reward : 0,
            totalCompletedQuiz,
        })
    }
    return NextResponse.json({
        message : 'Successfully get details',
        status : 200,
        success : true,
        quizResult,
        reward : totalPoints[0].totalEarnedPoints,
        totalCompletedQuiz,
    })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}