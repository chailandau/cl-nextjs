import { gql } from 'graphql-request';

import { MENU_ITEMS_FRAGMENT } from './graphqlFragments';

export const PAGES_QUERY = gql`
    query PagesQuery {
        Pages {
            docs {
                id
                slug
                title
            }
        }
    }
`;

export const NAV_QUERY = gql`
    query NavQuery  {
            Nav {
                menuItems {
                    ${MENU_ITEMS_FRAGMENT}
                    submenuItems {
                        ${MENU_ITEMS_FRAGMENT}
                    }
                }
                footerCopyrightText
        }
    }
`;
