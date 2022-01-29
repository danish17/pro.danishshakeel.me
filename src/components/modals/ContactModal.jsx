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
  } from '@chakra-ui/react'

import { FaCat } from 'react-icons/fa';

import { ContactForm } from '../ContactForm';

export const HireMe = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return ( 
        <>
        <Box
          display={{ base: props.preventOnMobile ? "none" : "flex", md: "flex" }}
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
			<ContactForm />
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