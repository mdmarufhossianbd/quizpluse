import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const db = await connectDB();
    const resultCollection = db.collection('results');
    const quizCollection = db.collection('quizes');
    const userCollection = db.collection('users');
    try {
        const data = await request.json();
        const query = { quizId: data?.quizId, userEmail : data.userEmail };
        const existingQuizResult = await resultCollection.findOne(query);
        if (!existingQuizResult) {
            // insert result in the db
            const result = await resultCollection.insertOne(data);
            // increment participate quiz number
            const updateQuizParticipated = {
                $inc: { totalParticipated: 1 }
            }
            const query = {
                _id: new ObjectId(data.quizId)
            }
            const updateQuizParticipatedResult = await quizCollection.updateOne(query, updateQuizParticipated);

            // update rewards and increment participate in the db
            const oparations = {
                $inc: {
                    rewards: data.earnedPoint,
                    participatedQuizes: 1
                }
            }
            const queryForUser = { email: data.userEmail };
            const updateResult = await userCollection.updateOne(queryForUser, oparations);
            return NextResponse.json({
                result,
                updateResult,
                updateQuizParticipatedResult,
                message: 'Successfully added result',
                status: 200,
                success: true
            })
        } 
        // result collection update
        const oparation = {
            $set: {
                quizId: data?.quizId,
                quizName: data?.quizName,
                quizImage: data?.quizImage,
                userEmail: data?.userEmail,
                earnedPoint: data.earnedPoint,
                totalPoint: data.totalPoint
            }
        }
        const resultUpdate = await resultCollection.updateOne(query, oparation);
        // adjust rewards and increment participate in the db
        const previusQuizReward = existingQuizResult.earnedPoint
        const rewards = data.earnedPoint - previusQuizReward
        const oparationForUser = {
            $inc: {
                rewards: rewards,
                participatedQuizes: 1
            }
        }
        const queryForUser = { email: data.userEmail };
        const userRewardsUpdate  = await userCollection.updateOne(queryForUser, oparationForUser);
        return NextResponse.json({
            resultUpdate,
            userRewardsUpdate,
            message: 'Successfully added result',
            status: 200,
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            message: 'something went wrong',
            status: 500,
            success: false
        })
    }
}

export async function GET(request) {
    try {
        const db = await connectDB();
        const resultCollection = db.collection('results');
        const { searchParams } = new URL(request.url);
        const email = searchParams.get('email') || '';
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit
        const sort = { _id: -1 };
        const result = await resultCollection.find({ userEmail: email }).sort(sort).skip(skip).limit(limit).toArray();
        const totalParticipatedQuiz = await resultCollection.countDocuments({ userEmail: email })
        return NextResponse.json({
            message: 'Successfully found results',
            status: 200,
            success: true,
            result,
            totalParticipatedQuiz,
            currentPage: page,
            totalPage: Math.ceil(totalParticipatedQuiz / limit)
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong',
            status: 500,
            success: false
        })
    }
}