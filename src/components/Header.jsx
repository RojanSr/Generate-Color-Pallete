import React from "react";
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Heading
      as="h1"
      fontSize={["1.9rem", "2rem", "2.5rem"]}
      textAlign="center"
      color="blackAlpha.700"
    >
      Color Pallete
    </Heading>
  );
};

export default Header;
