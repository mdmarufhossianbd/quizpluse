import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";


export async function PUT(request) {
    const db = await connectDB()
    const userCollection = db.collection('users')
    try {
        const data = await request.json()
        // {need data in data _id, password, newPassword}
        const password = data.password
        const hashNewPassWord = bcrypt.hashSync(data.newPassword, 14)
        const query = {_id : new ObjectId(data._id)}
        const existingUser = await userCollection.findOne(query);
        if(!existingUser){
            return NextResponse.json({
                message : 'Invalid Credentials',
                status : 401,
                success : false
            })
        }
        const checkPassword = bcrypt.compareSync(password, existingUser.password)
        if(!checkPassword){
            return NextResponse.json({
                message : 'Invalid Credentials',
                status : 401,
                success : false
            })
        }
        const oparation = {
            $set : {
                password : hashNewPassWord
            }
        }
        const result = await userCollection.updateOne(query, oparation)
        return NextResponse.json({
            message : 'Successfully changed your password',
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