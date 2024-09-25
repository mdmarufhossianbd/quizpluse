"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";

const UserTable = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [more, setMore] = useState(true); 
  const limit = 5; 
  const totalPages = 10; 

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const res = await axios.get(
          `/api/v1/user?email=${searchEmail}&page=${page}&limit=${limit}`
        );
        const userData = res.data.result;
        setUsers(userData);

        setMore(userData.length === limit);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getAllUsers();
  }, [page, searchEmail]);

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (more) {
      setPage(page + 1);
    }
  };

  return (
    <div className="p-4 w-full">
      <h2 className="font-semibold text-4xl text-center py-10 text-purple-950">Manage Users</h2>
      <div className="mb-4 w-56 border border-purple-300 rounded-xl">
        <Input
          type="email"
          name="email"
          placeholder="Search by email"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="border-none"
        />
      </div>

      <Table className="w-full border-collapse border border-purple-300 shadow-md">
        <TableHeader>
          <TableRow className="bg-purple-200 text-xl">
            <TableHead className="p-4 font-bold text-black">No.</TableHead>
            <TableHead className="p-4 font-bold text-black">Name</TableHead>
            <TableHead className="p-4 font-bold text-black">Email</TableHead>
            <TableHead className="p-4 font-bold text-black">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-lg font-medium">
          {users.length > 0 ? (
            users.map((user, index) => (
              <TableRow
                key={user._id}
                className="hover:bg-gray-50 transition-colors"
              >
                <TableCell className="p-4 font-bold">
                  {(page - 1) * limit + index + 1}
                </TableCell>
                <TableCell className="p-4 font-medium">
                  {user.userFullName || user.username}
                </TableCell>
                <TableCell className="p-4">
                  {user.userEmail || user.email}
                </TableCell>
                <TableCell className="p-4">
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:underline text-lg"
                  >
                    View Profile
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} className="p-4 text-center">
                No users found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {/* Pagination*/}
    
      <div className="flex justify-between mt-4">
      <div>
      <span className="text-lg font-bold text-purple-800">
          Page: {page} of {totalPages}
        </span>
      </div>

       <div className="flex gap-3">
       <Button
         
          className="text-lg bg-purple-200 text-black font-semibold hover:bg-slate-100"
          onClick={handlePrevPage}
          disabled={page === 1}
        >
          ← Previous
        </Button>
        
        <Button
          
          className="text-lg bg-purple-200 text-black font-semibold hover:bg-slate-100"
          onClick={handleNextPage}
          disabled={!more}
        >
          Next →
        </Button>
       </div>
      </div>
    </div>
  );
};

export default UserTable;
