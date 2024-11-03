"use client";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../shared/pagination";
import { Button } from "../ui/button";
import DataLoader from "../shared/dataLoader/dataLoader";

const UserTable = () => {
  const [searchEmail, setSearchEmail] = useState("");
  const [totalUsers, setTotalUsers] = useState(0)
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const getAllUsers = async () => {
      setLoading(true)
      await axios.get(`/api/v1/user?email=${searchEmail}&page=${page}&limit=10`)
        .then(res => {
          // console.log(res.data);
          if (res.data.success) {
            setUsers(res.data.result);
            setPage(res.data.currentPage);
            setTotalPages(res.data.totalPages);
            setTotalUsers(res.data.totalUsers);
            setLoading(false)
          }
        })
    };
    getAllUsers();
  }, [page, searchEmail]);

  const handleSearch = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    setSearchEmail(email)
  }

  if (loading) {
    return <DataLoader />
  }

  return (
    <div className="p-4 w-full">
      <h2 className="font-semibold text-4xl text-center py-10 text-purple-950">
        Manage Users
      </h2>
      <div className="flex items-center justify-between mb-5">
        <form onSubmit={handleSearch}>
          <input className='border-l border-y px-4 py-1.5 rounded-l-full focus:outline-[#7556ff]' type="text" name="email" id="" placeholder='Enter your email' />
          <input className='border-r border-y px-4 py-1.5 rounded-r-full bg-[#7556ff] text-white hover:cursor-pointer' type="submit" value="Search" />
        </form>
        <p className='font-medium'>Total User Found : {totalUsers}</p>
      </div>
      <div className='rounded-md border'>
        <Table className='overflow-hidden'>
          <TableHeader>
            <TableRow className="bg-[#f2e9f1] text-lg">
              <TableHead className="text-black">SL.</TableHead>
              <TableHead className="text-black">Full Name</TableHead>
              <TableHead className="text-black">Username</TableHead>
              <TableHead className="text-black">User Role</TableHead>
              <TableHead className="text-black">Account Level</TableHead>
              <TableHead className="text-black">Email</TableHead>
              <TableHead className="text-black">View</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-lg font-medium">
            {
              users.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{idx + 1}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.username}</TableCell>
                  <TableCell>{item.role}</TableCell>
                  <TableCell>{item.level}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Button className='bg-[#7556ff] hover:bg-[#563fc0]'>View Profile</Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      {/* <div className="flex justify-between mt-4">
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
      </div> */}
    </div>
  );
};

export default UserTable;
