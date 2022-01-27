import { Box, Flex, Heading } from '@chakra-ui/react';
import { PortfolioCard } from './PortfolioCard';

export const PortfolioSection = (props) => {
	return (
		<>
		<Box>
			<Heading mb={8} {...props}>Portfolio</Heading>
			<Flex>
				<PortfolioCard />
			</Flex>
		</Box>
		</>
	);
}