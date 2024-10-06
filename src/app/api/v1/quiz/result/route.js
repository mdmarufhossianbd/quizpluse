import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
    const db = await connectDB();
    const resultCollection = db.collection('results');
    try {
        const data = await request.json();
        const result = await resultCollection.insertOne(data);
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