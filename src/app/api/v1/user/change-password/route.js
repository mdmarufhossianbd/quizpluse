import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const db = await connectDB()
    const userCollection = db.collection('users')
    try {
        const data = await request.json()
        const password = data.password
        // const checkPassword = await 
    } catch (error) {
        return NextResponse.json({
            message : 'Something went wrong',
            status : 500,
            success : false
        })
    }
}