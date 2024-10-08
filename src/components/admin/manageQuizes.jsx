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

const ManageQuizzes = () => {
  // const { data } = useSession();
  const [quizzes, setQuizzes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [deleted, setDelete] = useState(false)

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
                  <Chip color="primary" variant="dot" className="border-none">
                    Pending
                  </Chip>
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
