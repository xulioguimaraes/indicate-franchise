import {
  Box,
  Button,
  Container,
  Flex,
  Img,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import loja from "../../assets/loja.webp";
import { motion } from "framer-motion";
import { ROSEPRIMARY } from "../../styles/customThemes";
import { PinkBackgroud } from "../../styles/PinkBackgroud";

export const Franchise = () => {
  return (
    <>
      <PinkBackgroud />
      <Container as={Flex} maxW={"7xl"} h={"100vh"}>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          zIndex={1}
          position={"relative"}
        >
          <Box position={"absolute"} left={0}>
            <Text
              whiteSpace={"nowrap"}
              textTransform={"capitalize"}
              bg={"#ff167c"}
              color={"white"}
              p={3}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
            >
              Inicie seu próprio negócio,
            </Text>
            <Text
              color={"white"}
              fontWeight={700}
              textTransform={"capitalize"}
              p={3}
              lineHeight={1.2}
              w={"fit-content"}
              bg={"#ff167c"}
              fontSize={useBreakpointValue({ base: "3xl", md: "6xl" })}
            >
              seja um franqueado!
            </Text>
            <Text color={"GrayText"} maxW={500} my={6} pl={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              illo soluta maiores aut corrupti quod omnis. Consectetur
              voluptates.
            </Text>

            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={8}
              colorScheme={"red"}
              bg={ROSEPRIMARY}
              //   onClick={() => navigate("/formulario-influenciador")}
              _hover={{ bg: "pink.300", borderColor: "pink.400" }}
            >
              Seja Franqueado
            </Button>
          </Box>
        </Flex>
        <Flex flex={1} my={12} position="relative">
          <Box
            w={"full"}
            backgroundImage={loja}
            backgroundSize={"cover"}
            backgroundPosition={"20% 50%"}
          />

          <Box
            pos={"absolute"}
            top={0}
            left={0}
            w={"full"}
            h={"full"}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
          />
        </Flex>
      </Container>
    </>
  );
};
