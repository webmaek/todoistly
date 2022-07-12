import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  Home,
  ListDetails,
  CalendarEvent,
  Notebook,
  Wallet,
} from "tabler-icons-react";
import clsx from "clsx";
import Link from "next/link";

const settingsLinks = [
  {
    name: "Your profile",
    href: "/profile",
  },
  {
    name: "Settings",
    href: "/settings",
  },
  {
    name: "Logout",
    href: "/logout",
  },
];

function Sidebar() {
  const router = useRouter();

  const navigation = [
    {
      name: "Dashboard",
      href: "/",
      icon: Home,
      isActive: router.pathname === "/",
    },
    {
      name: "Task Board",
      href: "/task-board",
      icon: ListDetails,
      isActive: router.pathname === "/task-board",
    },
    {
      name: "Calendar & Events",
      href: "/calendar",
      icon: CalendarEvent,
      isActive: router.pathname === "/calendar",
    },
    {
      name: "To-Do",
      href: "/todo",
      icon: Notebook,
      isActive: router.pathname === "/todo",
    },
    {
      name: "Budget",
      href: "/budget",
      icon: Wallet,
      isActive: router.pathname === "/budget",
    },
  ];

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      p={8}
      bg="gray.900"
      color="white"
      minW="350px"
      w="350px"
      h="100vh"
    >
      <Flex flexDir="column">
        <Flex alignItems="center">
          <Box position="relative">
            <Image
              src="/logo.png"
              alt="Todoistly Logo"
              width={16}
              height={16}
            />
          </Box>

          <Heading as="h1" size="lg" fontWeight="bold" ml={4}>
            Todoistly
          </Heading>
        </Flex>

        <Flex flexDir="column" mt={4}>
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              <Flex
                alignItems="center"
                mt={2}
                p={3}
                rounded="lg"
                bg={clsx(item.isActive ? "indigo.800" : "indigo.500")}
                _hover={{ cursor: "pointer", bg: "indigo.700" }}
                transition="all 0.3s ease-in-out"
              >
                <Icon w={6} h={6}>
                  <item.icon />
                </Icon>
                <Text ml={4}>{item.name}</Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Flex>

      <Flex alignItems="center">
        <Popover placement="top-end">
          <PopoverTrigger>
            <Box
              position="relative"
              rounded="full"
              overflow="hidden"
              bg="indigo.500"
            >
              <Image src="/avatar.svg" alt="Avatar" width={16} height={16} />
            </Box>
          </PopoverTrigger>
          <PopoverContent
            maxW="150px"
            bg="indigo.800"
            border="none"
            rounded="md"
          >
            <PopoverBody>
              <Flex flexDir="column">
                {settingsLinks.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a>{item.name}</a>
                  </Link>
                ))}
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Flex flexDir="column" ml={4}>
          <Text>John Doe</Text>
          <Text fontSize="sm" fontWeight="light" color="gray.300">
            john@doe.com
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
