import { Box, Button, Center, Stack, Heading, Link } from '@chakra-ui/react'
import { Link as ReachLink } from 'react-router-dom';
import * as React from 'react'
import { PortfolioCard } from './PortfolioCard'
import { projects } from './_data'
import { PortfolioGrid } from './PortfolioGrid'

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
			<PortfolioGrid my={4}>
			{props.limit ? projects.slice(0,props.limit).map((project) => (
				<PortfolioCard key={project.id} project={project} />
			)) : projects.map((project) => (
				<PortfolioCard key={project.id} project={project} />
			))}
			</PortfolioGrid>
			<Center>
				<Link as={ReachLink} to={'/portfolio'} _hover={{
				textDecoration: 'none',
				}}>
				<Button mt="8" as="a" href="#" size="lg" colorScheme="red" fontWeight="bold">All Projects</Button>
				</Link>
			</Center>
		</Box>
		</>
	);
}
