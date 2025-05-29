import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import WorkExperience from "./WorkExperience";
import { hero } from "content";

export default function Banner() {
  return (
    <Container maxW={"7xl"} alignItems="center">
      <Flex
        width={"100%"}
        justifyContent="center"
        alignItems={"center"}
        flexDir={["column", "column", "row", "row"]}
      >
        <Flex
          id="home"
          flexShrink={2}
          flexDir={"column"}
          justifyContent="space-between"
          bg={"#1E1E1E"}
          borderColor={"#383838"}
          borderWidth={1}
          maxHeight="2xl"
          minHeight={["fit-content", "4xl", "4xl"]}
          borderRadius="3xl"
          p={[4, 10]}
          mb={10}
          width={"100%"}
        >
          <Box>
            {/* <Flex alignItems={"center"} justifyContent="center">
              <Image
                borderColor={"gray.100"}
                src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png"
                width="32"
              />
            </Flex> */}

            <Heading textAlign={"center"}>{hero.name}</Heading>

            <Text fontSize={"sm"} textAlign="center" my={4}>
              {hero.about}
            </Text>

            <HStack my={4} wrap="wrap" justify="center">
              {hero.titles.map((title) => (
                <Tag
                  px={5}
                  variant={"subtle"}
                  bg="rgba(43, 43, 44)"
                  color={"#D0D0D0"}
                  borderWidth={1}
                  borderColor={"#383838"}
                  transitionDuration={"400ms"}
                  _hover={{ backgroundColor: "#1e1e1e" }}
                >
                  {title}
                </Tag>
              ))}
            </HStack>
            <Box bgColor="#383838" my={4} height={0.2} />
            {/* Icons  */}
            <Stack
              spacing={6}
              alignItems={["center", "start"]}
              justifyContent={["center"]}
              flexDirection={["row", "column", "column"]}
            >
              <HStack>
                <Box me={2}>
                  <Link href={`mailto:${hero.email}`} target="_blank">
                    <IconButton
                      shadow={"md"}
                      variant={"ghost"}
                      color={"#D0D0D0"}
                      borderWidth={1}
                      borderColor={"#383838"}
                      aria-label="button"
                      bg="rgba(43, 43, 44, 0.75)"
                      _hover={{ backgroundColor: "#1e1e1e" }}
                    >
                      <FaEnvelope />
                    </IconButton>
                  </Link>
                </Box>
                <VStack
                  alignItems={"start"}
                  spacing={0.1}
                  display={["none", "flex", "flex"]}
                >
                  <Text fontSize={"sm"}>Email</Text>
                  <Text fontWeight={"600"}>
                    <Link href={`mailto:${hero.email}`} target="_blank">
                      {hero.email}
                    </Link>
                  </Text>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <Link href={`tel:${hero.phone}`} target="_blank">
                    <IconButton
                      shadow={"md"}
                      variant={"ghost"}
                      color={"#D0D0D0"}
                      borderWidth={1}
                      borderColor={"#383838"}
                      aria-label="button"
                      bg="rgba(43, 43, 44, 0.75)"
                      _hover={{ backgroundColor: "#1e1e1e" }}
                    >
                      <FaPhone />
                    </IconButton>
                  </Link>
                </Box>
                <VStack
                  alignItems={"start"}
                  spacing={0.1}
                  display={["none", "flex", "flex"]}
                >
                  <Text fontSize={"sm"}>Phone</Text>
                  <Text fontWeight={"600"}>
                    <Link href={`tel:${hero.phone}`} target="_blank">
                      {hero.phone}
                    </Link>
                  </Text>
                </VStack>
              </HStack>

              <HStack>
                <Box me={2}>
                  <Link href={hero.github} target="_blank">
                    <IconButton
                      shadow={"md"}
                      variant={"ghost"}
                      color={"#D0D0D0"}
                      borderWidth={1}
                      borderColor={"#383838"}
                      aria-label="button"
                      bg="rgba(43, 43, 44, 0.75)"
                      _hover={{ backgroundColor: "#1e1e1e" }}
                    >
                      <FaGithub />
                    </IconButton>
                  </Link>
                </Box>
                <VStack
                  alignItems={"start"}
                  spacing={0.1}
                  display={["none", "flex", "flex"]}
                >
                  <Text fontSize={"sm"}>Github</Text>
                  <Text fontWeight={"600"}>
                    <Link href={hero.github} target="_blank">
                      {hero.github}
                    </Link>
                  </Text>
                </VStack>
              </HStack>

              {/* <HStack>
                <Box me={2}>
                  <Link href={hero.linkedin} target="_blank">
                    <IconButton
                      shadow={"md"}
                      variant={"ghost"}
                      color={"#D0D0D0"}
                      borderWidth={1}
                      borderColor={"#383838"}
                      aria-label="button"
                      bg="rgba(43, 43, 44, 0.75)"
                      _hover={{ backgroundColor: "#1e1e1e" }}
                    >
                      <FaLinkedin />
                    </IconButton>
                  </Link>
                </Box>
                <VStack
                  alignItems={"start"}
                  spacing={0.1}
                  display={["none", "flex", "flex"]}
                >
                  <Text fontSize={"sm"}>Linkedin</Text>
                  <Text fontWeight={"600"}>
                    <Link href={hero.linkedin} target="_blank">
                      {hero.linkedin}
                    </Link>
                  </Text>
                </VStack>
              </HStack> */}

              {/* <HStack>
                <Box me={2}>
                  <IconButton
                    shadow={"md"}
                    variant={"ghost"}
                    borderWidth={1}
                  borderColor={"#383838"}
                    aria-label="button"
                    bg="rgba(43, 43, 44, 0.75)"
                    _hover={{ backgroundColor: "#1e1e1e" }}
                    _hover={{backgroundColor: "#1e1e1e"}}
                  >
                    <FaTwitter />
                  </IconButton>
                </Box>
                <VStack alignItems={"start"} spacing={0.1}>
                  <Text fontSize={"sm"}>Twitter</Text>
                  <Text fontWeight={"600"}>princepatelt</Text>
                </VStack>
              </HStack> */}
            </Stack>
          </Box>

          {/* <ButtonGroup
            justifyContent={"center"}
            alignItems={"center"}
            variant="ghost"
            spacing={1.9}
          >
            <IconButton
              _hover={{
                color: "primary.700",
                bgColor: "primary.50",
                border: "1px solid",
                borderColor: "primary.700",
              }}
              aria-label="button"
              bg="rgba(43, 43, 44, 0.75)"
                    _hover={{ backgroundColor: "#1e1e1e" }}
              _hover={{backgroundColor: "#1e1e1e"}}
            >
              <FaFacebook size={24} />
            </IconButton>
            <IconButton
              _hover={{
                color: "primary.700",
                bgColor: "primary.50",
                border: "1px solid",
                borderColor: "primary.700",
              }}
              aria-label="button"
              bg="rgba(43, 43, 44, 0.75)"
                    _hover={{ backgroundColor: "#1e1e1e" }}
              _hover={{backgroundColor: "#1e1e1e"}}
            >
              <FaInstagram size={24} />
            </IconButton>
            <IconButton
              _hover={{
                color: "primary.700",
                bgColor: "primary.50",
                border: "1px solid",
                borderColor: "primary.700",
              }}
              aria-label="button"
              bg="rgba(43, 43, 44, 0.75)"
                    _hover={{ backgroundColor: "#1e1e1e" }}
              _hover={{backgroundColor: "#1e1e1e"}}
            >
              <FaTwitter size={24} />
            </IconButton>
          </ButtonGroup> */}
        </Flex>
        <Box
          id="experience"
          flexShrink={1}
          ms={["0", "0", "8"]}
          flexDir={"column"}
          justifyContent="space-between"
          bg={"#1E1E1E"}
          borderColor={"#383838"}
          borderWidth={1}
          maxHeight={["auto", "4xl"]}
          scrollBehavior={"smooth"}
          minHeight={"4xl"}
          borderRadius="3xl"
          p={[4, 10]}
          mb={10}
        >
          <Heading>Work Experience</Heading>
          <WorkExperience />
        </Box>
      </Flex>
    </Container>
  );
}
