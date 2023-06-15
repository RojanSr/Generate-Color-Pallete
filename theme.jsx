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
});

export default theme;
