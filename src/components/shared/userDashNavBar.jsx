import { useSession } from "next-auth/react";
import UserDashInfo from "../header/userDashInfo";

const UserDashNavBar = () => {
  const { data } = useSession();
  // console.log(data);
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold mb-6 text-[#5C0096]">Dashboard</h1>
      <div className="mr-3 lg:flex hidden">
        <UserDashInfo user={data?.user}></UserDashInfo>
      </div>
    </div>
  );
};

export default UserDashNavBar;
