'use client'
import { useSession } from "next-auth/react";

const UserDashboard = () => {
    const {data, status} = useSession();
    if(status === 'loading'){
        return <p>Loading</p>
    }
    console.log(data);
    return (
        <div>
            <p>logged in your name is {data?.user?.name}</p>
        </div>
    );
};

export default UserDashboard;