import {     
	Stack,
    FormControl,
    FormLabel,
    chakra,
    Input,
	FormHelperText,
	Select,
	Textarea, 
	Button,
} from '@chakra-ui/react';

import { FaTelegramPlane } from 'react-icons/fa';

export const ContactForm = (props) => {
	const onChange = (value) => {
		console.warn(value);
	}

	return (
		<chakra.form
            onSubmit={(e) => {
            e.preventDefault();
            }}
            {...props}
            >
                <Stack spacing="6" {...props}>
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
                <Button type="submit" colorScheme="green" size="lg" fontSize="md" leftIcon={<FaTelegramPlane />}>
                    Send
                </Button>
                </Stack>
            </chakra.form>
	);
}