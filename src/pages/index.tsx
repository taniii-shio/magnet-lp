import Image from "next/image";
import Link from "next/link";

import { Box, Center } from "@chakra-ui/layout";
import { PrimaryButton } from "src/components/atoms/PrimaryButton";
import { Download } from "src/components/Download";

import { Ex } from "src/components/Ex";
import { Feature } from "src/components/Feature";
import { Howtouse } from "src/components/Howtouse";
import { Top } from "src/components/Top";
import { What } from "src/components/What";
import { Footer } from "src/components/Footer";

export default function Home() {
  return (
    <Box w="1300px" mx="auto">
      <Top />
      {/* <Box position="absolute" left="0" zIndex="-1">
        <Image src="/images/bg-gray.png" width={535} height={2858} />
      </Box> */}

      <What />

      <Feature />
      {/* <Box position="absolute" right="0" zIndex="-1">
        <Image src="/images/bg-gray2.png" width={600} height={2858} />
      </Box> */}

      <Ex />
      {/* <Box position="absolute" left="0" zIndex="-1" mt="40">
        <Image src="/images/bg-gray.png" width={535} height={2858} />
      </Box> */}

      <Howtouse />

      <Download />

      <Center mt="40">
        <Link href="/contact">
          <a>
            <Box px="20">
              <PrimaryButton>お問い合わせ</PrimaryButton>
            </Box>
          </a>
        </Link>
        <Link href="/qa">
          <a>
            <Box px="20">
              <PrimaryButton>よくある質問</PrimaryButton>
            </Box>
          </a>
        </Link>
      </Center>

      <Footer />
    </Box>
  );
}
