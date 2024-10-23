'use client'
import gift from "@/../public/assets/image/christmas-gift-box-free-png.webp";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";

import CustomBtn from "@/components/shared/customBtn";
import Chart from "@/components/ui/chart.jsx";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ProgressHistory = () => {
  const { data } = useSession()
  const userEmail = data?.user?.email
  const [quizResult, setQuizResult] = useState([])
  const [reward, setReward] = useState(0)
  const [totalCompletedQuiz, setTotalCompletedQuiz] = useState(0)


  useEffect(() => {
    const getResultDetails = async () => {
      await axios.get(`/api/v1/quiz/user-progress?email=${userEmail}`)
        .then(res => {
          console.log(res.data);
          if (res.data?.success) {
            setReward(res?.data?.reward)
            setTotalCompletedQuiz(res?.data?.totalCompletedQuiz)
            setQuizResult(res?.data?.quizResult)
          }
        })
    }
    getResultDetails()
  }, [userEmail])

  const overallAccuracy = ProgressData[0]?.overview?.overallAccuracy;
  const averageScore = ProgressData[0]?.overview?.averageScore;
  const totalQuizzesCompleted =
    ProgressData[0]?.overview?.totalQuizzesCompleted;
  const progressValue = parseFloat(overallAccuracy);
  const avrageScoreValue = parseFloat(averageScore);
  return (
    <div>
      <section className="flex lg:flex-row flex-col">
        {/* progess */}
        <div className="lg:w-[50%] w-full">
          <h1 className=" md:text-3xl text-2xl">Overall Progess</h1>
          <Card className="grid m-2 p-2 ">
            {/* <Captions title="Overall progess"></Captions> */}
            <div className="flex items-center gap-2 justify-evenly m-4 p-2">
              <h1 className="w-32  relative text-[#7556FF]">
                Overall Accuracy{" "}
              </h1>
              <Progress value={progressValue} />
              <p>{overallAccuracy}</p>
            </div>
            <div className="flex items-center gap-2 justify-evenly m-4 p-2">
              <h1 className="w-32  relative text-[#7556FF]">avrage Score</h1>
              <Progress value={avrageScoreValue} />
              <p>{`${avrageScoreValue}%`}</p>
            </div>
            <div className="flex items-center gap-2 justify-evenly m-4 p-2">
              <h1 className="w-32  relative text-[#7556FF]">
                Total Completed Quiz
              </h1>
              <Progress value={totalCompletedQuiz} />
              <p>{totalCompletedQuiz}</p>
            </div>
          </Card>
        </div>
        <div className="grid lg:w-[50%] w-full items-start">
          {/* <Captions title="Rewards"></Captions> */}
          <h1 className=" md:text-3xl text-2xl">Rewards</h1>
          <Card className="my-4 py-2 relative grid justify-center -top-2 h-[330px] bg-gradient-to-r from-indigo-500">
            <Image src={gift} height={250} width={200} alt="gift" />
            <CustomBtn title={`Total Reward :${reward}`}></CustomBtn>
          </Card>
        </div>
      </section>
      <section>
        <h2 className="text-3xl my-4">Score Bar Chart</h2>

        <Chart quizResult={quizResult}></Chart>
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
      scores: [70, 80, 85, 90],
      accuracy: ["80%", "82%", "85%", "88%"],
    },
    quizHistory: [
      {
        quizId: "quiz123",
        category: "Science",
        dateCompleted: "2024-09-10",
        score: 85,
        accuracy: "90%",
        timeSpent: "3m 45s",
      },
      {
        quizId: "quiz124",
        category: "History",
        dateCompleted: "2024-09-12",
        score: 78,
        accuracy: "80%",
        timeSpent: "5m 10s",
      },
    ],
    categoryBreakdown: {
      Science: {
        quizzesCompleted: 20,
        averageScore: 80,
        accuracy: "85%",
      },
      History: {
        quizzesCompleted: 15,
        averageScore: 75,
        accuracy: "80%",
      },
    },
    achievementMilestones: {
      unlocked: [
        "Quiz Master - Scored 100% on a quiz",
        "Streak Champion - Completed 5 quizzes in a row",
      ],
      upcoming: [
        "Speed Demon - Complete a quiz in under 3 minutes",
        "Perfectionist - Answer 10 quizzes with 100% accuracy",
      ],
    },
    improvementTips: [
      "Focus more on History quizzes to improve your overall score.",
      "Try to complete quizzes faster without sacrificing accuracy.",
    ],
    goals: {
      currentGoal: {
        description: "Complete 5 quizzes this week",
        progress: 3,
        target: 5,
        deadline: "2024-09-30",
      },
    },
    comparisonToPeers: {
      globalRanking: 150,
      scoreDifference: "+5%",
      averageTimeDifference: "-30s",
    },
    favoriteQuizzes: [
      {
        quizId: "quiz126",
        category: "Science",
        score: 95,
        accuracy: "98%",
      },
    ],
    questionAnalysis: [
      {
        questionId: "q1",
        questionText: "What is the chemical symbol for water?",
        correctAnswers: 95,
        incorrectAnswers: 5,
        userCorrect: true,
      },
      {
        questionId: "q2",
        questionText: "Who was the first president of the United States?",
        correctAnswers: 80,
        incorrectAnswers: 20,
        userCorrect: false,
      },
    ],
  },
  {
    userId: "67890",
    overview: {
      totalQuizzesCompleted: 30,
      overallAccuracy: "72%",
      averageScore: 65,
      averageTimePerQuiz: "5m 20s",
    },
    performanceGraph: {
      dates: ["2024-08-01", "2024-08-15", "2024-09-01", "2024-09-15"],
      scores: [60, 70, 75, 65],
      accuracy: ["65%", "70%", "75%", "72%"],
    },
    quizHistory: [
      {
        quizId: "quiz789",
        category: "Math",
        dateCompleted: "2024-09-12",
        score: 70,
        accuracy: "75%",
        timeSpent: "6m 10s",
      },
      {
        quizId: "quiz790",
        category: "Literature",
        dateCompleted: "2024-09-14",
        score: 60,
        accuracy: "68%",
        timeSpent: "4m 55s",
      },
    ],
    categoryBreakdown: {
      Math: {
        quizzesCompleted: 10,
        averageScore: 72,
        accuracy: "76%",
      },
      Literature: {
        quizzesCompleted: 8,
        averageScore: 62,
        accuracy: "70%",
      },
      Geography: {
        quizzesCompleted: 12,
        averageScore: 65,
        accuracy: "68%",
      },
    },
    achievementMilestones: {
      unlocked: [
        "Consistent Performer - Completed 30 quizzes",
        "Accuracy Expert - Achieved 75% accuracy in Math",
      ],
      upcoming: [
        "Speed Runner - Finish a quiz in under 4 minutes",
        "Knowledge Guru - Score over 90% on 5 quizzes",
      ],
    },
    improvementTips: [
      "Improve accuracy in Literature quizzes by focusing on critical reading.",
      "Try spending less time on Geography questions to increase speed.",
    ],
    goals: {
      currentGoal: {
        description: "Improve overall accuracy to 75%",
        progress: "72%",
        target: "75%",
        deadline: "2024-10-15",
      },
    },
    comparisonToPeers: {
      localRanking: 25,
      scoreDifference: "-3%",
      averageTimeDifference: "+45s",
    },
    favoriteQuizzes: [
      {
        quizId: "quiz791",
        category: "Geography",
        score: 85,
        accuracy: "90%",
      },
    ],
    questionAnalysis: [
      {
        questionId: "q10",
        questionText: "What is the capital of Japan?",
        correctAnswers: 88,
        incorrectAnswers: 12,
        userCorrect: true,
      },
      {
        questionId: "q11",
        questionText: "What is 5 squared?",
        correctAnswers: 95,
        incorrectAnswers: 5,
        userCorrect: false,
      },
    ],
  },
];

export default ProgressHistory;
