"use client";

import { Chip, Tooltip, Tab, Tabs } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { IconEyeShare, IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Pagination from "../shared/pagination";
import SimpleLoading from "../shared/simpleLoading";

const ManageQuizzes = () => {
  const { data } = useSession();
  const [quizzes, setQuizzes] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getQuizData = async () => {
      setLoading(true);
      try {
        const categoryQuery = selectedCategory === "All" ? "" : `&category=${selectedCategory}`;
        const response = await axios.get(`/api/v1/quiz?page=${page}&limit=10${categoryQuery}`);
        
        if (response.data.success) {
          setQuizzes(response.data.result);
          setPage(response.data.currentPage);
          setTotalPages(response.data.totalPage);

          
          const quizCategories = [
            "All",
            ...new Set(response.data.result.map((item) => item.quizCategory)),
          ];
          setCategories(quizCategories);

          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching quiz data", error);
        setLoading(false);
      }
    };
  

    getQuizData();
  }, [page, selectedCategory]);
  const handleTabChange = (category) => {
    setSelectedCategory(category);
    setPage(1); 
  };

  return (
    <div>
      {loading && <SimpleLoading />}
      <Tabs value={selectedCategory} onValueChange={handleTabChange}>
        {categories.map((category, idx) => (
          <Tab key={idx} title={category} value={category}>
            {category}
          </Tab>
        ))}
      </Tabs>
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
                <Tooltip content="Details">
                  <span className="text-lg cursor-pointer active:opacity-50">
                    <button>
                      <IconEyeShare stroke={2} />
                    </button>
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Delete Quiz">
                  <span className="text-lg text-danger cursor-pointer active:opacity-50">
                    <button>
                      <IconTrash stroke={2} />
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
