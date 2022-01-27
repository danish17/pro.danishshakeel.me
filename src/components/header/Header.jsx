import React from "react";
import {
  chakra,
  Flex,
  HStack,
  Center,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  CloseButton,
  Box,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";

import { FaMoon, FaSun, FaGraduationCap } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";

import { Logo } from "../Logo";
import { HireMe } from "../modals/ContactModal";

export const Header = () => {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const bg = useColorModeValue("white", "gray.800");
  const ref = React.useRef();
  const [y, setY] = React.useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  const MobileNavContent = (
    <VStack
      pos="absolute"
      top={0}
      left={0}
      right={0}
      display={mobileNav.isOpen ? "flex" : "none"}
      flexDirection="column"
      p={2}
      pb={4}
      my={4}
      bg={bg}
      spacing={2}
      rounded="lg"
      shadow="lg"
      zIndex={2}
    >
      <CloseButton
        aria-label="Close menu"
        justifySelf="self-start"
        onClick={mobileNav.onClose}
      />
      <Button
        as="a"
        href="#work-experience"
        w="full"
		justifyContent={'flex-start'}
        variant="ghost"
        leftIcon={<MdWork />}
      >
        Work Experience
      </Button>
      <Button
	  as="a"
	  href="#education"
	  w="full"
	  justifyContent={'flex-start'}
	  variant="ghost"
	  leftIcon={<FaGraduationCap />}
	  >
        Education
      </Button>
      <Button
	  as="a"
	  href="#education"
	  w="full"
	  justifyContent={'flex-start'} 
	  variant="ghost"
	  leftIcon={<GiSkills />}
	  >
        Skills
      </Button>
    <HireMe />
    </VStack>
  );

  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Logo />
                </HStack>
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <IconButton
                as="a"
                href="https://danishshakeel.me"
                target="_blank"
                size="md"
                fontSize="lg"
                aria-label={`View Profile`}
                variant="ghost"
                colorScheme={"gray"}
                ml={{ base: "0", md: "3" }}
                icon={<SiAboutdotme />}
              />
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                colorScheme={"gray"}
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={
                  <SwitchIcon color={useColorModeValue("gray", "#f2d57e")} />
                }
              />
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <HireMe preventOnMobile />
            </Flex>
          </Flex>
          {MobileNavContent}
        </chakra.div>
      </chakra.header>
    </Box>
  );
};
