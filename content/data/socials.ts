import { SocialItem } from '@/types/content';

const socialsData: SocialItem[] = [
    {
        icon: {
            alt: 'Email icon',
            url: '/images/icons/email.png',
            width: 72,
            height: 75
        },
        label: 'email',
        socialLink: 'mailto:chai.landau@gmail.com'
    },
    {
        icon: {
            alt: 'github icon',
            url: '/images/icons/github.png',
            width: 72,
            height: 72
        },
        label: 'github',
        socialLink: 'https://github.com/chailandau/'
    },
    {
        icon: {
            alt: 'linkedin icon',
            url: '/images/icons/linkedin.png',
            width: 72,
            height: 72
        },
        label: 'linkedin',
        socialLink: 'https://www.linkedin.com/in/chai-landau/'
    },
    {
        icon: {
            alt: 'instagram icon',
            url: '/images/icons/instagram.png',
            width: 72,
            height: 72
        },
        label: 'instagram',
        socialLink: 'https://www.instagram.com/chaitea_crafts'
    }
];

export default socialsData;
