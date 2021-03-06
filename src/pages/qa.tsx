import { Box, Center, Heading } from "@chakra-ui/layout";
import { Footer } from "src/components/Footer";
import { TopimgBg } from "../components/organisms/TopimgBg";

export default function Contact() {
  return (
    <Box w="1300px" mx="auto">
      <TopimgBg />

      <Center mt="30">
        <Heading as="h1" size="2xl" d={["none", "block"]}>
          よくある質問
        </Heading>
        <Heading as="h1" size="4xl" d={["block", "none"]}>
          よくある質問
        </Heading>
      </Center>

      <Box d={["none", "block"]}>
        <Box mt="100px">
          <Center mt="30">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              Q
            </Heading>
            <Heading as="p" size="md" ml="50">
              アプリは無料で利用できますか？
            </Heading>
          </Center>

          <Center mt="30">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              A
            </Heading>
            <Heading as="p" size="md" ml="50">
              現在全てのサービスを無料で利用することができます。
            </Heading>
          </Center>
        </Box>

        <Box mt="100px">
          <Center mt="30">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              Q
            </Heading>
            <Heading as="p" size="md" ml="50">
              アプリは無料で利用できますか？
            </Heading>
          </Center>

          <Center mt="30">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              A
            </Heading>
            <Heading as="p" size="md" ml="50">
              現在全てのサービスを無料で利用することができます。
            </Heading>
          </Center>
        </Box>
        <Box mt="100px">
          <Center mt="30">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              Q
            </Heading>
            <Heading as="p" size="md" ml="50">
              アプリは無料で利用できますか？
            </Heading>
          </Center>

          <Center mt="30">
            <Heading
              as="h1"
              size="2xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              A
            </Heading>
            <Heading as="p" size="md" ml="50">
              現在全てのサービスを無料で利用することができます。
            </Heading>
          </Center>
        </Box>
      </Box>

      {/* respoinsive */}
      <Box d={["block", "none"]}>
        <Box mt="200px">
          <Center mt="30">
            <Heading
              as="h1"
              size="4xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              Q
            </Heading>
            <Heading as="p" size="2xl" ml="50">
              アプリは無料で利用できますか？
            </Heading>
          </Center>

          <Center mt="30">
            <Heading
              as="h1"
              size="4xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              A
            </Heading>
            <Heading as="p" size="2xl" ml="50">
              現在全てのサービスを無料で利用することができます。
            </Heading>
          </Center>
        </Box>

        <Box mt="200px">
          <Center mt="30">
            <Heading
              as="h1"
              size="4xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              Q
            </Heading>
            <Heading as="p" size="2xl" ml="50">
              アプリは無料で利用できますか？
            </Heading>
          </Center>

          <Center mt="30">
            <Heading
              as="h1"
              size="4xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              A
            </Heading>
            <Heading as="p" size="2xl" ml="50">
              現在全てのサービスを無料で利用することができます。
            </Heading>
          </Center>
        </Box>
        <Box mt="200px">
          <Center mt="30">
            <Heading
              as="h1"
              size="4xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              Q
            </Heading>
            <Heading as="p" size="2xl" ml="50">
              アプリは無料で利用できますか？
            </Heading>
          </Center>

          <Center mt="30">
            <Heading
              as="h1"
              size="4xl"
              fontFamily="Days One, sans-serif"
              fontWeight="100"
            >
              A
            </Heading>
            <Heading as="p" size="2xl" ml="50">
              現在全てのサービスを無料で利用することができます。
            </Heading>
          </Center>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
