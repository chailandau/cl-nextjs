import { gql } from 'graphql-request';

import {
    HERO_FRAGMENT,
    ICON_FRAGMENT,
    IMAGE_FRAGMENT,
    INTERNAL_LINK_FRAGMENT,
    SINGLE_USE_FRAGMENT
} from './graphqlFragments';

export const PAGES_QUERY = gql`
    query PagesQuery {
        Pages {
            docs {
                id
                slug
                title
                sections {
                    ${HERO_FRAGMENT}
                }
            }
        }
    }
`;

export const PAGE_CONTENT_QUERY = gql`
    query PageContentQuery($slug: String!) {
        Pages(where:{ slug: { equals: $slug }}) {
            docs {
                id
                slug
                title
                sections {
                    ${HERO_FRAGMENT}
                    ${SINGLE_USE_FRAGMENT}
                }}
        }
    }`;

export const SLUG_QUERY = gql`
    query PagesQuery {
        Pages {
            docs {
                slug
            }
        }
    }
`;

export const NAV_QUERY = gql`
    query NavQuery  {
            Nav {
                menuItems {
                    page {
                        ${INTERNAL_LINK_FRAGMENT}
                    }
                    overridePageName
                    customLabel
                }
                footerCopyrightText
        }
    }
`;
export const TOOLBOX_QUERY = gql`
    query ToolboxQuery {
        ToolboxListing {
            title
            description
            ${ICON_FRAGMENT}
            tools {
                id
                title
                ${ICON_FRAGMENT}
            }
        }
    }
`;

export const TESTIMONIALS_QUERY = gql`
query TestimonialsQuery {
    TestimonialListing {
            title
            ${ICON_FRAGMENT}
            testimonials {
                id
                author
                jobTitle
                company
                linkedin
                excerpt
                testimonial
                ${IMAGE_FRAGMENT}
            }
        }
    }
`;
