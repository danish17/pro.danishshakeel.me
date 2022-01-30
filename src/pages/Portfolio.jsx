import { Heading } from "@chakra-ui/react";
import { PortfolioCard } from "../components/portfolio/PortfolioCard";
import { PortfolioGrid } from "../components/portfolio/PortfolioGrid";
import { products } from "../components/portfolio/_data";

export const PortfolioPage = (props) => {
	return (
		<>
		<Heading>
			Portfolio
		</Heading>
		<PortfolioGrid my={4}>
			{products.map((product) => (
				<PortfolioCard key={product.id} product={product} />
			))}
		</PortfolioGrid>
		</>
	);
}