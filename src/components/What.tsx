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

      <Center mt="100">
        <Heading as="h2" size="xl">
          ・こんな経験ありませんか？
        </Heading>
      </Center>

      <Box mt="50">
        <Center>
          <Flex align="center">
            <Image src="/images/positive.png" width={535} height={365} />
            <Heading as="h2" size="xl" mx="10">
              BUT
            </Heading>
            <Image src="/images/negative.png" width={535} height={365} />
          </Flex>
        </Center>

        <Center mt="30">
          <Image src="/images/arrow.png" width={95} height={108} />
        </Center>

        <Center mt="30">
          <Heading as="h2" size="xl">
            友達を遊びに誘うのを
          </Heading>
          <Box ml="10">
            <Heading as="h2" size="xl">
              ためらってしまう。
            </Heading>
            <Heading as="h2" size="xl">
              諦めてしまう。
            </Heading>
          </Box>
        </Center>

        <Center mt="30">
          <Image src="/images/arrow.png" width={95} height={108} />
        </Center>

        <Center mt="30">
          <Box>
            <Heading as="p" size="md">
              このように友達の暇を確認できるツールがない現状
            </Heading>

            <Heading as="h2" size="xl">
              暇という無限大のエネルギーが行き場を失ってしまう。
            </Heading>
          </Box>
        </Center>
      </Box>

      <Center mt="100">
        <Heading as="h2" size="xl">
          ・MAGNETを使えば
        </Heading>
      </Center>

      <Center mt="50">
        <Image src="/images/positive.png" width={535} height={365} />
      </Center>

      <Center mt="30">
        <Image src="/images/arrow.png" width={95} height={108} />
      </Center>

      <Center mt="30">
        <Flex align="center">
          <Image src="/images/logo.png" width={343.61} height={252.3} />
          <Heading as="h2" size="xl" ml="10">
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
  );
};
