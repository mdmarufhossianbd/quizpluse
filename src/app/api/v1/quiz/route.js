import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes')
    try {
        const result = await quizCollection.find().toArray()
        return NextResponse.json({
            message : 'Successfully loaded all quiz',
            status : 200,
            success : true,
            result
        })
    } catch (error) {
        return NextResponse.json({
            message : 'something went wrong',
            status : 500,
            success : false
        })
    }
}

export async function POST(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes')
    try {
        const data = await request.json()
        
        return NextResponse.json({
            message : 'Successfully added your quiz',
            status : 200,
            data,
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