import React, { useState } from "react";
import { VStack, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import PalleteCard from "./components/PalleteCard";
import GenerateBtn from "./components/GenerateBtn";
import NotifyCopy from "./components/NotifyCopy";

export default function App() {
  const [colors, setColors] = useState([]);
  const [copied, setCopied] = useState(false);

  function getColors(colorArr) {
    setColors(colorArr);
  }

  function copiedAlert() {
    //if no color is generated then no copied message
    if (!colors.length) {
      return;
    }

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  }

  return (
    <Box maxH="100vh" maxW="100vw" my="40px">
      <VStack my="30px">
        <Header />
        <VStack spacing="3" my="30px">
          <PalleteCard color={colors[0]} isCopied={copiedAlert} />
          <PalleteCard color={colors[1]} isCopied={copiedAlert} />
          <PalleteCard color={colors[2]} isCopied={copiedAlert} />
          <PalleteCard color={colors[3]} isCopied={copiedAlert} />
          <PalleteCard color={colors[4]} isCopied={copiedAlert} />
        </VStack>
        <GenerateBtn toggleColor={getColors} />
        {copied && <NotifyCopy />}
      </VStack>
    </Box>
  );
}
