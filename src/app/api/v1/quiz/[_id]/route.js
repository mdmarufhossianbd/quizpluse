import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(params) {
    const db = await connectDB();
    const quizCollection = db.collection();
    try {
        const {_id} = await params.json();
        const query = {_id : new ObjectId(_id)};
        const result = await quizCollection.findOne(query);
        return NextResponse.json({
            message : 'Successfully recived data',
            status : 200,
            result,
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