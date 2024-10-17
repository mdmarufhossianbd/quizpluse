import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function POST(request) {
    const db = await connectDB();
    const paymentCollection = db.collection('payments')
    try {
        const data = await request.json();
        const query = {transactionId : data.transactionId};
        const result = await paymentCollection.findOne(query)
        return NextResponse.json({
            message : 'Payment successfully',
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