import { VStack, Stack, Heading, Text, Badge, Spacer, useColorModeValue } from "@chakra-ui/react";
import { educationExperience, workExperience } from "./_data";


export const WorkExperience = () => {
	const Experience = (props) => {
		return (
		<VStack alignItems={'flex-start'} bgColor={useColorModeValue('gray.100', 'gray.900')} p={4} px={8} rounded={'lg'} position={'relative'}>
			<Heading as="h3" fontSize="xl" fontWeight="600" my={2}>
				{props.role}
			</Heading>
			<Text color={'gray.500'}>
			{`${props.company} | ${props.startDate} - ${props.endDate}`}
			</Text>
			<Spacer mt={2} />
			{props.isSpecialType && <Badge variant={'solid'} fontSize={'8px'}>{props.isSpecialType}</Badge>}
		</VStack>
		);
	}

	return (
		<>
		<Heading mb={8}>Work Experience</Heading>
		<Stack>
			{workExperience.map((experience, index) => (
				<Experience
				key={experience.id}
				role={experience.role}
				company={experience.company}
				startDate={experience.startDate}
				endDate={experience.endDate}
				isSpecialType={experience.isSpecialType}
				/>
			))
			}
		</Stack>
		</>
	)
}

export const Education = () => {
	const Experience = (props) => {
		return (
		<VStack alignItems={'flex-start'} bgColor={useColorModeValue('gray.100', 'gray.900')} p={4} px={8} rounded={'lg'} position={'relative'}>
			<Heading as="h3" fontSize="xl" fontWeight="600" mt={2}>
				{props.degree}
			</Heading>
			<Text>
				{props.major}
			</Text>
			<Spacer mt={2} />
			<Text color={'gray.500'}>
			{`${props.institution} | ${props.startDate} - ${props.endDate}`}
			</Text>
		</VStack>
		);
	}
	
	return (
		<>
		<Heading mb={8}>Education</Heading>
		<Stack>
			{educationExperience.map((experience, index) => (
				<Experience
				key={experience.id}
				degree={experience.degree}
				major={experience.major}
				institution={experience.institution}
				startDate={experience.startDate}
				endDate={experience.endDate}
				/>
			))
			}
		</Stack>
		</>
	)
}