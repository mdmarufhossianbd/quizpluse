'use client'
import React, { useEffect, useState } from "react";
import "./rank.css";
import Image from "next/image";
import InfoRank from "./infoRank";
import axios from "axios";

const Ranking = () => {
  const [users,setUser]=useState([]);
  const [loading, setLoading]=useState(true)
  useEffect(()=>{
    axios.get(`/api/v1/user`)
    .then((respons)=>{
      setUser(respons.data.result)
      console.log(respons.data.result)
      setLoading(false)
    })
  },[])
  if(loading){
    return "loading";
  }
  return (
    <div className=" container mx-auto max-w-7xl pt-6 grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center ">
      {/* 1st card */}
      {
        users.map((user)=>{
          return(
            <div class="card wallet max-w-7xl mx-auto mb-6 px-4 sm:px-6 lg:px-8 border-b">
        <div class="overlay"></div>
        <div className="ml-2 p-2 bg-[#E7E7E7] bg-opacity-50 rounded-tr-md w-auto grid h-[200px] absolute top-[23px] right-[30px] rounded-bl-lg">
          <InfoRank ></InfoRank>
        </div>

        <Image
          className="bg-[#E7E7E7] rounded-md"
          src={user?.image || "https://engineering.unl.edu/images/staff/Kayla-Person.jpg"}
          alt={user?.image ||"https://engineering.unl.edu/images/staff/Kayla-Person.jpg"}
          height={200}
          width={220}
        ></Image>
        <div className="content w-[75%] text-black">
          <p className="text-2xl font-semibold">{user.name}</p>
          <p>Rewards:100</p>
        </div>
      </div>
          )
        })
      }
    </div>
  );
};

export default Ranking;

// const users = [
//   {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     top_ranking: 2,
//     average_quiz_mark: 87.5,
//     total_quiz_number: 250,
//     total_reward: 1200,
//     user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
//   },
//   {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     top_ranking: 5,
//     average_quiz_mark: 87.5,
//     total_quiz_number: 150,
//     total_reward: 1200,
//     user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
//   },
//   {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     top_ranking: 2,
//     average_quiz_mark: 87.5,
//     total_quiz_number: 250,
//     total_reward: 1200,
//     user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
//   },
//   {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     top_ranking: 5,
//     average_quiz_mark: 87.5,
//     total_quiz_number: 150,
//     total_reward: 1200,
//     user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
//   },
//   {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     top_ranking: 2,
//     average_quiz_mark: 87.5,
//     total_quiz_number: 250,
//     total_reward: 1200,
//     user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
//   },
//   {
//     name: "John Doe",
//     email: "johndoe@example.com",
//     top_ranking: 5,
//     average_quiz_mark: 87.5,
//     total_quiz_number: 150,
//     total_reward: 1200,
//     user_image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
//   },
// ];
