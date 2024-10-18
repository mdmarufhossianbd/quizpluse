'use client'
import Image from "next/image";
import InfoRank from "./infoRank";
import "./rank.css";

const Ranking = () => {
  
  return (
    <div className=" container mx-auto max-w-7xl pt-6 grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center ">
      {/* 1st card */}
      {
        users.map((user, idx) => {
          return (
            <div class="card wallet max-w-7xl mx-auto mb-6 px-4 sm:px-6 lg:px-8 border-b" key={idx}>
              <div class="overlay"></div>
              <div className="ml-2 p-2 bg-[#E7E7E7] rounded-tr-md w-auto grid h-[200px] absolute top-[23px] right-[30px] rounded-bl-lg">
                <InfoRank user={user}></InfoRank>
              </div>

              <Image
                className="bg-[#E7E7E7] rounded-md"
                src="https://engineering.unl.edu/images/staff/Kayla-Person.jpg"
                height={200}
                width={220}
                alt={user.name}
              />
              <div className="content w-[75%] text-black">
                <p className="text-2xl font-semibold">{user.name}</p>
                <p>Rewards: {user.total_reward}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Ranking;

const users = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    top_ranking: 2,
    average_quiz_mark: 87.5,
    total_quiz_number: 250,
    total_reward: 1200,
    user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    top_ranking: 5,
    average_quiz_mark: 87.5,
    total_quiz_number: 150,
    total_reward: 1200,
    user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    top_ranking: 2,
    average_quiz_mark: 87.5,
    total_quiz_number: 250,
    total_reward: 1200,
    user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    top_ranking: 5,
    average_quiz_mark: 87.5,
    total_quiz_number: 150,
    total_reward: 1200,
    user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    top_ranking: 2,
    average_quiz_mark: 87.5,
    total_quiz_number: 250,
    total_reward: 1200,
    user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    top_ranking: 5,
    average_quiz_mark: 87.5,
    total_quiz_number: 150,
    total_reward: 1200,
    user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
  },
];
