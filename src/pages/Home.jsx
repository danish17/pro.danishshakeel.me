import { Center, Grid, GridItem, Stack, VStack } from "@chakra-ui/react";
import { CharacterModel } from "../components/3d/FullBody";
import { ProfileCard } from "../components/profile/ProfileCard";
import { AboutMe, Skills } from "../components/profile/ProfileSections";
import { WorkExperience, Education } from "../components/profile/Experiences";

export const HomePage = (props) => {
	return (
	<>
	<VStack>
	<div className="threejs-animated-world">
		<CharacterModel />
	</div>
	<Center>
		<ProfileCard />
	</Center>
	<Stack spacing={16} p={8}>
            <AboutMe />
			<Skills />
    </Stack>
	<Grid templateColumns={{
		base: 'repeat(1, 1fr)',
		md: 'repeat(2, 1fr)'
		}}
		width={'100%'}
		p={8}
		gap={16}>
		<GridItem width={'fit-content'}>
			<WorkExperience />
		</GridItem>
		<GridItem width={'fit-content'}>
			<Education />
		</GridItem>
	</Grid>
	</VStack>
	</>
	);
}