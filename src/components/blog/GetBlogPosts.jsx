import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Text, Skeleton, Center, VStack, Grid, GridItem } from "@chakra-ui/react";
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
			setPosts(data.posts.edges);
		}
	}, [data]);

	return (
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
					{console.log(post.node.featuredImage.node.sourceUrl)}
					<BlogCard
					title={post.node.title}
					excerpt={post.node.excerpt}
					imageUrl={post.node.featuredImage.node.sourceUrl}/>
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
	);
}