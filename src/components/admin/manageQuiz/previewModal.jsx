'use client'
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { IconEyeShare } from "@tabler/icons-react";
import axios from "axios";
import { useState } from "react";

const PreviewModal = ({ id }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = useState("inside");
    const [quiz, setQuiz] = useState();

    const handleReview = async () => {
        onOpen()
        await axios.get(`/api/v1/quiz/${id}`)
            .then(res => {
                if (res.data.success) {
                    setQuiz(res.data.result)
                }
            })
    }

    return (
        <>
            <IconEyeShare onClick={handleReview} stroke={2} />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior={scrollBehavior}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Quiz Preview</ModalHeader>
                            <ModalBody>
                                <div>
                                    <h3 className="font-semibold text flex flex-col">Quiz Name :
                                        <span className="font-normal">{quiz?.quizName}</span>
                                    </h3>
                                    <div className="grid grid-cols-2 gap-2">
                                        <p className="flex flex-col font-semibold">Creator Email :
                                            <span className="font-normal">{quiz?.quizCreatorEmail}</span>
                                        </p>
                                        <p className="flex flex-col font-semibold">Creator Name :
                                            <span className="font-normal">{quiz?.quizCreatorName}</span>
                                        </p>
                                        <p className="flex flex-col font-semibold">Category :
                                            <span className="font-normal">{quiz?.quizCategory}</span>
                                        </p>
                                        <p className="flex flex-col font-semibold">Featured :
                                            <span className="font-normal">{quiz?.featured}</span>
                                        </p>
                                        <p className="flex flex-col font-semibold">total Questions :
                                            <span className="font-normal">{quiz?.totalQuestions}</span>
                                        </p>
                                        <p className="flex flex-col font-semibold">Quiz Duration :
                                            <span className="font-normal">{quiz?.quizDuration}</span>
                                        </p>
                                        <p className="flex flex-col font-semibold">Quiz Status :
                                            <span className="font-normal">{quiz?.quizStatus}</span>
                                        </p>
                                        <p className="flex flex-col font-semibold">Create Date :
                                            <span className="font-normal">{new Date(quiz?.createAt).toLocaleDateString()}</span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="font-semibold">questions :</p>
                                        {
                                            quiz?.questions.map((item, idx) => (
                                                <p key={idx}>
                                                    <span>{idx + 1} : </span>{item?.question}
                                                    {
                                                        item?.options.map((option, idx) => <li key={idx}>
                                                            {option}
                                                        </li>)
                                                    }
                                                    <span>Collect Ans : {item?.correctOption}</span>
                                                </p>
                                            ))
                                        }
                                    </div>

                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default PreviewModal;