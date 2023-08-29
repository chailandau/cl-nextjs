import { gql } from 'graphql-request';

import { HERO_FRAGMENT, INTERNAL_LINK_FRAGMENT } from './graphqlFragments';

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
