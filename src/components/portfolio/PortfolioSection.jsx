import { Box, Button, Center, Stack, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './PortfolioCard'
import { products } from './_data'
import { ProductGrid } from './PortfolioGrid'

export const PortfolioSection = (props) => {
	return (
		<>
		<Box
			maxW="7xl"
			mx="auto"
		>
			<Stack align={'left'}>
				<Heading>Projects</Heading>
			</Stack>
			<ProductGrid my={4}>
			{props.limit ? products.slice(0,props.limit).map((product) => (
				<ProductCard key={product.id} product={product} />
			)) : products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
			</ProductGrid>
			<Center>
				<Button mt="8" as="a" href="#" size="lg" colorScheme="red" fontWeight="bold">All Projects</Button>
			</Center>
		</Box>
		</>
	);
}
