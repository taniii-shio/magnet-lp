import { memo, ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <Button
      bg="#efefef"
      fontSize="3xl"
      height="100px"
      width="300px"
      borderRadius="100"
      boxShadow="xl"
    >
      {children}
    </Button>
  );
});
