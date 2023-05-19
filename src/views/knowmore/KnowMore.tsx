import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Feature } from "./components/Feature";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { Footer } from "./components/Footer";
import { WithSpeechBubbles } from "./components/WithSpeechBubbles";
import { ROSEPRIMARY } from "../../styles/customThemes";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
export const KnowMore = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        pos={"absolute"}
        bgColor={"#ffbdda"}
        w={"100vw"}
        overflow={"hidden"}
        height={["500px", "422px"]}
      />
      <Flex
        justify={"center"}
        align={"center"}
        flexDirection={"column"}
        w={"99vw"}
        overflowX={"hidden"}
      >
        <Container maxW={"7xl"} py={12}>
          <Stack spacing={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Flex zIndex={2} justify={"center"} align={"center"}>
                  <Img
                    w={["80px", "100px"]}
                    h={["70px", "90px"]}
                    zIndex={1}
                    src={logo}
                  />
                  <Box pl={4}>
                    <Text
                      textTransform={"uppercase"}
                      color={"blue.400"}
                      fontWeight={600}
                      fontSize={"sm"}
                      bg={useColorModeValue("blue.50", "blue.900")}
                      p={2}
                      zIndex={1}
                      alignSelf={"flex-start"}
                      rounded={"md"}
                      w={"max-content"}
                    >
                      Nossa historia
                    </Text>
                    <Heading zIndex={1}>A Principal Bebê e Mamãe</Heading>
                  </Box>
                </Flex>
                <Text zIndex={1} color={"CaptionText"} fontSize={"lg"}>
                  Seja bem-vindo à "A Principal Bebê e Mamãe", a loja
                  especializada em produtos para bebês e mães com mais de 20
                  anos de história. Reconhecemos o poder das recomendações e
                  queremos recompensar você por compartilhar sua experiência
                  conosco. Sabemos que existem pessoas incríveis como você, que
                  desejam indicar nossa franquia e fazer parte do nosso
                  crescimento.
                </Text>
              </Stack>

              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={
                    "https://img.freepik.com/fotos-gratis/postagem-de-influenciador-nas-redes-sociais_23-2149194122.jpg?w=826&t=st=1684523729~exp=1684524329~hmac=80594bbf2fdafed84bee5734d549039670c7a59b7bceae5ff8f85e95081464b6"
                  }
                  objectFit={"cover"}
                  zIndex={1}
                />
              </Flex>
            </SimpleGrid>
            <Flex flexDir={["column-reverse", "row"]}>
              <Flex pr={8} w={["100vw", "100%"]}>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={
                    "https://img.freepik.com/fotos-gratis/pov-de-um-influenciador-masculino-gravando-episodio-de-podcast-na-camera-usando-equipamento-de-som-em-estudio-retrato-do-criador-de-conteudo-conversando-com-o-publico-e-filmando-o-vlog-do-canal-de-midia-social_482257-42295.jpg?w=360&t=st=1684523797~exp=1684524397~hmac=0014ed278edb7f5a8847adc9bbafd8384b924dc3cbd3c7432ef8c7982e6c647f"
                  }
                  objectFit={"cover"}
                />
              </Flex>
              <Stack spacing={4}>
                <Heading>Como funciona</Heading>
                <Text color={"gray.500"} fontSize={"lg"}>
                  Para facilitar esse processo, estamos criando uma página
                  especial onde você poderá se cadastrar e obter um link
                  exclusivo para compartilhar com suas conexões. Cada pessoa que
                  se cadastrar através do seu link será contabilizada, e você
                  receberá recompensas especiais por cada indicação
                  bem-sucedida. Estamos ansiosos para tê-lo(a) como parte da
                  nossa equipe de indicadores. Junte-se a nós e comece a ganhar
                  enquanto ajuda outras pessoas a descobrir os benefícios da
                  nossa franquia. Seja recompensado por compartilhar o que você
                  ama!
                </Text>
                <Text color={"gray.500"} fontSize={"lg"} pb={4}>
                  Em "A Principal Bebê e Mamãe", nosso compromisso é oferecer
                  uma experiência única de compras para você e seu bebê. Com
                  mais de duas décadas de experiência, selecionamos
                  cuidadosamente produtos de alta qualidade de marcas confiáveis
                  para garantir o conforto e a segurança dos pequenos. Nossa
                  equipe está pronta para auxiliá-lo(a) na escolha dos itens
                  ideais para atender às suas necessidades.
                </Text>
              </Stack>
            </Flex>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Stack spacing={4}>
                <Heading>Venha fazer parte</Heading>

                <Text color={"gray.500"} fontSize={"lg"}>
                  Venha nos visitar e faça parte da nossa jornada, cuidando dos
                  bebês com amor e dedicação. Além disso, cadastre-se agora
                  mesmo na nossa plataforma de indicações e comece a desfrutar
                  dos benefícios exclusivos de fazer parte da nossa rede. Seja
                  um influenciador e faça a diferença! Bem-vindo(a) à nossa
                  família de indicadores e à "A Principal Bebê e Mamãe"!
                </Text>

                <Flex pt={8}>
                  <Button
                    rounded={"full"}
                    size={"lg"}
                    fontWeight={"normal"}
                    px={8}
                    colorScheme={"red"}
                    bg={ROSEPRIMARY}
                    onClick={() => navigate("/formulario-influenciador")}
                    _hover={{ bg: "pink.300", borderColor: "pink.400" }}
                  >
                    Fazer parte
                  </Button>
                </Flex>
              </Stack>
              <Flex>
                <Image
                  rounded={"md"}
                  alt={"feature image"}
                  src={
                    "https://img.freepik.com/fotos-gratis/mulher-sorridente-de-tiro-medio-com-luz-de-anel_23-2149418084.jpg?w=826&t=st=1684523752~exp=1684524352~hmac=0390795901c39d67504011c82078bf721e5bf6252388e66d5baf39242445bb76"
                  }
                  objectFit={"cover"}
                />
              </Flex>
            </SimpleGrid>
            <Box py={8}>
              <Heading textAlign={"center"}>Benefícios</Heading>
              <Box p={4}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                  <Feature
                    icon={<Icon as={FcAssistant} w={10} h={10} />}
                    title={"Lifetime Support"}
                    text={
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                  />
                  <Feature
                    icon={<Icon as={FcDonate} w={10} h={10} />}
                    title={"Unlimited Donations"}
                    text={
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                  />
                  <Feature
                    icon={<Icon as={FcInTransit} w={10} h={10} />}
                    title={"Instant Delivery"}
                    text={
                      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
                    }
                  />
                </SimpleGrid>
              </Box>
            </Box>

            <WithSpeechBubbles />
          </Stack>
        </Container>
        <Footer />
      </Flex>
    </>
  );
};
