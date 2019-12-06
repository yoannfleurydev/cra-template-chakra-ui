import React from "react";
import {
  ThemeProvider,
  CSSReset,
  Box,
  Image,
  Flex,
  Badge,
  Text
} from "@chakra-ui/core";
import { MdStar } from "react-icons/md";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />

      <Box
        maxWidth={400}
        p={4}
        borderRadius={4}
        borderWidth={2}
        borderStyle="solid"
        m="auto"
        my={4}
      >
        <Image rounded="md" src="https://bit.ly/2k1H1t6" />
        <Flex align="baseline" mt={2}>
          <Badge variantColor="pink">Plus</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            Verified &bull; Cape Town
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          Modern, Chic Penthouse with Mountain, City & Sea Views
        </Text>
        <Text mt={2}>$119/night</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontsize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
      </Box>

      <Text textAlign="center">Create React App Chakra UI</Text>
    </ThemeProvider>
  );
}

export default App;
