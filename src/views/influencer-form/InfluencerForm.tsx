import React, { useState } from "react";
import {
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  FormHelperText,
  InputRightElement,
  Container,
  Select,
  Stack,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { ROSEPRIMARY } from "../../styles/customThemes";
import { CenterContainer } from "../../styles/CenterContainer";

export const InfluencerForm = () => {
  const toast = useToast();

  return (
    <>
      <Box
        pos={"absolute"}
        bgColor={"#ffbdda"}
        w={"100vw"}
        overflow={"hidden"}
        height={"48%"}
      />
      <CenterContainer zIndex={2} height={"100vh"}>
        <Container maxW={"7xl"} zIndex={2} mt={[16, 0]}>
          <Box
            borderWidth="1px"
            rounded="lg"
            shadow="base"
            maxWidth={500}
            p={6}
            m="10px auto"
            as="form"
            bg={"white"}
          >
            <>
              <Heading
                w="100%"
                textAlign={"center"}
                fontWeight="normal"
                mb="2%"
              >
                Cadastro
              </Heading>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                    Nome
                  </FormLabel>
                  <Input id="first-name" placeholder="First name" />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                    CPF
                  </FormLabel>
                  <Input id="last-name" placeholder="CPF" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email" fontWeight={"normal"}>
                    Email
                  </FormLabel>
                  <Input id="email" type="email" />
                  <FormHelperText>
                    Nunca compartilharemos seu e-mail.
                  </FormHelperText>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="date" fontWeight={"normal"}>
                    Data de nascimento
                  </FormLabel>
                  <Input
                    type="date"
                    id="date"
                    placeholder="Data de nascimento"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="city" fontWeight={"normal"}>
                    Cidade
                  </FormLabel>
                  <Input id="city" placeholder="Cidade" />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="profile" fontWeight={"normal"}>
                    Perfil de indicador
                  </FormLabel>
                  <Select id="profile" placeholder="Selecione">
                    <option>Digital Influence</option>
                    <option>Repesentante</option>
                  </Select>
                </FormControl>
              </Stack>
            </>

            <Button
              bg={ROSEPRIMARY}
              mt={8}
              color={"white"}
              w={"full"}
              onClick={() => {
                toast({
                  title: "Account created.",
                  description: "We've created your account for you.",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                });
              }}
            >
              Cadastrar
            </Button>
          </Box>
        </Container>
      </CenterContainer>
    </>
  );
};
