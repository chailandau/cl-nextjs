import { gql } from 'graphql-request';

import {
    HERO_FRAGMENT,
    ICON_FRAGMENT,
    IMAGE_BLOCK_FRAGMENT,
    IMAGE_FRAGMENT,
    INTERNAL_LINK_FRAGMENT,
    SINGLE_USE_FRAGMENT,
    SOCIALS_FRAGMENT,
    TEXT_BLOCK_FRAGMENT
} from './graphqlFragments';

export const PAGE_CONTENT_QUERY = gql`
    query PageContentQuery($slug: String!) {
        Pages(where:{ slug: { equals: $slug }}) {
            docs {
                id
                slug
                title
                pageSections {
                    ${HERO_FRAGMENT}
                    ${SOCIALS_FRAGMENT}
                    ${SINGLE_USE_FRAGMENT}
                }}
        }
    }
`;

export const PROJECT_CONTENT_QUERY = gql`
 query ProjectContentQuery($slug: String!) {
    Projects(where:{ slug: { equals: $slug }}) {
            docs {
            id
            title
            slug
            projectSections {
            ${IMAGE_BLOCK_FRAGMENT}
            ${TEXT_BLOCK_FRAGMENT}
            }
            intro {
                description
                image {
                    ${IMAGE_FRAGMENT}
                }
            }
        }
    }
  }
`;

export const SLUG_QUERY = gql`
    query SlugQuery {
        Pages {
            docs {
                slug
            }
        }
        Projects {
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
                image {
                    ${IMAGE_FRAGMENT}
                }
            }
        }
    }
`;
export const ABOUT_QUERY = gql`
query AboutQuery {
    About {
            title
            coloredSubhead
            image {
                ${IMAGE_FRAGMENT}
            }
            text
            pets {
                athena {
                    ${IMAGE_FRAGMENT}
                }
                harvey {
                    ${IMAGE_FRAGMENT}
                }
                warren {
                    ${IMAGE_FRAGMENT}
                }
            }
        }
    }
`;
