import { Heading, Box } from "@chakra-ui/react";
import { PortfolioCard } from "../components/portfolio/PortfolioCard";
import { PortfolioGrid } from "../components/portfolio/PortfolioGrid";
import { TestimonialBlurredSection } from "../components/testimonial/Testimonial";
import { projects } from "../components/portfolio/_data";

export const PortfolioPage = (props) => {
	return (
		<Box p={4}>
		<Heading size={'3xl'} mb={16}>
			Portfolio
		</Heading>
		<PortfolioGrid my={4}>
			{projects.map((project) => (
				<PortfolioCard key={project.id} project={project} />
			))}
		</PortfolioGrid>
		<TestimonialBlurredSection />
		</Box>
	);
}