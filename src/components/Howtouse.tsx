import { Box, Flex, Heading, Center, Divider } from "@chakra-ui/layout";
import Image from "next/image";

export const Howtouse = () => {
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
            の使い方
          </Heading>
        </Center>

        <Box mt="50">
          <Center mt="30">
            <Image src="/images/step1.png" width={145} height={145} />
            <Heading as="h2" size="md" mx="30">
              仲の良い友達やサークルのメンバーとコネクト！
            </Heading>
            <Divider orientation="horizontal" w="500px"></Divider>
          </Center>

          <Center mt="10" mr="300">
            <Image src="/images/friends.png" width={280} height={333.31} />
            <Heading as="h2" size="md" ml="100">
              仲の良い友達と！！
            </Heading>
          </Center>

          <Center ml="300">
            <Heading as="h2" size="md" mr="100">
              サークルや部活のメンバーと！
            </Heading>
            <Image src="/images/member.png" width={334} height={235.97} />
          </Center>
        </Box>

        <Box mt="50">
          <Center mt="30">
            <Image src="/images/step2.png" width={145} height={145} />
            <Heading as="h2" size="md" mx="30">
              タイムラインや作ったグループに暇な日時、遊ぶ内容を投稿！
            </Heading>
            <Divider orientation="horizontal" w="250px"></Divider>
          </Center>

          <Center>
            <Image src="/images/step2img.png" width={625} height={481.58} />
          </Center>
        </Box>

        <Box mt="50">
          <Center mt="30">
            <Image src="/images/step3.png" width={145} height={145} />
            <Heading as="h2" size="md" mx="30">
              暇な友達とマッチング！
            </Heading>
            <Divider orientation="horizontal" w="600px"></Divider>
          </Center>

          <Center>
            <Image src="/images/step3img.png" width={263} height={384} />
          </Center>
        </Box>
      </Box>

      {/* responsive */}
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
            の使い方
          </Heading>
        </Center>

        <Box mt="50">
          <Center mt="30">
            <Image src="/images/step1.png" width={145} height={145} />
            <Heading as="h2" size="xl" mx="30">
              仲の良い友達やサークルのメンバーとコネクト！
            </Heading>
            <Divider orientation="horizontal" w="200px"></Divider>
          </Center>

          <Center mt="10" mr="300">
            <Image src="/images/friends.png" width={280} height={333.31} />
            <Heading as="h2" size="xl" ml="100">
              仲の良い友達と！！
            </Heading>
          </Center>

          <Center ml="300">
            <Heading as="h2" size="xl" mr="100">
              サークルや部活のメンバーと！
            </Heading>
            <Image src="/images/member.png" width={334} height={235.97} />
          </Center>
        </Box>

        <Box mt="50">
          <Center mt="30">
            <Image src="/images/step2.png" width={145} height={145} />
            <Heading as="h2" size="xl" mx="30">
              タイムラインや作ったグループに暇な日時、遊ぶ内容を投稿！
            </Heading>
            <Divider orientation="horizontal" w="100px"></Divider>
          </Center>

          <Center mt="20">
            <Image src="/images/step2img.png" width={625} height={481.58} />
          </Center>
        </Box>

        <Box mt="50">
          <Center mt="30">
            <Image src="/images/step3.png" width={145} height={145} />
            <Heading as="h2" size="xl" mx="30">
              暇な友達とマッチング！
            </Heading>
            <Divider orientation="horizontal" w="200px"></Divider>
          </Center>

          <Center mt="20">
            <Image src="/images/step3img.png" width={263} height={384} />
          </Center>
        </Box>
      </Box>
    </>
  );
};
