import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const PalleteCard = (props) => {
  function copyColorCode() {
    navigator.clipboard.writeText(props.color);
    props.isCopied();
  }

  return (
    <Flex
      bgColor={props.color ? props.color : "blackAlpha.700"}
      w="90vw"
      h="100px"
      borderRadius="16px"
      justifyContent="center"
      alignItems="center"
      cursor="pointer"
      color="white"
      _hover={{ color: "blackAlpha.900" }}
      onClick={copyColorCode}
    >
      <Text fontWeight="700" fontSize="1.3rem">
        {props.color ? props.color : "Click on Generate Or Hit the Spacebar"}
      </Text>
    </Flex>
  );
};

export default PalleteCard;
