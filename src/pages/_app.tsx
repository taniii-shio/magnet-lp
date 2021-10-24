import Head from "next/head";

import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Days+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
