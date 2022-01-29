import { VStack, Stack, Heading, Text, Button } from "@chakra-ui/react";
import { publications } from "./_data";

export const Publications = (props) => {
	const Experience = (props) => {
		return (
		<VStack alignItems={'flex-start'} p={4} px={8} rounded={'lg'} position={'relative'}>
			<Heading as="h3" fontSize="xl" fontWeight="600" mt={2}>
				{props.publication}
			</Heading>
			<Text color={'gray.500'}>
				{`${props.organization } | ${props.date}`}
			</Text>
		</VStack>
		);
	}
	
	return (
		<>
		<Heading mb={8} {...props}>Publications</Heading>
		<Stack>
			{publications.slice(0,3).map((publication, index) => (
				<Experience
				key={index}
				publication={publication.name}
				date={publication.date}
				organization={publication.organization}
				isType={publication.type}
				/>
			))
			}
			<Button>View All Publications</Button>
		</Stack>
		</>
	)
}