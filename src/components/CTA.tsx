import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { hero } from "content";
import * as React from "react";

export default function CTA() {
  return (
    <Container id="freelance" as="section" maxW="7xl" alignItems="center">
      <Box
        py={{ base: "10", md: "12" }}
        my={{ base: "10", md: "12" }}
        bg={"#1E1E1E"}
        borderColor={"#383838"}
        borderWidth={1}
        borderRadius="20"
        p={[4, 10]}
      >
        <Stack spacing={{ base: "8", md: "10" }}>
          <Stack spacing={{ base: "4", md: "5" }} align="center">
            <Heading
              size={useBreakpointValue({ base: "lg", md: "xl", lg: "2xl" })}
              fontWeight="800"
            >
              Let's get connected.
            </Heading>
            <Text maxW="2xl" textAlign="center" fontSize="lg">
              I've gained a significant amount of experience working with
              blockchain technology. From developing decentralized applications
              to exploring smart contracts and blockchain networks, I'm
              well-versed in various aspects of this innovative field. Let's
              delve deeper into your work and discuss how we can collaborate in
              the realm of blockchain technology.
            </Text>
          </Stack>
          <Stack
            spacing="3"
            direction={{ base: "column", sm: "row" }}
            justify="center"
          >
            <Button
              as="a"
              variant={"ghost"}
              size="lg"
              color={"#D0D0D0"}
              bg={"#1e1e1e"}
              borderColor={"#383838"}
              borderWidth={1}
              href={`mailto:${hero.email}`}
              transition="all ease-in 200ms"
              _hover={{
                bg: "#3c3c3c",
                textDecoration: "none",
                transition: "all ease-in 200ms",
              }}
            >
              Send an Email
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
