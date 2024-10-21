import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PUT(request) {
  const db = await connectDB();
  const quizCollection = db.collection('quizes');
  try {
    const data = await request.json();
    const query = { _id: new ObjectId(data._id) };
    const operation = {
      $set: { quizStatus: data.quizStatus },
    };
    const result = await quizCollection.updateOne(query, operation);
    return NextResponse.json({
      message: 'Quiz status updated successfully',
      status: 200,
      result,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: 'Something went wrong',
      status: 500,
    });
  }
}
