import React from "react";
import { TbScoreboard } from "react-icons/tb";
import { FiClock } from "react-icons/fi";
import { LuClipboardCheck } from "react-icons/lu";
import { FaRegQuestionCircle } from "react-icons/fa";


const HowItWorks = () => {
  const cards = [
    {
      icon: <FaRegQuestionCircle  size={40} />,
      title: "Question Display",
      description:
        "Feature: Display questions one by one or all at once.Store the questions in an array of objects where each object contains a question, multiple options, and the correct answer.",
    },
    {
      icon: <FiClock size={40} />,
      title: "Timer",
      description:
        "Feature: Set a timer for each question or for the entire quiz.Display a countdown timer for each question, and automatically move to the next question or submit the answer once the time is up.",
    },
    {
      icon: <TbScoreboard size={40} />,
      title: "Score Calculation",
      description:
        "Feature: Track the user’s score based on correct answers. For each correct answer, award points (e.g., 1 point per correct answer). Sum up the points at the end of the quiz to display the total score.",
    },
    {
      icon: <LuClipboardCheck size={40} />,
      title: "Result Display",
      description:
        "Feature: Show the final score and feedback when the quiz is completed.After quiz completion, display the total score along with the number of correct, incorrect, and unanswered questions.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-semibold py-10">
        How it Works
      </h1>
      <div className="p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#7534f7] p-10 shadow-lg text-start rounded-lg transition duration-200 ease-in-out hover:bg-gray-800 hover:scale-105"
              style={{ minHeight: "300px" }}
            >
              <div className="text-white mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-gray-200 group-hover:text-white text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
