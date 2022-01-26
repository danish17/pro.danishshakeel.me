import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Icon,
    useDisclosure,
    Stack,
    FormControl,
    FormLabel,
    chakra,
    Input,

  } from '@chakra-ui/react'

import { FaCat, FaTelegramPlane } from 'react-icons/fa';

export const HireMe = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return ( 
        <>
        <Box
          display={{ base: "none", md: "flex" }}
          alignItems="center"
          onClick={onOpen}
          aria-label="Sponsor Choc UI on Open Collective"
          bg="gray.50"
          borderWidth="1px"
          borderColor="gray.200"
          px="1em"
          minH="36px"
          rounded="md"
          fontSize="sm"
          color="gray.800"
          outline="0"
          transition="all 0.3s"
          cursor={'pointer'}
          _hover={{
            bg: "gray.100",
            borderColor: "gray.300",
          }}
          _active={{
            borderColor: "gray.200",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          ml={5}
        >
          <Icon as={FaCat} w="4" h="4" color="red.500" mr="4" />
          <Box as="strong" lineHeight="inherit" fontWeight="semibold">
            Hire Me
          </Box>
        </Box>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <chakra.form
            onSubmit={(e) => {
            e.preventDefault();
            }}
            {...props}
            >
                <Stack spacing="6">
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="email" type="text" required />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input name="email" type="email" autoComplete="email" required />
                </FormControl>
                <Button type="submit" colorScheme="green" size="lg" fontSize="md" leftIcon={<FaTelegramPlane />}>
                    Send
                </Button>
                </Stack>
            </chakra.form>
          </ModalBody>
          <ModalFooter>
            <Button variant={'outline'} colorScheme={'red'} mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
          </Modal>
        </>
    );
}