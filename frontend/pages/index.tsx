import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Todoistly</title>
      </Head>

      <Box bg="gray.900">
        <Text color="white">Hello World</Text>
      </Box>
    </>
  );
}
