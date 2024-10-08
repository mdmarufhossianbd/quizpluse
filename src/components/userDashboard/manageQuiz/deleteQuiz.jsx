import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { IconTrash } from "@tabler/icons-react";
import axios from "axios";
import { toast, Toaster } from "sonner";

const DeleteQuiz = ({ id, setDelete, quizName }) => {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const handleDelete = async () => {
        try {
            axios.delete('/api/v1/quiz', { data: { id } })
                .then(res => {
                    if (res.data.result?.deletedCount === 1) {
                        setDelete(true)
                        toast.success('Successfully deleted quiz.')
                        onClose()
                    }
                })
        } catch (error) {
            toast.error(error?.message)
        }
    }

    return (
        <div>
            <Toaster position="top-right" richColors />
            <button onClick={onOpen}>
                <IconTrash stroke={2} />
            </button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    }
                }}>
                <ModalContent>
                    <ModalHeader className="flex  justify-center gap-1">Quiz Delete</ModalHeader>
                    <ModalBody>
                        <p className="text-center">
                           You are going to delete &apos;{quizName}&apos;. Are you sure?
                        </p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" variant="light" onPress={onClose}>
                            No Keep It.
                        </Button>
                        <Button color="danger" onClick={handleDelete}>
                            Yes Delete!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </div >
    );
};

export default DeleteQuiz;