import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes');
    try {
        const {_id} = params;       
        const query = {_id : new ObjectId(_id)}
        const result = await quizCollection.findOne(query);
        if(!result){
            return NextResponse.json({message : 'page not found', status : 404, success : false})
        }
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