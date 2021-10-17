import { Box, Flex, Heading, Center } from "@chakra-ui/layout";
import Image from "next/image";

export const Feature = () => {
  return (
    <Box mt="100">
      <Center>
        <Heading as="h1" size="3xl">
          MAGNETの特徴
        </Heading>
      </Center>

      <Center mt="100">
        <Flex align="center">
          <Box mr="100">
            <Heading as="h2" size="xl">
              コネクト
            </Heading>
            <Box w="500px" mt="5">
              <p>
                MAGNETではフォローではなくお互いが承認することで繋がれます。
                MAGNETで繋がることをコネクトといいます。
              </p>
            </Box>
          </Box>
          <Image src="/images/3display.png" width={458} height={481} />
        </Flex>
      </Center>

      <Center mt="100">
        <Image src="/images/3display.png" width={458} height={481} />
        <Box ml="100">
          <Heading as="h2" size="xl">
            友達の暇がリアルタイムに表示される
          </Heading>
          <Box w="500px" mt="5">
            <p>
              コネクトしている暇な友達がタイムライン上に表示されているから友達とすぐに遊びに行ける！
            </p>
          </Box>
        </Box>
      </Center>

      <Center mt="100">
        <Flex align="center">
          <Box mr="100">
            <Heading as="h2" size="xl">
              グループ機能を搭載！
            </Heading>
            <Box w="500px" mt="5">
              <p>
                親しい友達のグループやサークルなどでグループを作ることができます。
                グループ内のタイムラインにのみ投稿が表示されるためバッティングを防げます。
              </p>
            </Box>
          </Box>
          <Image src="/images/3display.png" width={458} height={481} />
        </Flex>
      </Center>
    </Box>
  );
};
