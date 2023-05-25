import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import { PinkBackgroud } from "../../styles/PinkBackgroud";
import { useParams } from "react-router-dom";

export const RegistrationDone = () => {
  const params = useParams<{
    slug: string;
  }>();
  
  // const link = `http://localhost:5173/franquia/${params.slug}`;
  const link = `https://indicate-franchise.vercel.app/franquia/${params.slug}`;
  const toast = useToast();
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      toast({
        title: "Link copiado.",
        description: "Link copiado para a área de transferência!",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } catch (error) {
      alert("Falha ao copiar para a área de transferência:");
    }
  };
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      w={"100%"}
      alignItems={"center"}
      height={"100vh"}
    >
      <PinkBackgroud />
      <Box
        shadow={"base"}
        borderRadius={"lg"}
        mt={10}
        maxW={600}
        bgColor={"white"}
        textAlign="center"
        py={10}
        px={6}
        h={"max-content"}
      >
        <Icon boxSize={"80px"} color={"green.500"}>
          <BsCheckCircleFill />
        </Icon>
        <Heading as="h2" size="xl" mb={2}>
          Cadastro realizado com sucesso.
        </Heading>
        <Text my={6} color={"gray.500"}>
          Aproveite os benefícios da nossa franquia compartilhando o link abaixo
          com seus contatos. Cada indicação traz vantagens incríveis.
        </Text>
        <Flex mt={4} justify={"center"} w={"full"}>
          <Flex
            border={"1px"}
            borderRadius={"lg"}
            borderColor={"gray.300"}
            justify={"center"}
            align={"center"}
          >
            <Link href={link} px={4} color={"GrayText"}>
              {link}
            </Link>
            <IconButton onClick={handleCopy} aria-label="copy">
              <MdContentCopy />
            </IconButton>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
