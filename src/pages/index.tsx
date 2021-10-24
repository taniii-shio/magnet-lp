import { Box } from "@chakra-ui/layout";

import { Ex } from "src/components/Ex";
import { Feature } from "src/components/Feature";
import { Howtouse } from "src/components/Howtouse";
import { Top } from "src/components/Top";
import { What } from "src/components/What";

export default function Home() {
  return (
    <Box w="1300px" mx="auto">
      <Top />

      <What />

      <Feature />

      <Ex />

      <Howtouse />
    </Box>
  );
}
