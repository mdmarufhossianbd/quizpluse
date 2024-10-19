import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes');
    const userCollection = db.collection('users');
    try {
        const data = await request.json();
        const email = data.email
        // user checking
        const user = await userCollection.findOne({ email: email });
        if (!user) {
            return NextResponse.json({
                message: 'Unauthorized Access',
                status: 301,
                success: false
            })
        }
        // basic user
        if (user.level === 'basic') {
            return NextResponse.json({
                message: 'Please upgrade your account',
                status: 204,
                success: false
            })
        }
        // starter user
        if (user.level === 'starter') {
            // calculate last one month
            const startDate = new Date(user.planStartAt);
            const endDate = new Date(startDate);
            endDate.setMonth(endDate.getMonth() + 1)
            const query = {
                crcreateAt: {
                    $gte: startDate,
                    $lt: endDate
                }
            }
            // finding last one month quizzes
            const lastMonthRequest = await quizCollection.find(query).toArray()
            if (lastMonthRequest.length >= 5) {
                return NextResponse.json({
                    message: 'Opps!!! Finished your reserved quota',
                    status: 204,
                    success: false
                })
            }
            // making featured
            const queryForQuiz = { _id: new ObjectId(data.quizId) }
            const oparation = {
                $set: {
                    featured: 'Yes'
                }
            }
            const result = await quizCollection.updateOne(queryForQuiz, oparation);
            return NextResponse.json({
                message: 'This quiz is featured now',
                status: 200,
                success: true,
                result
            })
        }
        // calculate year
        const startDate = new Date(user.planStartAt);
        const endDate = new Date(startDate);
        endDate.setMonth(endDate.getMonth() + 12)
        const query = {
            crcreateAt: {
                $gte: startDate,
                $lt: endDate
            }
        }
        // finding total quizzes
        const lastYearRequest = await quizCollection.find(query).toArray();
        if (lastYearRequest.length >= 60) {
            return NextResponse.json({
                message: 'Opps!!! Finished your reserved quota',
                status: 204,
                success: false
            })
        }
        // making featured
        const queryForQuiz = { _id: new ObjectId(data.quizId) }
        const oparation = {
            $set: {
                featured: 'Yes'
            }
        }
        const result = await quizCollection.updateOne(queryForQuiz, oparation);
        return NextResponse.json({
            message: 'This quiz is featured now',
            status: 200,
            success: true,
            result
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong',
            status: 500,
            success: false
        })
    }
}