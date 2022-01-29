import { Flex, Badge, Heading, Box } from "@chakra-ui/react"
import { skillsList } from "./_data";

export const SkillBadges = (props) => {
	const colorSchemes = ['red', 'teal', 'yellow', 'green', 'purple'];

	Array.prototype.random = function () {
		return this[Math.floor((Math.random()*this.length))];
	}

	return (
		<>
		<Heading mb={8} {...props}>Skills</Heading>
		{skillsList.map((skillCat, index) => {
			return (
				<Box key={index}>
				<Heading as="h4" fontSize="lg" fontWeight="600" my={4}>
					{skillCat.name}
				</Heading>
				<Flex wrap={'wrap'} direction={'row'}>
				{skillCat.skills.map((skill, index) => {
					return (
						
						<Badge key={index} mr={2} mb={1} colorScheme={colorSchemes.random()}>
							{skill.name}
						</Badge>
					)
				})}
				</Flex>
				</Box>
			)
		})}
		</>
	);
}