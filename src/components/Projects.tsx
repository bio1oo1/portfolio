import React from "react";
import {
  Box,
  chakra,
  Container,
  Text,
  Grid,
  GridItem,
  HStack,
  VStack,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Tag,
  Image,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "content";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container
      maxWidth="7xl"
      maxHeight={"3xl"}
      my={2}
      py={0}
      pl={0}
      pr={2}
      overflowY={"scroll"}
    >
      <Grid
        mb="10px"
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        {projects.map((project) => (
          <GridItem w="100%" key={project.id}>
            <Card {...project} />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

const Card = ({
  id,
  link,
  name,
  description,
  imgs,
  techStacks,
}: {
  id: number;
  link: string;
  name: string;
  description: string;
  imgs: string[];
  techStacks: string[];
}) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("rgba(43, 43, 44, 0.75)", "gray.800")}
      borderColor={"#383838"}
      borderWidth={1}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
    >
      <Box>
        <Link href={link} target="_blank" position="absolute" top="0" right="0">
          <IconButton
            shadow={"md"}
            variant={"ghost"}
            borderColor={"#383838"}
            borderWidth={1}
            bg="rgba(43, 43, 44, 0.75)"
            color="#D0D0D0"
            _hover={{ backgroundColor: "#1e1e1e" }}
            aria-label="icon"
          >
            <FaExternalLinkAlt />
          </IconButton>
        </Link>
        {/* <Text fontSize="md" color={isEvenId ? 'primary.800' : 'blue.700'}>
                    {date}
                </Text> */}

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {name}
          </chakra.h1>
          {/* <Text fontSize="sm">{description}</Text> */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            className="max-w-[240px] md:max-w-[340px] !pb-[12px]"
            pagination={{
              clickable: true,
            }}
          >
            {imgs.map((img) => (
              <SwiperSlide>
                <Image
                  maxWidth={["240px", "340px"]}
                  height={["116px", "164px"]}
                  objectFit={"cover"}
                  borderRadius={"6px"}
                  src={img}
                ></Image>
              </SwiperSlide>
            ))}
          </Swiper>
        </VStack>

        <HStack>
          {/* <Tag variant={'subtle'}>Flutter</Tag> */}
          <p>{description}</p>
        </HStack>
        <HStack my={4} wrap="wrap" justify="center">
          {techStacks.map((techStack) => (
            <Tag
              px={2}
              variant={"subtle"}
              color={"#D0D0D0"}
              bg="rgba(43, 43, 44)"
              borderWidth={1}
              borderColor={"#383838"}
              transitionDuration={"400ms"}
              _hover={{ backgroundColor: "#1e1e1e" }}
            >
              {techStack}
            </Tag>
          ))}
        </HStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.400", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("primary.800", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
    ></Box>
  );
};

export default Projects;
