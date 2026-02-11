import { NavData } from '@/types/content';

const navData: NavData = {
    menuItems: [
        {
            page: {
                id: '64d7ea036029eebef3fd64d0',
                title: 'Home',
                slug: ''
            },
            overridePageName: true,
            customLabel: 'Work',
            linkToSection: true,
            sectionId: 'work'
        },
        {
            page: {
                id: '64e6865ac2670a6ecec72df7',
                title: 'About',
                slug: 'about'
            },
            overridePageName: false,
            customLabel: null,
            linkToSection: true,
            sectionId: 'about'
        },
        {
            page: {
                id: '64e6865ec2670a6ecec72dff',
                title: 'Contact',
                slug: 'contact'
            },
            overridePageName: false,
            customLabel: null,
            linkToSection: true,
            sectionId: 'contact'
        }
    ],
    footerCopyrightText: 'Chai Landau'
};

export default navData;
