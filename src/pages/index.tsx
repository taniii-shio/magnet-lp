import Image from "next/image";
import { Box, Center } from "@chakra-ui/layout";
import { PrimaryButton } from "src/components/atoms/PrimaryButton";
import { Download } from "src/components/Download";

import { Ex } from "src/components/Ex";
import { Feature } from "src/components/Feature";
import { Howtouse } from "src/components/Howtouse";
import { Top } from "src/components/Top";
import { What } from "src/components/What";

export default function Home() {
  return (
    <Box w="1300px" mx="auto">
      <Top />
      <Box position="absolute" left="0">
        <Image src="/images/bg-gray.png" width={535} height={2858} />
      </Box>

      <What />

      <Feature />
      <Box position="absolute" right="0" zIndex="-1" opacity=".8">
        <Image src="/images/bg-blue.png" width={600} height={2858} />
      </Box>

      <Ex />
      <Box position="absolute" left="0" zIndex="-1" opacity=".8">
        <Image src="/images/bg-red.png" width={535} height={2858} />
      </Box>

      <Howtouse />

      <Download />

      <Center mt="40">
        <Box px="20">
          <PrimaryButton>お問い合わせ</PrimaryButton>
        </Box>
        <Box px="20">
          <PrimaryButton>よくある質問</PrimaryButton>
        </Box>
      </Center>
    </Box>
  );
}
