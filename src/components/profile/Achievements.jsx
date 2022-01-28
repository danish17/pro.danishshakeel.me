import { VStack, Stack, Heading, Text, Badge, Spacer, useColorModeValue, Grid, GridItem } from "@chakra-ui/react";
import { achievements } from "./_data";
import { FiAward } from "react-icons/fi";
import { BiCertification } from "react-icons/bi";

export const Achievements = (props) => {
	const Experience = (props) => {
		return (
		<Grid templateColumns={'repeat(4, 1fr)'} bgColor={useColorModeValue('gray.100', 'gray.900')} p={4} px={8} rounded={'lg'} position={'relative'}>
			<GridItem colSpan={3}>
			<VStack alignItems={'flex-start'}>
				<Heading as="h3" fontSize="xl" fontWeight="600" mt={2}>
					{props.achievement}
				</Heading>
				<Text color={'gray.500'}>
					{`${props.organization }, ${props.date}`}
				</Text>
			</VStack>
			</GridItem>
			<GridItem display={'grid'} placeItems={'center'}>
				{ props.isType==='award' ? <FiAward size={'22px'} /> : <BiCertification size={'22px'} /> } 
			</GridItem>
		</Grid>
		);
	}
	
	return (
		<>
		<Heading mb={8} {...props}>Achievements</Heading>
		<Stack>
			{achievements.map((achievement, index) => (
				<Experience
				key={index}
				achievement={achievement.name}
				date={achievement.date}
				organization={achievement.organization}
				isType={achievement.type}
				/>
			))
			}
		</Stack>
		</>
	)
}