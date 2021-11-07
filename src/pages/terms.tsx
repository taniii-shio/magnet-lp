import { Box, Center, Heading } from "@chakra-ui/layout";
import { Footer } from "src/components/Footer";
import { TopimgBg } from "../components/organisms/TopimgBg";

export default function Contact() {
  return (
    <Box w="1300px" mx="auto">
      <TopimgBg />

      <Center mt="30">
        <Heading as="h1" size="2xl" d={["none", "block"]}>
          利用規約
        </Heading>
        <Heading as="h1" size="4xl" d={["block", "none"]}>
          利用規約
        </Heading>
      </Center>

      <Footer />
    </Box>
  );
}
