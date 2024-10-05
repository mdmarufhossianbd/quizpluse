import { IconLogout } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUser } from "react-icons/fa";
import logo from "../.../../../../public/assets/logo.png";
import UpgreadCard from "./upgreadCard";
import SimpleCardPromo from "./simpleCardPromo";
const Sidebar = ({ navLinks, isSidebarOpen }) => {
    const { data } = useSession();
    const pathname = usePathname()


    const handleLogout = () => {
        signOut();
    };

    return (
        <div className={`bg-[#f5f5f5] w-[270px] fixed top-0 right-2 min-h-screen flex flex-col transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} lg:relative lg:translate-x-0 transition-transform duration-300 z-40 overflow-y-auto`}>
            <div>
                <Link href={'/'} target="_blank">
                    <Image src={logo} width={230} height={80} alt="Logo" />
                </Link>
            </div>
            {/* user info */}
            <div className="flex items-center py-5 border-b pl-2">
                <div className="mr-3">
                    {data ? (
                        <Image
                            src={
                                data?.user?.image
                                    ? data?.user?.image
                                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2RIsrYrlbEcNP7xnxLQ2gYiylcUqzsrVSwKR1wrvLV4x06yFGVbnYB7rnbBE2gRxxjU&usqp=CAU"
                            }
                            alt={data?.user?.name}
                            width={56}
                            height={56}
                            className="rounded-full border border-purple-800"
                        />
                    ) : (
                        <FaUser className="w-10 h-10 p-1 text-center border-2 rounded-full text-purple-800" />
                    )}
                </div>
                <div>
                    <h2 className="text-lg font-semibold">{data?.user?.name}</h2>
                    <p className="text-sm text-gray-500">{data?.user?.email}</p>
                </div>
            </div>
            {/* nav links */}
            <nav className="overflow-hidden">
                {
                    navLinks?.map((item, idx) => <div key={idx} className={`py-2 w-full border-b hover:scale-105 duration-300 pl-2 ${pathname === item.url && 'bg-[#7556ff] text-white'}`}>
                        <Link href={item.url} className="flex items-center gap-2">{item.icon}{item.name}</Link>
                    </div>)
                }
                <button onClick={handleLogout} className="flex items-center w-full gap-2 pl-2 border-b py-2 hover:scale-105 duration-300"><IconLogout stroke={2} />Sign Out</button>
            </nav>
            {/* Upgrade */}
            <div className='relative top-20'>
            {/* <UpgreadCard></UpgreadCard> */}
            <SimpleCardPromo></SimpleCardPromo>
            </div>
        </div>
    );
};

export default Sidebar;