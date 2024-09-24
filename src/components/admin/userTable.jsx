'use client'
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input"



const UserTable = () => {

  const [searchEmail, setSearchEmail] = useState("");

  // Sample list of users (you can replace this with your dynamic data)
  const users = [
    { name: "User One", email: "user1@gmail.com" },
    { name: "User Two", email: "user2@gmail.com" },
    { name: "User Three", email: "user3@gmail.com" },
  ];

  // Filter users based on the searchEmail
  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchEmail.toLowerCase())
  );


  return (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">User Management</h2>
        <Input type="email" name='email' placeholder="Email" />
      </div>

      <Table className="w-full border-collapse border border-gray-200 shadow-md">
        <TableCaption className="text-gray-600">
          A list of your recent users.
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="w-[150px] p-4 text-left">Name</TableHead>
            <TableHead className="p-4 text-left">Email</TableHead>
            <TableHead className="p-4 text-left">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="hover:bg-gray-50 transition-colors">
            <TableCell className="p-4 font-medium">User</TableCell>
            <TableCell className="p-4">user1@gmail.com</TableCell>
            <TableCell className="p-4">
              <Button variant="ghost" className="text-blue-600 hover:underline">
                View Profile
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default UserTable;
