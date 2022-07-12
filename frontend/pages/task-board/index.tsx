import { useState } from "react";
import Head from "next/head";
import clsx from "clsx";
import {
  Box,
  Button,
  Icon,
  Heading,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import { Trash, Edit } from "tabler-icons-react";

import type { Task } from "@/types/index";

import TaskBoardModal from "@/components/TaskBoardModal";

const mock_tasks = [
  {
    id: "1",
    title: "Do something task 1",
    status: "todo",
    priority: "Low",
    description: "",
  },
  {
    id: "2",
    title: "Do something task 2",
    status: "doing",
    priority: "Medium",
    description: "",
  },
  {
    id: "3",
    title: "Do something task 3",
    status: "done",
    priority: "High",
    description: "",
  },
];

function TaskBoardPage() {
  const [tasks, setTasks] = useState(mock_tasks);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <Head>
        <title>Todoistly | Task Board</title>
      </Head>

      <TaskBoardModal isOpen={isOpen} onClose={onClose} addTask={addTask} />

      <Box pt={16}>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading as="h1" size="2xl">
            Task Board
          </Heading>
          <Button colorScheme="indigo" onClick={onOpen}>
            Add Task
          </Button>
        </Flex>
        <TableContainer mt={10}>
          <Table variant="simple" bg="white">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Status</Th>
                <Th>Priority</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {tasks.map((task) => (
                <Tr
                  key={task.id}
                  _hover={{ bg: "gray.200", cursor: "pointer" }}
                  transition="all 0.2s ease-in-out"
                >
                  <Td>{task.title}</Td>
                  <Td>
                    <Box
                      p={1}
                      rounded="lg"
                      textAlign="center"
                      bg={clsx(
                        task.status === "todo" && "orange.400",
                        task.status === "doing" && "yellow.400",
                        task.status === "done" && "teal.400"
                      )}
                    >
                      {task.status === "todo"
                        ? "To Do"
                        : task.status === "doing"
                        ? "Doing"
                        : "Done"}
                    </Box>
                  </Td>
                  <Td>{task.priority}</Td>
                  <Td maxW="50px">
                    <Flex alignItems="center">
                      <Button colorScheme="sky" color="white">
                        <Icon w={4} h={4}>
                          <Edit />
                        </Icon>
                      </Button>
                      <Button colorScheme="red" color="white" ml={4}>
                        <Icon w={4} h={4}>
                          <Trash />
                        </Icon>
                      </Button>
                    </Flex>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default TaskBoardPage;
