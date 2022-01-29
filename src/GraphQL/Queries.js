import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
    query GetRecentPosts {
        posts(first: 4) {
            edges {
            node {
                title
                uri
                featuredImage {
                node {
                    uri
                }
                }
                excerpt
                date
            }
            }
        }
    }

`