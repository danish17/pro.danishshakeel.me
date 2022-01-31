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
	Spinner,
	useToast,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import { FaTelegramPlane, FaCheck } from 'react-icons/fa';

export const ContactForm = (props) => {
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);
	const toast = useToast();

	const Toast = () => {
		
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		setSending(true);
		let name = e.target.name.value;
		let email = e.target.email.value;
		let message = e.target.message.value;
		let queryType = e.target.queryType.value;
		window.Email.send({
			Host : process.env.REACT_APP_EMAIL_HOST,
			Username : process.env.REACT_APP_EMAIL_ID,
			Password : process.env.REACT_APP_EMAIL_PASSWORD,
			To : 'danishshakeel54@gmail.com',
			From : process.env.REACT_APP_EMAIL_ID,
			Subject : "New Message from " + name,
			Body : `
			<pre>Contact form was filled by <b>${name}</b> on <b>${new Date()}</b></pre>
			<div>Email: ${email}</div>
			<div>Query Type: ${queryType}</div>
			<div>Message: ${message}</div>
			`
		}).then(
		  message => {
			setSending(false);
			setSent(true);
			toast({
				title: 'Email sent successfully.',
				description: "I've got your email! I will respond to you as soon as possible.",
				status: 'success',
				duration: 3000,
				isClosable: true,
			});
		  }
		);
	}
	
	return (
		<chakra.form
            onSubmit={handleSubmit}
            {...props}
            >
                <Stack spacing="6" {...props}>
                <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" placeholder='Danish Shakeel' type="text" required />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input name="email" placeholder='hi@danishshakeel.me' type="email" autoComplete="email" required />
					<FormHelperText id="email-helper-text">Your email id will remain between us.</FormHelperText>
                </FormControl>
				<FormControl id="query-type" isRequired>
				<FormLabel>Type</FormLabel>
				<Select placeholder='Select a query type' name="queryType">
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
				<Textarea name="message" placeholder='I want help with...' />
				</FormControl>
                <Button
				type="submit"
				colorScheme={sent ? 'green' : 'blue'}
				size="lg"
				fontSize="md"
				leftIcon= {sent ? <FaCheck /> : (sending ? <Spinner size={'xs'} /> : <FaTelegramPlane />)}
				isDisabled={sent}>
                    {sent ? 'Sent' : (sending ? 'Sending...' : 'Send')}
                </Button>
                </Stack>
            </chakra.form>
	);
}