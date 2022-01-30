import { Button, Heading, HStack, Stack } from "@chakra-ui/react";
import { SiGooglescholar, SiResearchgate } from "react-icons/si";

export const ResearchLinks = (props) => {
	return (
		<Stack>
			<Heading as="h4" size="lg" my={4}>
			Checkout my research profiles
			</Heading>
		<HStack>
			<Button as='a' href='https://scholar.google.com/citations?user=QnC8JDQAAAAJ&hl=en' target={'_blank'} rel="noreferrer" colorScheme={'blue'} leftIcon={<SiGooglescholar />}>
				Google Scholar
			</Button>
			<Button as='a' href='https://www.researchgate.net/profile/Danish-Shakeel-2' target={'_blank'} rel="noreferrer" colorScheme={'teal'} leftIcon={<SiResearchgate />}>
				ResearchGate
			</Button>
		</HStack>
		</Stack>
	);
}