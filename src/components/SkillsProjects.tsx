import React from "react";
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  Wrap,
} from "@chakra-ui/react";
import Projects from "./Projects";
import CustomSkillTag from "./utils/CustomSkillTag";
import FrameworkTag from "./utils/FrameworkTag";
import ToolTag from "./utils/ToolTag";
import { skills } from "content";

export default function SkillsProjects() {
  return (
    <Container maxW={"7xl"} alignItems="center" my={5}>
      <Flex
        width={"100%"}
        justifyContent="center"
        alignItems={"center"}
        flexDir={["column", "column", "row", "row"]}
      >
        <Box
          id="projects"
          me={["0", "0", "8"]}
          flexDir={"column"}
          justifyContent="space-between"
          bg={"#1E1E1E"}
          borderColor={"#383838"}
          borderWidth={1}
          maxHeight="4xl"
          scrollBehavior={"smooth"}
          minHeight={"4xl"}
          borderRadius="3xl"
          p={[4, 10]}
          mb={10}
          width={"100%"}
        >
          <Heading>Projects</Heading>
          <Projects />
        </Box>

        <Flex
          id="skills"
          flexDir={"column"}
          justifyContent="start"
          bg={"#1E1E1E"}
          borderColor={"#383838"}
          borderWidth={1}
          maxHeight="2xl"
          minHeight={"4xl"}
          borderRadius="3xl"
          p={[4, 10]}
          mb={10}
        >
          <Heading textAlign={"start"}>Skills</Heading>

          <Box overflowY={"scroll"} pr={2}>
            <Box my={4}>
              <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
                {" "}
                Programming Languages
              </Heading>

              <Box
                // orientation="horizontal"
                bgColor="#383838"
                my={3}
                height={0.2}
              />
              {/* Icons  */}

              <Wrap>
                {skills.languages.map((language) => (
                  <CustomSkillTag skill={language} />
                ))}
              </Wrap>
            </Box>
            <Box my={4}>
              <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
                {" "}
                Frontend
              </Heading>
              <Box
                // orientation="horizontal"
                bgColor="#383838"
                my={3}
                height={0.2}
              />
              <Wrap>
                {skills.frontend.map((skill) => (
                  <CustomSkillTag skill={skill} />
                ))}
              </Wrap>
            </Box>
            <Box my={4}>
              <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
                {" "}
                Backend
              </Heading>
              <Box
                // orientation="horizontal"
                bgColor="#383838"
                my={3}
                height={0.2}
              />
              <Wrap>
                {skills.backend.map((skill) => (
                  <CustomSkillTag skill={skill} />
                ))}
              </Wrap>
            </Box>
            <Box my={4}>
              <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
                {" "}
                Database
              </Heading>
              <Box
                // orientation="horizontal"
                bgColor="#383838"
                my={3}
                height={0.2}
              />
              <Wrap>
                {skills.database.map((skill) => (
                  <CustomSkillTag skill={skill} />
                ))}
              </Wrap>
            </Box>
            <Box my={4}>
              <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
                {" "}
                Blockchain
              </Heading>
              <Box
                // orientation="horizontal"
                bgColor="#383838"
                my={3}
                height={0.2}
              />
              <Wrap>
                {skills.blockchain.map((skill) => (
                  <CustomSkillTag skill={skill} />
                ))}
              </Wrap>
            </Box>
            <Box my={4}>
              <Heading textAlign={"start"} as="h4" fontSize={"lg"}>
                {" "}
                Others
              </Heading>
              <Box
                // orientation="horizontal"
                bgColor="#383838"
                my={3}
                height={0.2}
              />
              <Wrap>
                {skills.others.map((skill) => (
                  <CustomSkillTag skill={skill} />
                ))}
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}
