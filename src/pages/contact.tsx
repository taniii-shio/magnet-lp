import Image from "next/image";
import Link from "next/link";

import { Box, Center, Heading } from "@chakra-ui/layout";
import { Footer } from "src/components/Footer";
import { Input } from "@chakra-ui/input";
import { PrimaryButton } from "src/components/atoms/PrimaryButton";

export default function Contact() {
  return (
    <Box w="1300px" mx="auto">
      <Box position="absolute" zIndex="-1" left="0" opacity="0.3" mt="10">
        <Image src="/images/bg-bluered.png" width={1440} height={1300} />
      </Box>

      <Link href="/">
        <a>
          <Box>
            <Image src="/images/top.png" width={250} height={218.27} />
          </Box>
        </a>
      </Link>

      <Center mt="30">
        <Heading as="h1" size="2xl">
          お問い合わせ
        </Heading>
      </Center>

      <Box mt="20">
        <Center mr="530">
          <Heading as="h2" size="md">
            お名前
          </Heading>
        </Center>
        <Center mt="5">
          <Input
            bg="white"
            placeholder="お名前"
            w="600px"
            h="50px"
            // value={userId}
            // onChange={onChangeUserId}
          />
        </Center>
      </Box>

      <Box mt="10">
        <Center mr="450">
          <Heading as="h2" size="md">
            メールアドレス
          </Heading>
        </Center>
        <Center mt="5">
          <Input
            bg="white"
            placeholder="メールアドレス"
            w="600px"
            h="50px"
            // value={userId}
            // onChange={onChangeUserId}
          />
        </Center>
      </Box>

      <Box mt="10">
        <Center mr="550">
          <Heading as="h2" size="md">
            内容
          </Heading>
        </Center>
        <Center mt="5">
          <Input
            bg="white"
            placeholder="内容"
            w="600px"
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
