"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const ProgressHistory = ({quizResult}) => {

  const totalPoints = quizResult.map(q => q?.totalPoint)
  const earnedPoints = quizResult.map(q => q?.earnedPoint)
  const quizData = quizResult.map((q, index) => (
    {
      quizName : q.quizName, totalPoint : totalPoints[index], earnedPoint : earnedPoints[index]
    }
  ))

  return (
    <div>
      <section className="mt-8">
        <h2 className="text-3xl mb-4">Score Bar Chart</h2>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart data={quizData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="quizName" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="totalPoint" fill="#8884d8" width={20} />
            <Bar dataKey="earnedPoint" fill="#82ca9d" width={20} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};


export default ProgressHistory;
