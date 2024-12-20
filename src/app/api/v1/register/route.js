import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(requset) {
    const db = await connectDB();
    const userCollection = db.collection('users')
    try {
        const data = await requset.json()
        const {name, email, password} = data;
        const userChecked = await userCollection.findOne({email : email});
        if(userChecked){
            return NextResponse.json({
                message : 'You have already have an account. Please login',
                status : 406,
                success : false
            })
        }
        const createAt = new Date();
        const generateUserName = email.split('@');
        const username = generateUserName[0];
        const role = 'general-user';
        const level = 'basic';
        const image = 'https://avatar.iran.liara.run/public/boy?username=Ash';
        const passwordEncrypt = bcrypt.hashSync(password, 14)
        const createdQuizes = 0;
        const rewards = 0;
        const participatedQuizes = 0
        const userInfo = {createAt, username, name, email, password : passwordEncrypt, role, level, image, createdQuizes, rewards, participatedQuizes}
        const result = await userCollection.insertOne(userInfo)
        return NextResponse.json({
            message : 'Successfully create your account',
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