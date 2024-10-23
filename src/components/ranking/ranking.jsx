'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import InfoRank from './infoRank';
import './rank.css';

const Ranking = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/user');
        setUsers(response.data.result);
        console.log(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return 'loading...';
  }

  const fallbackImage = "https://engineering.unl.edu/images/staff/Kayla-Person.jpg";

  return (
    <div className="container gap-2 mx-auto max-w-7xl pt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center">
      {users.map((user, idx) => (
        <div
          className="card wallet max-w-7xl mx-auto mb-6 px-4 sm:px-6 lg:px-8 border-b"
          key={idx}
        >
          <div className="overlay"></div>
          <div className="ml-2 p-2 bg-[#E7E7E7] rounded-tr-md w-auto grid h-[200px] absolute top-[23px] right-[30px] rounded-bl-lg">
            <InfoRank user={user} />
          </div>

          <Image
            className="bg-[#E7E7E7] rounded-md"
            src={user.image || fallbackImage} // Use fallback image if user.image is null/undefined
            height={200}
            width={220}
            alt={user.name || 'User'}
          />
          <div className="content w-[75%] text-black">
            <p className="text-2xl font-semibold">{user.name}</p>
            <p>Rewards: {user.rewards}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ranking;


// "https://engineering.unl.edu/images/staff/Kayla-Person.jpg"