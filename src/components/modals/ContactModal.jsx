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
	FormHelperText,
	Select,
	Textarea,

  } from '@chakra-ui/react'

import { ReCAPTCHA } from 'react-google-recaptcha';

import { FaCat, FaTelegramPlane } from 'react-icons/fa';

const TEST_SITE_KEY = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

export const HireMe = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

	const onChange = (value) => {
		console.warn(value);
	}

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
          <chakra.form
            onSubmit={(e) => {
            e.preventDefault();
            }}
            {...props}
            >
                <Stack spacing="6">
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="email" placeholder='Danish Shakeel' type="text" required />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input name="email" placeholder='hi@danishshakeel.me' type="email" autoComplete="email" required />
					<FormHelperText id="email-helper-text">Your email id will remain between us.</FormHelperText>
                </FormControl>
				<FormControl id="query-type" isRequired>
				<FormLabel>Type</FormLabel>
				<Select placeholder='Select a query type'>
					<option value='Full Stack Development'>Full Stack Development</option>
					<option value='WordPress Development'>WordPress Development</option>
					<option value='Server Management'>Server Management</option>
					<option value='Site Migration'>Site Migration</option>
					<option value='IT Consulting'>IT Consulting</option>
					<option value='Other'>Other</option>
					</Select>
				</FormControl>
				<FormControl id="message" isRequired>
				<FormLabel>How may I help you?</FormLabel>
				<Textarea placeholder='I want help with...' />
				</FormControl>
				<ReCAPTCHA
					style={{ display: "inline-block" }}
					theme="dark"
					sitekey={TEST_SITE_KEY}
					onChange={onChange}
				/>
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