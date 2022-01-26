import { Flex, Badge, Heading } from "@chakra-ui/react"

export const SkillBadges = () => {
	return (
		<>
		<Heading mb={8}>Skills</Heading>
		<Heading as="h4" fontSize="lg" fontWeight="600" mb={2}>
			Technical
		</Heading>
		<Flex wrap={'wrap'}>
			<Badge mr={2}>
				HTML
			</Badge>
		</Flex>
		</>
	);
}