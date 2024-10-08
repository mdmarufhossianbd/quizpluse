import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const UserDashInfo = ({ user }) => {
  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border border-[#5C0096] rounded-full">
        <Image
          className="rounded-full"
          src={
            user?.image
              ? user.image
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2RIsrYrlbEcNP7xnxLQ2gYiylcUqzsrVSwKR1wrvLV4x06yFGVbnYB7rnbBE2gRxxjU&usqp=CAU"
          }
          alt={user?.name || "User Image"}
          height={48}
          width={48}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Dashboard</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/" className="w-full">
          Home
        </Link>
        <DropdownMenuItem></DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/quizes" className="w-full">
            quizes
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={() => signOut()}
        >
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDashInfo;
