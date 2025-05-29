import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  HStack,
  Img,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { clientReviews } from "content";

export default function Reviews() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Container maxW={"7xl"} alignItems="center" my={5}>
      <Box
        id="reviews"
        flexDir={"column"}
        justifyContent="space-between"
        bg={"#1E1E1E"}
        borderColor={"#383838"}
        borderWidth={1}
        maxHeight="4xl"
        scrollBehavior={"smooth"}
        borderRadius="3xl"
        p={[4, 10]}
        mb={10}
      >
        <Heading>Client Reviews</Heading>
        <Box maxHeight={"3xl"} overflowY={"scroll"} pr={2}>
          {clientReviews.map((milestone, index) => (
            <Flex mb={"10px"}>
              {/* Desktop view(left card) */}
              {isDesktop && index % 2 === 0 && (
                <>
                  <LineWithDot />
                  <Card {...milestone} />
                </>
              )}
              {/* Desktop view(right card) */}
              {isDesktop && index % 2 !== 0 && (
                <>
                  <Card {...milestone} />
                  <LineWithDot />
                </>
              )}
              {isMobile && (
                <>
                  <LineWithDot />
                  <Card {...milestone} />
                </>
              )}
            </Flex>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "20px", md: "20px" }}
      ml={{ base: "0", md: "20px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={"#383838"}
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
          bg={"#383838"}
          borderRadius="100px"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const Card = ({
  id,
  name,
  position,
  review,
  linkedin,
  image,
}: {
  id: number;
  name: string;
  position: string;
  review: string;
  linkedin: string;
  image: string;
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
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#383838",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box>
        <HStack>
          <Link href={linkedin} target="_blank" flexShrink={0}>
            <Img
              src={image}
              rounded={"100%"}
              w={"48px"}
              h={"48px"}
              _hover={{ transform: "scale(1.1)", transitionDuration: "400ms" }}
            />
          </Link>
          <Box>
            <Text fontSize="xl" lineHeight={1.2} fontWeight="bold">
              {name}
            </Text>
            <Text fontSize="sm" fontWeight="bold">
              {position}
            </Text>
          </Box>
        </HStack>

        <VStack mb={3} textAlign="left" gap={0}>
          {/* <chakra.h1 fontSize="lg" lineHeight={1.2} fontWeight="bold" w="100%">
            {review}
          </chakra.h1> */}
          <Text
            fontSize="16px"
            lineHeight={"22px"}
            whiteSpace="pre-wrap"
            mt={2}
          >
            {review}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};
