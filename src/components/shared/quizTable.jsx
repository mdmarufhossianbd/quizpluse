import { Chip, Tooltip } from "@nextui-org/react";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/table";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import PreviewModal from "../admin/manageQuiz/previewModal";

const QuizTable = ({ quizzes }) => {
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
        {quizzes.map((item, idx) => (
          <TableRow key={idx}>
            <TableCell>{idx + 1}</TableCell>
            <TableCell>{item.quizName}</TableCell>
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
                  <PreviewModal id={item?._id} />
                </span>
              </Tooltip>
              <Tooltip content="Edit">
                <span className="text-lg cursor-pointer active:opacity-50">
                  <button>
                    <IconEdit stroke={2} />
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
  );
};

export default QuizTable;
