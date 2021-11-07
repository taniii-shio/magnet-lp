import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { Footer } from "src/components/Footer";
import { Input } from "@chakra-ui/input";
import { PrimaryButton } from "src/components/atoms/PrimaryButton";
import { Textarea } from "@chakra-ui/textarea";

import { TopimgBg } from "../components/organisms/TopimgBg";

export default function Contact() {
  return (
    <Box w="1300px" mx="auto">
      <TopimgBg />

      <Center mt="30">
        <Heading as="h1" size="2xl" d={["none", "block"]}>
          お問い合わせ
        </Heading>
        <Heading as="h1" size="4xl" d={["block", "none"]}>
          お問い合わせ
        </Heading>
      </Center>

      <Box mt="20">
        <Center mr="650">
          <Text fontSize={["4xl", "2xl"]} fontWeight="bold">
            お名前
          </Text>
        </Center>
        <Center mt="5">
          <Input
            bg="white"
            placeholder="お名前"
            w={["800px", "600px"]}
            h={["100px", "50px"]}
            // value={userId}
            // onChange={onChangeUserId}
          />
        </Center>
      </Box>

      <Box mt="10">
        <Center mr="520">
          <Text fontSize={["4xl", "2xl"]} fontWeight="bold">
            メールアドレス
          </Text>
        </Center>
        <Center mt="5">
          <Input
            bg="white"
            placeholder="メールアドレス"
            w={["800px", "600px"]}
            h={["100px", "50px"]}
            // value={userId}
            // onChange={onChangeUserId}
          />
        </Center>
      </Box>

      <Box mt="10">
        <Center mr="670">
          <Text fontSize={["4xl", "2xl"]} fontWeight="bold">
            内容
          </Text>
        </Center>
        <Center mt="5">
          <Textarea
            bg="white"
            placeholder="内容"
            w={["800px", "600px"]}
            h="300px"
            // value={userId}
            // onChange={onChangeUserId}
          />
        </Center>
      </Box>

      <Center mt="20">
        <PrimaryButton>送信</PrimaryButton>
      </Center>
      <Footer />
    </Box>
  );
}
