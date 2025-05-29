import {
  ButtonGroup,
  Container,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { hero } from "content";
import React from "react";
import { FaPhone, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export const Footer = () => (
  <Container
    maxW={"100%"}
    as="footer"
    role="contentinfo"
    py={[2, 5]}
    bg={"#1E1E1E"}
    borderColor={"#383838"}
    borderWidth={1}
  >
    <Stack justify="center" spacing={{ base: "4", md: "5" }}>
      <Stack justify="center" direction="row" align="center">
        <ButtonGroup
          justifyContent={"center"}
          alignItems={"center"}
          variant="ghost"
          spacing={4}
        >
          <Link href={`mailto:${hero.email}`} target="_blank">
            <IconButton
              shadow={"md"}
              variant={"ghost"}
              borderWidth={1}
              borderColor={"#383838"}
              color="#D0D0D0"
              aria-label="button"
              bg="rgba(43, 43, 44, 0.75)"
              _hover={{ backgroundColor: "#1e1e1e" }}
            >
              <FaEnvelope />
            </IconButton>
          </Link>
          <Link href={`tel:${hero.phone}`} target="_blank">
            <IconButton
              shadow={"md"}
              variant={"ghost"}
              borderWidth={1}
              borderColor={"#383838"}
              color="#D0D0D0"
              aria-label="button"
              bg="rgba(43, 43, 44, 0.75)"
              _hover={{ backgroundColor: "#1e1e1e" }}
            >
              <FaPhone />
            </IconButton>
          </Link>
          <Link href={hero.github} target="_blank">
            <IconButton
              shadow={"md"}
              variant={"ghost"}
              borderWidth={1}
              borderColor={"#383838"}
              color="#D0D0D0"
              aria-label="button"
              bg="rgba(43, 43, 44, 0.75)"
              _hover={{ backgroundColor: "#1e1e1e" }}
            >
              <FaGithub />
            </IconButton>
          </Link>
          {/* <Link href={hero.linkedin} target="_blank">
            <IconButton
              shadow={"md"}
              variant={"ghost"}
              borderWidth={1}
              borderColor={"#383838"}
              color="#D0D0D0"
              aria-label="button"
              bg="rgba(43, 43, 44, 0.75)"
              _hover={{ backgroundColor: "#1e1e1e" }}
            >
              <FaLinkedin />
            </IconButton>
          </Link> */}
        </ButtonGroup>
      </Stack>
      {/* <Text textAlign={"center"} fontSize="20px" fontWeight={"bold"}>
        {hero.name}
      </Text> */}
    </Stack>
  </Container>
);
