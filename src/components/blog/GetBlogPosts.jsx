import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import { GET_BLOG_POSTS } from "../../GraphQL/Queries";

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
		<>
			{!isEmpty(posts) && <Text>{posts[0].node.title}</Text>}
		</>
	);
}