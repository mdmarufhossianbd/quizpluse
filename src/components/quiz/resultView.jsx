import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

const ResultView = ({ userAnswers, quiz }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    return (
        <>
            <div className="flex justify-center mb-4">
                <button className="px-7 py-2 rounded-full bg-[#381269] hover:shadow-xl shadow-[#381269] hover:scale-105 duration-300 text-white" onClick={onOpen}>See Result</button>
            </div>
            <Modal
                scrollBehavior="inside"
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size="2xl"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent>
                    <>
                        <ModalHeader className="flex flex-col gap-1">Result Details :</ModalHeader>
                        <ModalBody>
                            {
                                quiz?.questions.map((q, idx) => (
                                    <div key={idx} className="mb-2">
                                        <p className="flex flex-col"><span className="font-semibold">Question {idx + 1}: </span>
                                            {q?.question}
                                        </p>
                                        <p className="flex gap-2"><span className="font-semibold">Your Answer : </span>
                                        {userAnswers[idx] !== null ? q.options[userAnswers[idx]] : "Not Answered"}
                                        </p>
                                    </div>
                                ))
                            }
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={onClose} className="bg-[#5c1983] text-white px-6 py-2 rounded">
                                Close
                            </button>
                        </ModalFooter>
                    </>
                </ModalContent>
            </Modal>
        </>
    );
};

export default ResultView;