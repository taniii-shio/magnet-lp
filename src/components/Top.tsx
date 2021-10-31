import { Box, Flex, Heading, Center } from "@chakra-ui/layout";
import Image from "next/image";

export const Top = () => {
  return (
    <Box mt="100">
      <Box d={["none", "block"]}>
        <Flex align="center" justify="space-between">
          <Box ml="20">
            <Box ml="20" mb="10">
              <Image src="/images/top.png" width={343.61} height={306} />
            </Box>
            <Image src="/images/store.png" width={460.42} height={70.03} />
          </Box>

          <Box>
            <Image src="/images/preview.png" width={672} height={596.39} />
          </Box>
        </Flex>
      </Box>

      <Box mt="300" d={["block", "none"]}>
        <Center>
          <Box mb="20" ml="20">
            <Image src="/images/top.png" width={635.69} height={541} />
          </Box>
        </Center>
        <Center>
          <Image src="/images/store.png" width={734} height={111.65} />
        </Center>
      </Box>
    </Box>
  );
};
