import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
    const db = await connectDB();
    const resultCollection = db.collection('results');
    try {
        const data = await request.json();
        const query = {quizId : data?.quizId};
        const existingQuiz = await resultCollection.findOne(query);
        if(!existingQuiz){
            const result = await resultCollection.insertOne(data);
            return NextResponse.json({
                result,
                message : 'Successfully added result',
                status : 200,
                success : true
            })
        }
        const oparation = {
            $set : {
                quizId : data?.quizId,
                quizName : data?.quizName,
                quizImage : data?.quizImage,
                userEmail : data?.userEmail,
            }
        }
        const result = await resultCollection.updateOne(query, oparation);
        return NextResponse.json({
            result,
            message : 'Successfully added result',
            status : 200,
            success : true
        })
    } catch (error) {
        return NextResponse.json({
            message : 'something went wrong',
            status : 500,
            success : false
        })
    }
}

export async function GET(request) {
    try {
        const db = await connectDB();
        const resultCollection = db.collection('results');
        const {searchParams} = new URL(request.url);
        const email = searchParams.get('email') || '';
        console.log(email);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page -1) * limit
        const sort = {_id : -1};
        const result = await resultCollection.find({userEmail : email}).sort(sort).skip(skip).limit(limit).toArray();
        const totalParticipatedQuiz = await resultCollection.countDocuments({userEmail : email})
        return NextResponse.json({
            message : 'Successfully found results',
            status : 200,
            success : true,
            result,
            totalParticipatedQuiz,
            currentPage : page,
            totalPage : Math.ceil(totalParticipatedQuiz / limit)
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}