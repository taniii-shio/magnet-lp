import { Box, Flex, Text, Center, Divider } from "@chakra-ui/layout";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <Box mt="100">
      <Center>
        <Divider w="1050px"></Divider>
      </Center>

      <Box d={["none", "block"]}>
        <Flex align="center" justify="center" mt="30">
          <Box px="10">
            <Image src="/images/logo.png" width={191.53} height={126} />
          </Box>
          <Box px="10">
            <Image src="/images/store.png" width={460.42} height={70.03} />
          </Box>
        </Flex>
      </Box>

      <Box mt="30" d={["block", "none"]}>
        <Center>
          <Image src="/images/logo.png" width={363} height={257.75} />
        </Center>
        <Center mt="30">
          <Image src="/images/store.png" width={734} height={111.65} />
        </Center>
      </Box>

      <Center mt={["40", "10"]}>
        <Box px="10" _hover={{ color: "#686868" }}>
          <Link href="/contact">
            <a>
              <Text fontSize={["3xl", "md"]}>お問い合わせ</Text>
            </a>
          </Link>
        </Box>
        <Box px="10" _hover={{ color: "#686868" }}>
          <Link href="/qa">
            <a>
              <Text fontSize={["3xl", "md"]}>よくある質問</Text>
            </a>
          </Link>
        </Box>
        <Box px="10" _hover={{ color: "#686868" }}>
          <Link href="/privacy">
            <a>
              <Text fontSize={["3xl", "md"]}>プライバシーポリシー</Text>
            </a>
          </Link>
        </Box>
        <Box px="10" _hover={{ color: "#686868" }}>
          <Link href="/terms">
            <a>
              <Text fontSize={["3xl", "md"]}>利用規約</Text>
            </a>
          </Link>
        </Box>
      </Center>

      <Center mt={["40", "20"]} mb="50">
        <Text fontSize={["4xl", "xs"]} color="#686868" fontWeight="1">
          ©︎ MAGNET Inc.
        </Text>
      </Center>
    </Box>
  );
};
