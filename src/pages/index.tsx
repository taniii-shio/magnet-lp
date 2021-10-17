import { Box } from "@chakra-ui/layout";
import { Feature } from "src/components/Feature";
import { Top } from "src/components/Top";
import { What } from "src/components/What";

export default function Home() {
  return (
    <Box w="1300px" mx="auto">
      <Top />

      <What />

      <Feature />
    </Box>
  );
}
