import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Text, Skeleton, Center, VStack, Grid, GridItem, Button } from "@chakra-ui/react";
import { GET_BLOG_POSTS } from "../../GraphQL/Queries";
import { BlogCard } from "./BlogCard";

export const GetBlogPosts = (props) => {
	const { error, loading, data } = useQuery(GET_BLOG_POSTS);
	const [ posts, setPosts ] = useState({});
	const isEmpty = (obj) => {
		return Object.keys(obj).length === 0;
	}

	useEffect(() => {
		if (data && !isEmpty(data)) {
			setPosts(data.posts.nodes);
		}
	}, [data]);

	return (
		<>
		<Grid templateColumns={{
			base: 'repeat(1, 1fr)',
			md: 'repeat(2, 1fr)'
			}}
			width={'100%'}
			p={8}
			gap={16}>
			
			{loading && <>
			<GridItem>
				<Skeleton h={32} w={'100%'} borderRadius={12}></Skeleton>
			</GridItem>
			<GridItem>
				<Skeleton h={32} w={'100%'} borderRadius={12}></Skeleton>
			</GridItem>
			</>}

			{!isEmpty(posts) && posts.map((post, index) => {
				return ( 
				<GridItem key={index}>
					<BlogCard
					key={index}
					title={post.title}
					excerpt={post.excerpt}
					imageUrl={post.featuredImage.node.sourceUrl}
					postUrl={post.link}
					publishedDate={post.date}
					authorName={post.author.node.firstName}
					authorAvatar={post.author.node.avatar.url}
					categoryName={post.categories.edges[0].node.name}
					categoryUrl={post.categories.edges[0].node.link}
					tags={post.tags.nodes}
					/>
				</GridItem>
				);
			})}

			{error && <Center>
				<VStack my={8}>
					<Text>There seems to be an issue...</Text>
				</VStack>
				</Center>
			}
		</Grid>
		<Center>
			<Button mt="8" as="a" href="https://danishshakeel.me" target={'_blank'} size="lg" colorScheme="red" fontWeight="bold">
			View Blog
			</Button>
		</Center>
		</>
	);
}