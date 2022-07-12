import { Container, Flex } from "@chakra-ui/react";

import Sidebar from "@/components/Sidebar";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex bg="gray.100">
      <Sidebar />

      <Container as="main" maxW="7xl" p={4}>
        {children}
      </Container>
    </Flex>
  );
}
export default Layout;
