import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Poppins, sans-serif",
        bgColor: "#92BCEA",
        color: "#282933",
      },
    },
  },
  breakpoints: {
    sm: "80em",
    md: "48em",
    lg: "62em",
    xl: "80em",
  },
});

export default theme;
