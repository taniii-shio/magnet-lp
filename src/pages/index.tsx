import { Box } from "@chakra-ui/layout";
import { Top } from "src/components/Top";
import { What } from "src/components/What";

export default function Home() {
  return (
    <Box w="1300px" mx="auto">
      <Top />

      <What />
    </Box>
  );
}
