import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Container,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { hero } from "content";
import { useScroll } from "hooks/useScroll";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  const { scrollY } = useScroll();

  return (
    <Box
      bg="#1E1E1E"
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"#383838"}
      py={[2, 5]}
      mb={10}
    >
      <Container maxW={"7xl"} alignItems="center">
        <Flex minH={"60px"} align={"center"}>
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              color={"#D0D0D0"}
              borderWidth={1}
              borderColor={"#383838"}
              bg="rgba(43, 43, 44, 0.75)"
              _hover={{ backgroundColor: "#1e1e1e" }}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
            alignItems="center"
          >
            {/* <Image p={2} src={logo} height="20" /> */}

            <Flex display={{ base: "none", md: "flex" }}>
              <DesktopNav />
            </Flex>
          </Flex>

          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            {/* <Button
              as={"a"}
              display={{ base: "inline-flex", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"#D0D0D0"}
              bg={"#1e1e1e"}
              borderColor={"#383838"}
              borderWidth={1}
              href={hero.resume}
              target="_blank"
              _hover={{
                textDecoration: "none",
                bg: "#3c3c3c",
              }}
            >
              View Resume
            </Button> */}
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Container>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem: any) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                px={3}
                py={3}
                href={navItem.href ?? "#"}
                fontSize={"md"}
                fontWeight={500}
                borderRadius={6}
                _hover={{
                  textDecoration: "none",
                  backgroundColor: "rgba(43, 43, 44, 0.75)",
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child: any) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({
  label,
  href,
  subLabel,
}: {
  label: string;
  href: string;
  subLabel: string;
}) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={3}
      rounded={"md"}
      _hover={{
        bg: useColorModeValue("primary.700", "gray.900"),
        textDecoration: "none",
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "white", textDecoration: "none" }}
            _hover={{
              textDecoration: "none",
            }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text _groupHover={{ color: "gray.400" }} fontSize={"sm"}>
            {subLabel}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#D0D0D0"} w={8} h={8} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({
  label,
  children,
  href,
}: {
  label: string;
  children?: any;
  href: string;
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack
      spacing={4}
      px={4}
      onClick={children && onToggle}
      _hover={{
        textDecoration: "none",
        backgroundColor: "rgba(43, 43, 44, 0.75)",
      }}
    >
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text fontWeight={600}>{label}</Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.700", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child: any) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  // {
  //   label: "Find Work",
  //   children: [
  //     {
  //       label: "Job Board",
  //       subLabel: "Find your dream design job",
  //       href: "#",
  //     },
  //     {
  //       label: "Freelance Projects",
  //       subLabel: "An exclusive list for contract work",
  //       href: "#",
  //     },
  //   ],
  // },
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
];
