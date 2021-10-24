import { Box, Flex, Heading, Center } from "@chakra-ui/layout";
import Image from "next/image";

export const What = () => {
  return (
    <Box mt="100">
      <Center>
        <Heading as="h1" size="3xl">
          MAGNETとは
        </Heading>
      </Center>

      <Center mt="100">
        <Flex align="center">
          <Box mr="100">
            <Heading as="h2" size="xl">
              友達の暇が一目でわかる掲示板SNS
            </Heading>
            <Box w="500px" mt="5">
              <p>
                暇という無限大のエネルギーを「友達や大切な人と遊ぶ」というかけがえのない幸せへと変換します。
              </p>
            </Box>
          </Box>
          <Image src="/images/3display.png" width={458} height={481} />
        </Flex>
      </Center>
    </Box>
  );
};
