import { Box, Button, Center, Stack, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { BlogCard } from './BlogCard'
import { products } from './_data'
import { BlogGrid } from './BlogGrid'

export const Blog = (props) => (
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
		<Heading>Blog</Heading>
	</Stack>
    <BlogGrid my={4}>
	{props.limit ? products.slice(0,props.limit).map((product) => (
         <BlogCard key={product.id} product={product} />
      )) : products.map((product) => (
	<BlogCard key={product.id} product={product} />
	 ))}
    </BlogGrid>
	<Center>
		<Button mt="8" as="a" href="#" size="lg" colorScheme="red" fontWeight="bold">View Blog</Button>
	</Center>
  </Box>
)
