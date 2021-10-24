import { Box, Flex, Heading, Center, Divider } from "@chakra-ui/layout";
import Image from "next/image";

export const Download = () => {
  return (
    <Box mt="100">
      <Center>
        <Heading as="h1" size="3xl">
          ダウンロードはこちらから
        </Heading>
      </Center>

      <Flex align="center" justify="center" mt="50">
        <Box mr="40">
          <Image src="/images/icon.png" width={214.57} height={220} />
        </Box>
        <Image src="/images/store.png" width={460.42} height={70.03} />
      </Flex>
    </Box>
  );
};
