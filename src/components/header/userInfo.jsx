import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const UserInfo = ({ user }) => {
    const handleLogout = () => {
        signOut();
    };
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger className="border border-[#5C0096] rounded-full">
                    <Image className="rounded-full" src={user?.image ? user?.image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2RIsrYrlbEcNP7xnxLQ2gYiylcUqzsrVSwKR1wrvLV4x06yFGVbnYB7rnbBE2gRxxjU&usqp=CAU'} alt={user.name} height={48} width={48} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link className="w-full" href={user?.role === 'general-user' ? '/user-dashboard' : '/admin'}>Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className="w-full" href={user?.role === 'general-user' ? '/user-dashboard/plans' : ''}>Billing</Link>

                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link className="w-full" href={user?.role === 'general-user' ? '/user-dashboard/profile' : '/admin/profile'}>Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className='hover:cursor-pointer'>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default UserInfo;