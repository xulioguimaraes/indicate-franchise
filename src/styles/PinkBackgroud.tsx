import { Box, BoxProps } from "@chakra-ui/react";

export const PinkBackgroud = (props: BoxProps) => {
  return (
    <Box
      pos={"absolute"}
      bgColor={"#ffbdda"}
      w={"100vw"}
      overflow={"hidden"}
      height={"48%"}
      top={0}
      zIndex={-1}
      {...props}
    />
  );
};
