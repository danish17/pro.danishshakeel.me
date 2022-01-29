import { gql } from '@apollo/client';

export const GET_BLOG_POSTS = gql`
    query GetRecentPosts {
        posts(first: 2) {
            edges {
            node {
                title
                uri
                featuredImage {
                    node {
                        altText
                        sourceUrl(size: POST_THUMBNAIL)
                    }
                }
                excerpt
                date
            }
            }
        }
    }

`