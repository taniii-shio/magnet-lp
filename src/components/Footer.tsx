import { Box, Flex, Heading, Center, Divider } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box mt="100">
      <Center>
        <Divider w="1050px"></Divider>
      </Center>

      <Flex align="center" justify="center" mt="30">
        <Box px="10">
          <Image src="/images/logo.png" width={191.53} height={126} />
        </Box>
        <Box px="10">
          <Image src="/images/store.png" width={460.42} height={70.03} />
        </Box>
      </Flex>

      <Center mt="10">
        <Box px="10" _hover={{ color: "#686868" }}>
          <Link href="/contact">
            <a>お問い合わせ</a>
          </Link>
        </Box>
        <Box px="10" _hover={{ color: "#686868" }}>
          <Link href="/qa">
            <a>よくある質問</a>
          </Link>
        </Box>
        <Box px="10" _hover={{ color: "#686868" }}>
          <Link href="/privacy">
            <a>プライバシーポリシー</a>
          </Link>
        </Box>
        <Box px="10" _hover={{ color: "#686868" }}>
          <Link href="/terms">
            <a>利用規約</a>
          </Link>
        </Box>
      </Center>

      <Center mt="10" mb="10">
        <Heading as="p" size="xs" color="#686868" fontWeight="1">
          ©︎ MAGNET Inc.
        </Heading>
      </Center>
    </Box>
  );
};
