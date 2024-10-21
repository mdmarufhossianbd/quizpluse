"use client";
import { Chip, Tab, Tabs, Tooltip } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../shared/pagination";
import SimpleLoading from "../shared/simpleLoading";
import DeleteQuiz from "../userDashboard/manageQuiz/deleteQuiz";
import PreviewModal from "./manageQuiz/previewModal";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "radix-ui";
import { FaChevronDown } from "react-icons/fa";

const ManageQuizzes = () => {
  // const { data } = useSession();
  const [quizzes, setQuizzes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [deleted, setDelete] = useState(false)

  const handelStatus=async(status,id)=>{
    console.log(status)
    try{
      const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
      const _id=id
      const res = await axios.put(`${baseURL}/api/v1/quiz/change-status`,{_id:_id,quizStatus:status})
      console.log(res.data);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    const fetchQuizzes = async (type) => {
      setLoading(true);
      try {
        const response = await axios.get(`/api/v1/quiz?type=${type}&page=${page}&limit=10`);
        if (response.data.success) {
          setQuizzes(response.data.result);
          setPage(response.data.currentPage);
          setTotalPages(response.data.totalPage);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching quiz data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchQuizzes(activeTab);
  }, [page, activeTab, deleted]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  return (
    <div>
      <Tabs selectedKey={activeTab} onChange={handleTabChange}>
        <Tab key="all" title="All Quizzes">
          All Quizzes
        </Tab>
        <Tab key="upcoming" title="Upcoming Quizzes">
          Upcoming Quizzes
        </Tab>
        <Tab key="most_participating" title="Most Participating Quizzes">
          Most Participating Quizzes
        </Tab>
      </Tabs>

      {loading && <SimpleLoading />}

      <Table>
        <TableHeader>
          <TableColumn>Serial</TableColumn>
          <TableColumn>Name</TableColumn>
          <TableColumn>Created Email</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Total Questions</TableColumn>
          <TableColumn>Duration</TableColumn>
          <TableColumn>Featured</TableColumn>
          <TableColumn>Status</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {quizzes.map((item, idx) => (
            <TableRow key={idx}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.quizName}</TableCell>
              <TableCell>{item.quizCreatorEmail}</TableCell>
              <TableCell>{item.quizCategory}</TableCell>
              <TableCell>{item.totalQuestions}</TableCell>
              <TableCell>{item.quizDuration}</TableCell>
              <TableCell>{item.featured}</TableCell>
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
                    <PreviewModal id={item._id} />  
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete Quiz">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <button>
                      <DeleteQuiz id={item?._id} quizName={item?.quizName} setDelete={setDelete} />
                    </button>
                  </span>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default ManageQuizzes;
