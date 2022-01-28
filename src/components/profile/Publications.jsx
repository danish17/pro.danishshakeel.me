import { VStack, Stack, Heading, Text, Badge, Spacer, useColorModeValue, Grid, GridItem, Button } from "@chakra-ui/react";
import { achievements } from "./_data";

export const Publications = (props) => {
	const Experience = (props) => {
		return (
		<VStack alignItems={'flex-start'} bgColor={useColorModeValue('gray.100', 'gray.900')} p={4} px={8} rounded={'lg'} position={'relative'}>
			<Heading as="h3" fontSize="xl" fontWeight="600" mt={2}>
				{props.achievement}
			</Heading>
			<Text color={'gray.500'}>
				{`${props.organization }, ${props.date}`}
			</Text>
		</VStack>
		);
	}
	
	return (
		<>
		<Heading mb={8} {...props}>Publications</Heading>
		<Stack>
			{achievements.slice(0,4).map((achievement, index) => (
				<Experience
				key={index}
				achievement={achievement.name}
				date={achievement.date}
				organization={achievement.organization}
				isType={achievement.type}
				/>
			))
			}
			<Button>View All Publications</Button>
		</Stack>
		</>
	)
}