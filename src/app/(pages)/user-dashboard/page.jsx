'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";

const UserDashboard = () => {
    const { data, status } = useSession();
    if (status === 'loading') {
        return <p>Loading</p>
    }
    console.log(data);
    return (
        <div>
            <p>logged in your name is {data?.user?.name}</p>
            <Link className="btn p-6 my-8 text-purple-800 font-extrabold" href='/user-dashboard/add-quiz'>Add Quiz</Link>

        </div>
    );
};

export default UserDashboard;