import Image from "next/image";
import Link from "next/link";

import { memo, ReactNode, VFC } from "react";
import { Box, Flex, Heading, Center, Divider } from "@chakra-ui/layout";

type Props = {};
export const TopimgBg: VFC<Props> = memo((props) => {
  const {} = props;
  return (
    <>
      {/* <Box position="absolute" zIndex="-1" left="0" opacity="0.3" mt="10">
        <Image src="/images/bg-bluered.png" width={2810.26} height={2500} />
      </Box> */}
      <Box ml={["100", "0"]}>
        <Link href="/">
          <a>
            <Box>
              <Image src="/images/top.png" width={250} height={218.27} />
            </Box>
          </a>
        </Link>
      </Box>
    </>
  );
});
