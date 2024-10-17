import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB();
    const paymentCollection = db.collection('payments')
    try {
        const {searchParams} = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const email = searchParams.get('email') || '';
        const skip = (page - 1) * limit
        const sort = {_id : -1}
        const query = {email : email}
        const result = await paymentCollection.find(query).skip(skip).sort(sort).limit(limit).toArray();
        const totalPayments = await paymentCollection.countDocuments(query);
        return NextResponse.json({
            message : 'All Payment info',
            status : 200,
            success : true,
            result,
            totalPayments,
            totalPages : Math.ceil(totalPayments / limit),
            currentPage: page
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false,
        })
    }
}