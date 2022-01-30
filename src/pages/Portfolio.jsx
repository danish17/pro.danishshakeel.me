import { Heading, Box } from "@chakra-ui/react";
import { PortfolioCard } from "../components/portfolio/PortfolioCard";
import { PortfolioGrid } from "../components/portfolio/PortfolioGrid";
import { TestimonialBlurredSection } from "../components/testimonial/Testimonial";
import { products } from "../components/portfolio/_data";

export const PortfolioPage = (props) => {
	return (
		<Box p={4}>
		<Heading size={'3xl'} mb={16}>
			Portfolio
		</Heading>
		<PortfolioGrid my={4}>
			{products.map((product) => (
				<PortfolioCard key={product.id} product={product} />
			))}
		</PortfolioGrid>
		<TestimonialBlurredSection />
		</Box>
	);
}