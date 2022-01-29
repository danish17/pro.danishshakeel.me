import { Center, Grid, GridItem, Stack, VStack, Spacer, Heading } from "@chakra-ui/react";
import { CharacterModel } from "../components/3d/FullBody";
import { ProfileCard } from "../components/profile/ProfileCard";
import { AboutMe, Skills } from "../components/profile/ProfileSections";
import { WorkExperience, Education } from "../components/profile/Experiences";
import { Achievements } from "../components/profile/Achievements";
import { Publications } from "../components/profile/Publications";
import { SkillBadges } from "../components/profile/Skills";
import { PortfolioSection } from "../components/portfolio/PortfolioSection";
import { ContactForm } from "../components/ContactForm";
import { BlogPosts } from "../components/blog/BlogPosts";

export const HomePage = (props) => {
	return (
	<>
	<VStack>
	<div 
	className="threejs-animated-world"
	>
		<CharacterModel />
	</div>
	<Center>
		<ProfileCard />
	</Center>
	<Stack spacing={16} p={8}>
            <AboutMe />
			<Skills />
			<PortfolioSection limit={4}/>
			<BlogPosts />
    </Stack>
	<Grid templateColumns={{
		base: 'repeat(1, 1fr)',
		md: 'repeat(2, 1fr)'
		}}
		width={'100%'}
		p={8}
		gap={16}>
		<GridItem width={'100%'}>
			<WorkExperience id="work-experience" />
		</GridItem>
		<GridItem width={'100%'}>
			 <Education id="education" />
			 <Spacer mt={8} />
			 <SkillBadges id="skills" />
		</GridItem>
		<GridItem width={'100%'}>
			<Achievements id="achievements" />
		</GridItem>
		<GridItem width={'100%'}>
			<Publications id="publications" />
		</GridItem>
	</Grid>
	<Stack spacing={16} p={8} w={'100%'}>
			<Heading>
				Contact
			</Heading>
            <ContactForm w={{
				base: '100%',
				md: '80%' 
				}}/>
    </Stack>
	</VStack>
	</>
	);
}