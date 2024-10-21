'use client'
import { Chip, Tooltip } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { IconEdit } from "@tabler/icons-react";
import Link from "next/link";
import PreviewModal from "../admin/manageQuiz/previewModal";
import DeleteQuiz from "../userDashboard/manageQuiz/deleteQuiz";
import MakeFeatured from "./makeFeatured";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "radix-ui";
import { FaChevronDown } from "react-icons/fa";
import axios from 'axios';

const QuizTable = ({ quizzes, setDelete, email, setFeatured }) => {
  const handelStatus=async(status,id)=>{
    console.log(status)
    try{
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
      const _id=id
      const res = await axios.put(`${baseURL}/api/v1/quiz/change-satus`,{_id:_id,quizStatus:status})
      console.log(res.data);
    }
    catch(error){
      console.log(error);
    }
  }
  return (
    <Table>
      <TableHeader>
        <TableColumn>Serial</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>Category</TableColumn>
        <TableColumn>Total Questions</TableColumn>
        <TableColumn>Duration</TableColumn>
        <TableColumn>Featured</TableColumn>
        <TableColumn>Status</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {quizzes?.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell>{item.quizName}</TableCell>
            <TableCell>{item.quizCategory}</TableCell>
            <TableCell>{item.totalQuestions}</TableCell>
            <TableCell>{item.quizDuration}</TableCell>
            <TableCell>
              <MakeFeatured
                quizId={item._id}
                isFeatured={item.featured}
                email={email}
                setFeatured={setFeatured}
              />
            </TableCell>
            <TableCell>
              {item.quizStatus === "publish" && (
                <Chip color="success" variant="dot" className="border-none">
                  Published
                </Chip>
              )}
               {item.quizStatus === "pending" && (
                < div className="flex">
                  <Chip color="primary" variant="dot" className="border-none">
                    Pending
                  </Chip>
                  <div style={{ position: "relative" }}>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <button className="btn text-sm p-2 ">
                          <FaChevronDown></FaChevronDown>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        style={{
                          position: "absolute",
                          top: "100%",
                          left: 0,
                          zIndex: 10,
                          backgroundColor: "white",
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          padding: "0.5rem",
                          borderRadius: "0.375rem",
                        }}
                      >
                        <DropdownMenuLabel>
                          <button onClick={()=>handelStatus('publish',item._id)} className="btn p-2 hover:bg-[#5C1296] hover:text-white">
                            Publish
                          </button>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel>
                          <button onClick={()=>handelStatus('rejected',item._id)} className="btn p-2 hover:bg-[#5C1296] hover:text-white">
                            Reject
                          </button>
                        </DropdownMenuLabel>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </ div>
              )}
              {item.quizStatus === "rejected" && (
                <Chip color="danger" variant="dot" className="border-none">
                  Rejected
                </Chip>
              )}
            </TableCell>
            <TableCell className="flex justify-start gap-2">
              <Tooltip content="View">
                <span className="text-lg cursor-pointer active:opacity-50">
                  <PreviewModal id={item?._id} />
                </span>
              </Tooltip>
              <Tooltip content="Edit">
                <span className="text-lg cursor-pointer active:opacity-50">
                  <button>
                    <Link
                      href={`/user-dashboard/manage-quiz/edit-quiz/${item?._id}`}
                    >
                      <IconEdit stroke={2} />
                    </Link>
                  </button>
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete Quiz">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteQuiz
                    id={item?._id}
                    setDelete={setDelete}
                    quizName={item?.quizName}
                  />
                </span>
              </Tooltip>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default QuizTable;
