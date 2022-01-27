import { Center, Grid, GridItem, Stack, VStack, Spacer } from "@chakra-ui/react";
import { CharacterModel } from "../components/3d/FullBody";
import { ProfileCard } from "../components/profile/ProfileCard";
import { AboutMe, Skills } from "../components/profile/ProfileSections";
import { WorkExperience, Education } from "../components/profile/Experiences";
import { SkillBadges } from "../components/profile/Skills";
import { PortfolioSection } from "../components/portfolio/PortfolioSection";

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
			<PortfolioSection limit={4}/>
    </Stack>
	<Grid templateColumns={{
		base: 'repeat(1, 1fr)',
		md: 'repeat(2, 1fr)'
		}}
		width={'100%'}
		p={8}
		gap={16}>
		<GridItem width={'fit-content'}>
			<WorkExperience id="work-experience" />
		</GridItem>
		<GridItem width={'fit-content'}>
			 <Education id="education" />
			 <Spacer mt={8} />
			 <SkillBadges id="skills" />
		</GridItem>
	</Grid>
	<Stack spacing={16} p={8}>
    </Stack>
	</VStack>
	</>
	);
}