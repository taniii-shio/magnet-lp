import { Box, Flex, Heading, Center } from "@chakra-ui/layout";
import Image from "next/image";

export const What = () => {
  return (
    <>
      <Box mt="100" d={["none", "block"]}>
        <Center>
          <Heading
            as="h1"
            size="2xl"
            fontFamily="Days One, sans-serif"
            fontWeight="100"
          >
            MAGNET
          </Heading>
          <Heading as="h1" size="2xl">
            とは
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

      <Box mt="300" d={["block", "none"]}>
        <Center>
          <Heading
            as="h1"
            size="4xl"
            fontFamily="Days One, sans-serif"
            fontWeight="100"
          >
            MAGNET
          </Heading>
          <Heading as="h1" size="4xl">
            とは
          </Heading>
        </Center>
        <Center>
          <Heading as="h1" size="3xl" mt="10">
            友達の暇が一見でわかる掲示板SNS
          </Heading>
        </Center>

        <Center mt="40">
          <Image src="/images/3display.png" width={658} height={691.35} />
        </Center>

        <Center>
          <Heading as="h1" size="2xl" mt="40" w="700px">
            暇という無限大のエネルギーを 「友達や大切な人と遊ぶ」という
            かけがえのない幸せへと変換します。
          </Heading>
        </Center>
      </Box>
    </>
  );
};
