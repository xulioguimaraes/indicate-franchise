import { Flex, styled } from "@chakra-ui/react";

export const CenterContainer = styled(Flex, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
   
    w: "100vw",
    overflowX: "hidden",
  },
});
