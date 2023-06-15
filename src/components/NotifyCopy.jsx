import React from "react";
import { Circle, VStack, Text } from "@chakra-ui/react";

const NotifyCopy = () => {
  return (
    <VStack
      w="300px"
      h="160px"
      bgColor="whiteAlpha.900"
      position="absolute"
      top="50%"
      transform="translateY(-50%)"
      borderRadius="20px"
      py="30px"
    >
      <Circle p="12px" bgColor="lightgreen">
        <i className="fa-solid fa-check" style={{ fontSize: "1.8rem" }}></i>
      </Circle>
      <Text>Copied Successfully!</Text>
    </VStack>
  );
};

export default NotifyCopy;
