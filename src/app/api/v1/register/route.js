import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(requset) {
    const db = await connectDB();
    const userCollection = db.collection('users')
    try {
        const data = await requset.json()
        const {userFullName, userEmail, userPassword} = data;
        const userChecked = await userCollection.findOne({userEmail : userEmail});
        if(userChecked){
            return NextResponse.json({
                message : 'You have already have an account. Please login',
                status : 406,
                success : false
            })
        }
        const userAccountOpeningDate = new Date();
        const generateUserName = userEmail.split('@');
        const userName = generateUserName[0];
        const userRole = 'generale-user';
        const userLavel = 'basic';
        const userProfileImage = ''
        const password = bcrypt.hashSync(userPassword, 14)
        const userInfo = {
            userAccountOpeningDate, userName, userFullName, userEmail, password, userRole, userLavel, userProfileImage
        }
        
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