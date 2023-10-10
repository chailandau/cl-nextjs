import { gql } from 'graphql-request';

import {
    CTA_FRAGMENT,
    HERO_FRAGMENT,
    IMAGE_BLOCK_FRAGMENT,
    IMAGE_FRAGMENT,
    INTERNAL_LINK_FRAGMENT,
    META_FRAGMENT,
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
            ${META_FRAGMENT}
            title
            pageSections {
                ${HERO_FRAGMENT}
                ${SOCIALS_FRAGMENT}
                ${SINGLE_USE_FRAGMENT}
            }
        }
    }
}
`;
export const PROJECT_CONTENT_QUERY = gql`
query ProjectContentQuery($slug: String!) {
    Projects(where:{ slug: { equals: $slug }}) {
        docs {
            id
            slug
            ${META_FRAGMENT}
            title
            projectSections {
                ${IMAGE_BLOCK_FRAGMENT}
                ${TEXT_BLOCK_FRAGMENT}
            }
            intro {
                description
                ${CTA_FRAGMENT}
                image {
                    ${IMAGE_FRAGMENT}
                }
            }
            caseStudies {
                id
                slug
                title
                intro {
                    heading
                    text
                    image {
                        ${IMAGE_FRAGMENT}
                    }
                }
            }
        }
    }
}
`;

export const CASE_STUDY_CONTENT_QUERY = gql`
query CaseStudyContentQuery($slug: String!) {
    CaseStudies(where:{ slug: { equals: $slug }}) {
        docs {
            id
            slug
            ${META_FRAGMENT}
            title
            intro {
                heading
                text
                ${CTA_FRAGMENT}
                image {
                    ${IMAGE_FRAGMENT}
                }
            }
            caseStudySections {
                ${IMAGE_BLOCK_FRAGMENT}
                ${TEXT_BLOCK_FRAGMENT}
            }
        }
    }
}
`;

export const METADATA_QUERY = gql`
    query MetadataQuery {
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
        CaseStudies {
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
            linkToSection
            sectionId
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
        icon {
            ${IMAGE_FRAGMENT}
        }
        tools {
            id
            title
            icon {
                ${IMAGE_FRAGMENT}
            }
        }
    }
}
`;

export const TESTIMONIALS_QUERY = gql`
query TestimonialsQuery {
    TestimonialListing {
        title
        icon {
            ${IMAGE_FRAGMENT}
        }
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

export const CASE_STUDIES_QUERY = gql`
query CaseStudiesQuery {
    CaseStudyListing {
        title
        icon {
            ${IMAGE_FRAGMENT}
            
        }
        caseStudies {
            id
            title
            slug
            featuredImage {
                ${IMAGE_FRAGMENT}
            }
            intro {
                description
            }
        }
    }
}
`;
