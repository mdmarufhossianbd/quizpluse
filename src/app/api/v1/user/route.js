import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB();
    const userCollection = db.collection('users')
    try {
        const {searchParams} = new URL(request.url);
        const email = searchParams.get('email') || ''
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;
        const sort = {_id : -1};
        const filter = email ? { email } : {};
        const result = await userCollection.find(filter).sort(sort).skip(skip).limit(limit).toArray()
        const totalUsers = await userCollection.countDocuments(filter);
        return NextResponse.json({
            message : 'Successfully loaded data',
            status : 200,
            success : true,
            result,
            currentPage : page,
            totalPages : Math.ceil(totalUsers / limit),
            totalUsers
        })
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}

// user profile update
export async function PUT(request) {
    const db = await connectDB();
    const userCollection = db.collection('users')
    try {
        const data = await request.json()
        const {email, name, _id} = data
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}