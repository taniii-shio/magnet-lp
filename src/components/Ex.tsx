import { Box, Flex, Heading, Center, Text } from "@chakra-ui/layout";
import Image from "next/image";

export const Ex = () => {
  return (
    <>
      <Box mt="200" d={["none", "block"]}>
        <Center mt="100">
          <Heading as="h2" size="lg">
            ・こんな経験ありませんか？
          </Heading>
        </Center>

        <Box mt="50">
          <Center mt="30">
            <Image src="/images/ex.png" width={1001.67} height={587.97} />
          </Center>

          <Center mt="30">
            <Image src="/images/arrow.png" width={95} height={108} />
          </Center>

          <Center mt="30" mr="500">
            <Heading as="h2" size="md">
              友達を遊びに誘うのを
            </Heading>
          </Center>

          <Center ml="500">
            <Image src="/images/hesitate.png" width={298.11} height={195.25} />
          </Center>

          <Center ml="300">
            <Heading as="h2" size="xl">
              ためらってしまう。
            </Heading>
          </Center>

          <Center mr="600">
            <Image src="/images/giveup.png" width={311.82} height={194.32} />
          </Center>

          <Center mr="300">
            <Heading as="h2" size="xl">
              諦めてしまう。
            </Heading>
          </Center>
        </Box>

        <Center mt="100">
          <Heading
            as="h1"
            size="lg"
            fontFamily="Days One, sans-serif"
            fontWeight="100"
          >
            ・MAGNET
          </Heading>
          <Heading as="h1" size="lg">
            を使えば
          </Heading>
        </Center>

        <Center mt="50">
          <Image src="/images/positive.png" width={642.92} height={318.03} />
        </Center>

        <Center mt="30">
          <Image src="/images/arrow.png" width={95} height={108} />
        </Center>

        <Center mt="30">
          <Flex align="center">
            <Image src="/images/logo.png" width={343.61} height={252.3} />
            <Heading as="h2" size="xl" ml="10" mt="10">
              を見てみよう！
            </Heading>
          </Flex>
        </Center>

        <Center mt="30">
          <Image src="/images/arrow.png" width={95} height={108} />
        </Center>

        <Center mt="30">
          <Flex align="center">
            <Image src="/images/modal.png" width={582} height={390} />
            <Heading as="h2" size="xl" ml="10">
              暇な友達が待っている！
            </Heading>
          </Flex>
        </Center>
      </Box>

      {/* responsive */}
      <Box mt="300" d={["block", "none"]}>
        <Center mt="100">
          <Heading as="h2" size="2xl">
            ・こんな経験ありませんか？
          </Heading>
        </Center>

        <Box mt="40">
          <Center>
            <Image src="/images/exSP.png" width={1209.25} height={942.76} />
          </Center>

          <Center mt="40">
            <Image src="/images/arrow.png" width={95} height={108} />
          </Center>

          <Center mt="30" mr="500">
            <Heading as="h2" size="2xl">
              友達を遊びに誘うのを
            </Heading>
          </Center>

          <Center ml="500">
            <Image src="/images/hesitate.png" width={298.11} height={195.25} />
          </Center>

          <Center ml="300">
            <Text fontSize="6xl" fontWeight="bold">
              ためらってしまう。
            </Text>
          </Center>

          <Center mr="600">
            <Image src="/images/giveup.png" width={311.82} height={194.32} />
          </Center>

          <Center mr="300">
            <Text fontSize="6xl" fontWeight="bold">
              諦めてしまう。
            </Text>
          </Center>
        </Box>

        <Center mt="300">
          <Heading
            as="h1"
            size="2xl"
            fontFamily="Days One, sans-serif"
            fontWeight="100"
          >
            ・MAGNET
          </Heading>
          <Heading as="h1" size="2xl">
            を使えば
          </Heading>
        </Center>

        <Box mt="40">
          <Center mt="50">
            <Image src="/images/positive.png" width={1040} height={514.45} />
          </Center>

          <Center mt="40">
            <Image src="/images/arrow.png" width={95} height={108} />
          </Center>

          <Center mt="30">
            <Flex align="center">
              <Image src="/images/logo.png" width={343.61} height={252.3} />
              <Heading as="h2" size="3xl" ml="10" mt="10">
                を見てみよう！
              </Heading>
            </Flex>
          </Center>

          <Center mt="30">
            <Image src="/images/arrow.png" width={95} height={108} />
          </Center>

          <Center mt="40">
            <Flex align="center">
              <Image src="/images/modal.png" width={582} height={390} />
              <Heading as="h2" size="xl" ml="10">
                暇な友達が待っている！
              </Heading>
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
};
