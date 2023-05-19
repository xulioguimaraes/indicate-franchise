import { Flex, styled } from "@chakra-ui/react";

export const FlexContainer = styled(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    w: "100vw",
    overflowX: "hidden",
  },
});
