import { Box, Button, Center, Stack, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { ProductCard } from './ProductCard'
import { products } from './_data'
import { ProductGrid } from './ProductGrid'

export const Portfolio = (props) => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{
      base: '4',
      md: '8',
      lg: '12',
    }}
    py={{
      base: '6',
      md: '8',
      lg: '12',
    }}
  >
	<Stack align={'center'}>
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
)
