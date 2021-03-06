import { VStack, Stack, Heading, Text, Box } from "@chakra-ui/react";
import ReactGA from "react-ga";
import { publications } from "../components/profile/_data";
import { ResearchLinks } from "../components/ResearchLinks";

export const PublicationsPage = (props) => {
	ReactGA.pageview(window.location.pathname);

	const Experience = (props) => {
		return (
		<VStack alignItems={'flex-start'} p={4} px={8} rounded={'lg'} position={'relative'}>
			<Heading
			as="a"
			href={props.url}
			target={'_blank'}
			rel="noreferrer"
			fontSize="xl"
			fontWeight="600"
			mt={2}
			_hover={{
				textDecoration: "underline",
			}}>
				{props.publication}
			</Heading>
			<Text color={'gray.500'}>
				{`${props.organization } | ${props.date}`}
			</Text>
		</VStack>
		);
	}
	
	return (
		<Box p={4}>
		<Heading size={'3xl'} mb={16}>
			Publications</Heading>
		<Stack>
			{publications.map((publication, index) => (
				<Experience
				key={index}
				publication={publication.name}
				date={publication.date}
				organization={publication.organization}
				url={publication.url}
				/>
			))
			}
		</Stack>
		<ResearchLinks />
		</Box>
	)
}