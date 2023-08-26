import type { Nav_MenuItems } from '@/api/graphqlTypes';

export const menuItems = [
    {
        page: {
            id: '64d7ea036029eebef3fd64d0',
            title: 'Home',
            slug: ''
        },
        overridePageName: true,
        customLabel: 'Work'
    },
    {
        page: {
            id: '64e6865ac2670a6ecec72df7',
            title: 'About',
            slug: 'about'
        },
        overridePageName: null,
        customLabel: null
    },
    {
        page: {
            id: '64e6865ec2670a6ecec72dff',
            title: 'Contact',
            slug: 'contact'
        },
        overridePageName: null,
        customLabel: null
    }
] as Nav_MenuItems[];

export const menuItemsNullPage = [
    {
        page: {},
        overridePageName: true,
        customLabel: 'Work'
    }
] as Nav_MenuItems[];
