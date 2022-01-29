import { Box, Heading } from "@chakra-ui/react";
import { GetBlogPosts } from "./GetBlogPosts";

export const BlogPosts = (props) => {
	return(
		<Box>
			<Heading mb={8}>
				Latest Blog Posts
			</Heading>
			<GetBlogPosts />
		</Box>
	);
}