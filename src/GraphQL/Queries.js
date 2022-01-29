import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
    query GetRecentPosts {
		posts(first: 2) {
			nodes {
			author {
				node {
				avatar {
					url
				}
				firstName
				url
				}
			}
			categories(first: 1) {
				edges {
				node {
					name
					uri
				}
				}
			}
			excerpt(format: RENDERED)
			link
			uri
			title(format: RENDERED)
			tags(first: 104) {
				nodes {
				name
				uri
				}
			}
			featuredImage {
				node {
				altText
				sourceUrl(size: POST_THUMBNAIL)
				}
			}
			date
			}
		}
	}

`