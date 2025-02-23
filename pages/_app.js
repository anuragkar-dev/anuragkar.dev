import { ChakraProvider } from "@chakra-ui/react";
// import { Analytics } from "@vercel/analytics/next";
import { Analytics } from "@vercel/analytics/react"
import Layout from "../components/layouts/main";
import theme from "../components/theme";
import "../styles/carousel.css";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
      <Analytics /> 
    </ChakraProvider>
  );
};

export default Website;
