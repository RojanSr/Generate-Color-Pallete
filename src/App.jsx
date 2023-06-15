import React, { useState } from "react";
import { VStack, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import PalleteCard from "./components/PalleteCard";
import GenerateBtn from "./components/GenerateBtn";

export default function App() {
  const [colors, setColors] = useState([]);

  function getColors(colorArr) {
    setColors(colorArr);
  }

  return (
    <Box>
      <VStack my="30px">
        <Header />
        <VStack spacing="3" my="15px">
          <PalleteCard color={colors[0]} />
          <PalleteCard color={colors[1]} />
          <PalleteCard color={colors[2]} />
          <PalleteCard color={colors[3]} />
          <PalleteCard color={colors[4]} />
        </VStack>
        <GenerateBtn toggleColor={getColors} />
      </VStack>
    </Box>
  );
}
