"use client";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const ProgressHistory = () => {
  const performanceGraph = ProgressData[0]?.performanceGraph;
  const chartData = performanceGraph.dates.map((date, index) => ({
    date,
    score: performanceGraph.scores[index],
    accuracy: parseFloat(performanceGraph.accuracy[index]),
  }));

  return (
    <div>
      <section className="mt-8">
        <h2 className="text-3xl mb-4">Score Bar Chart</h2>
        <ResponsiveContainer width="100%" height={500}>
          {/* <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#7556FF" />
          </BarChart> */}
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#8884d8" width={20} />
            <Bar dataKey="accuracy" fill="#82ca9d" width={20} />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

const ProgressData = [
  {
    userId: "12345",
    overview: {
      totalQuizzesCompleted: 50,
      overallAccuracy: "85%",
      averageScore: 78,
      averageTimePerQuiz: "4m 30s",
    },
    performanceGraph: {
      dates: ["2024-09-01", "2024-09-08", "2024-09-15", "2024-09-22"],
      scores: [70, 80, 50, 90],
      accuracy: ["80%", "82%", "85%", "88%"],
    },
  },
];

export default ProgressHistory;
