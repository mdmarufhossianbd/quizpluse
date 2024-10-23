import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
    const db = await connectDB();
    const userCollection = db.collection('users');
    const resultCollection = db.collection('results');
    const quizCollection = db.collection('quizes');
    try {
        const data = await request.json();
        const userEmail = data.email;
        const query = {email : userEmail}
        const result = await userCollection.findOne(query)
        if(!result){
            return NextResponse.json({
                message : 'Invalid Credentials',
                status : 401,
                success : false
            })
        }
        const totalParticipatedQuiz = await resultCollection.countDocuments({userEmail : userEmail});
        const totalCreatedQuizzes = await quizCollection.countDocuments({quizCreatorEmail : userEmail});
        const totalPoints = await resultCollection.aggregate([
            {
                $match : {userEmail : userEmail}
            },
            {
                $group : {
                    _id : "$userEmail",
                    totalEarnedPoints : {$sum : "$earnedPoint"}
                }
            }
        ]).toArray();
        if(totalPoints.length === 0){
            return NextResponse.json({
                message : 'user data',
                success : true,
                status : 200,
                result,
                totalParticipatedQuiz,
                totalCreatedQuizzes,
                totalEarnedPoints : 0
            })
        }
        return NextResponse.json({
            message : 'user data',
            success : true,
            status : 200,
            result,
            totalParticipatedQuiz,
            totalCreatedQuizzes,
            totalEarnedPoints : totalPoints[0].totalEarnedPoints
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}

export async function PUT(request, {params}) {
    const db = await connectDB();
    const userCollection = db.collection('users')
    try {
        const data = await request.json();
        const {email} = params;
        const filter = {email : email};
        const oparation = {
            $set : {
                name : data.name,
                username : data.username,
                image : data.image
            }
        }
        const result = await userCollection.updateOne(filter, oparation);
        return NextResponse.json({
            message : 'Your information update successfully',
            status : 200,
            result,
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