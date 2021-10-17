import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "black",
      },
    },
  },
});

export default theme;
