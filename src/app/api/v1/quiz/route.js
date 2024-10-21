import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes')
    try {
        const { searchParams } = new URL(request.url);
        const page = parseInt(searchParams.get('page')) || 1;
        const limit = parseInt(searchParams.get('limit')) || 10;
        const skip = (page - 1) * limit;
        const sort = { _id: -1 }
        const result = await quizCollection.find().sort(sort).skip(skip).limit(limit).toArray()
        const totalQuiz = await quizCollection.countDocuments()
        return NextResponse.json({
            message: 'Successfully loaded all quiz',
            status: 200,
            success: true,
            result,
            currentPage: page,
            totalPage: Math.ceil(totalQuiz / limit),
            totalQuiz
        })
    } catch (error) {
        return NextResponse.json({
            message: 'something went wrong',
            status: 500,
            success: false
        })
    }
}

export async function POST(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes')
    try {
        const data = await request.json()
        const quizData = {
            quizName: data.quizName,
            quizCategory: data.quizCategory,
            createAt: new Date(),
            quizImage: data.quizImage,
            quizCreatorEmail: data.quizCreatorEmail,
            quizCreatorName: data.quizCreatorName,
            quizDuration: parseInt(data.totalDuration),
            totalQuestions: parseInt(data.totalQuestions),
            questions: data.questions.map((q) => ({
                question: q?.question,
                options: q?.options,
                correctAnswer: q?.correctAnswer,
            })),
            quizStatus: 'pending',
            featured: 'No'
        }
        const result = await quizCollection.insertOne(quizData)
        return NextResponse.json({
            message: 'Successfully added your quiz',
            status: 200,
            result,
            success: true
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong',
            status: 500,
            success: false
        })
    }
}

export async function DELETE(request) {
    const db = await connectDB()
    const quizCollection = db.collection('quizes')
    try {
        const data = await request.json();
        const query = { _id: new ObjectId(data.id) }
        const result = await quizCollection.deleteOne(query);
        return NextResponse.json({
            message: 'Requested quiz deleted done',
            result,
            success: true,
            status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong'
        })
    }
}

export async function PUT(request) {
    const db = await connectDB();
    const quizCollection = db.collection('quizes')
    try {
        const data = await request.json();
        // console.log(data);
        const query = { _id: new ObjectId(data.id) };
        const oparation = {
            $set: {
                quizName: data.quizName,
                quizCategory: data.quizCategory,
                createAt: new Date(),
                quizImage: data.quizImage,
                quizCreatorEmail: data.quizCreatorEmail,
                quizCreatorName: data.quizCreatorName,
                quizDuration: parseInt(data.quizDuration),
                totalQuestions: parseInt(data.totalQuestions),
                questions: data.questions.map((q) => ({
                    question: q?.question,
                    options: q?.options,
                    correctAnswer: q?.correctAnswer,
                })),
            }
        }
        const result = await quizCollection.updateOne(query, oparation)
        return NextResponse.json({
            message: 'This quiz update successfully',
            result, success: true, status: 200
        })
    } catch (error) {
        return NextResponse.json({
            message: 'Something went wrong',
            success: false,
            status: 500
        })
    }
}