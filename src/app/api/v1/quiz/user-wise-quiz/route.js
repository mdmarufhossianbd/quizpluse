import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes');
    try {
        const {searchParams} = new URL(request.url);
        const email = searchParams.get('email') || ''
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;
        const sort = {_id : -1};
        const filter = {quizCreatorEmail : email}
        const result = await quizCollection.find(filter).sort(sort).skip(skip).limit(limit).toArray();
        const totalQuizes = await quizCollection.countDocuments(filter);
        return NextResponse.json({
            message : 'Successfully loaded quizes',
            status : 200,
            success : true,
            result,
            currentPage : page,
            totalPages : Math.ceil(totalQuizes / limit),
            totalQuizes
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Somethig went wrong',
            success : false,
            status : 500
        })
    }
}