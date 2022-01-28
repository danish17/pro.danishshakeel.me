import { VStack, Stack, Heading, Text, Badge, Spacer, useColorModeValue } from "@chakra-ui/react";
import { educationExperience, workExperience } from "./_data";

export const Achievements = (props) => {
	const Experience = (props) => {
		return (
		<VStack alignItems={'flex-start'} bgColor={useColorModeValue('gray.100', 'gray.900')} p={4} px={8} rounded={'lg'} position={'relative'}>
			<Heading as="h3" fontSize="xl" fontWeight="600" mt={2}>
				{props.achievement}
			</Heading>
		</VStack>
		);
	}
	
	return (
		<>
		<Heading mb={8} {...props}>Achievements</Heading>
		<Stack>
			{educationExperience.map((experience, index) => (
				<Experience
				key={index}
				achievement={experience.degree}
				/>
			))
			}
		</Stack>
		</>
	)
}