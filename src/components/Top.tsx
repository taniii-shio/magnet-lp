import { Box, Flex, Heading, Center } from "@chakra-ui/layout";
import Image from "next/image";

export const Top = () => {
  return (
    <Box mt="100">
      <Flex align="center" justify="space-between">
        <Box ml="20">
          <Box ml="20" mb="10">
            <Image src="/images/top.png" width={343.61} height={306} />
          </Box>
          <Image src="/images/store.png" width={460.42} height={70.03} />
        </Box>

        <Image src="/images/preview.png" width={672} height={596.39} />
      </Flex>
    </Box>
  );
};
