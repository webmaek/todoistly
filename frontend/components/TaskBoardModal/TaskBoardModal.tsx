import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Flex,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { nanoid } from "nanoid";

import type { Task } from "@/types/index";

type Inputs = {
  title: string;
  status: "todo" | "doing" | "done";
  priority: "low" | "medium" | "high";
  description?: string;
};

type TaskBoardModalProps = {
  isOpen: boolean;
  onClose: () => void;
  addTask: (task: Task) => void;
};

function TaskBoardModal({ isOpen, onClose, addTask }: TaskBoardModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const newTask = {
      ...data,
      id: nanoid(),
      description: data.description || "",
    };

    addTask(newTask);
    onClose();
  };

  console.log("errors", errors);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent minW="600px">
        <ModalHeader bg="gray.900" color="white">
          Add task
        </ModalHeader>
        <ModalCloseButton color="white" />

        <ModalBody pt={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.title}>
              <FormLabel htmlFor="task-title">Task Title</FormLabel>
              <Input
                id="task-title"
                type="text"
                {...register("title", {
                  required: "Task title is required",
                })}
              />
              <FormErrorMessage>
                {errors.title && errors.title.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.status}>
              <FormLabel htmlFor="task-status">Status</FormLabel>
              <Select
                {...register("status", { required: "Status is required" })}
                id="task-status"
                placeholder="Select status"
              >
                <option value="todo">Todo</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </Select>
              <FormErrorMessage>
                {errors.status && errors.status.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isInvalid={!!errors.priority}>
              <FormLabel htmlFor="task-priority">Priority</FormLabel>
              <Select
                {...register("priority", { required: "Priority is required" })}
                id="task-priority"
                placeholder="Select priority"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </Select>
              <FormErrorMessage>
                {errors.priority && errors.priority.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel htmlFor="task-description">Description</FormLabel>
              <Textarea
                {...register("description")}
                id="task-description"
                placeholder="Task description..."
                rows={5}
              />
            </FormControl>

            <Flex pt={10} pb={4} alignItems="center" justifyContent="flex-end">
              <Button type="submit" colorScheme="indigo" variant="outline">
                Create task
              </Button>
              <Button
                colorScheme="red"
                variant="outline"
                ml={2}
                onClick={onClose}
              >
                Cancel
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default TaskBoardModal;
