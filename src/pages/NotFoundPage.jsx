import { Box, Heading, Text, Button, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <Box textAlign="center" py={10} px={6} h={"70vh"} w={"1100px"}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
		<Link as={ReachLink} to={'/'}>
			<Button
				colorScheme="teal"
				variant="solid">
				Go to Home
			</Button>
		</Link>
    </Box>
  );
}