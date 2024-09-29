import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes')
    try {
        const data = await request.json();
        const query = {_id : new ObjectId(data._id)}
        const oparation = {
            $set : {
                featured : data.featured
            }
        }
        const result = await quizCollection.updateOne(query, oparation);
        return NextResponse.json({
            message : 'This quiz is featured now',
            status : 200,
            success : true,
            result
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}