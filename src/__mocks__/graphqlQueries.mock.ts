export const mockDefaults = {
    Nav_MenuItems: () => ({
        overridePageName: () => false
    }),
    Icon: () => ({
        width: () => 64,
        height: () => 64
    }),
    Cta_linkType: () => 'internal',
    Page_Sections: () => ({
        __typename: 'HeroBlock',
        hero: {
            coloredSubhead: null,
            cta: {
                externalLink: 'Hello World',
                id: 'Hello World',
                internalLink: {
                    id: 'Hello World',
                    slug: 'Hello World'
                },
                label: 'Hello World',
                linkType: 'internal'
            },
            heading: 'Hello World',
            headingTag: 'Hello World',
            icon: {
                alt: 'Hello World',
                height: 64,
                id: 'Hello World',
                url: 'Hello World',
                width: 64
            },
            id: 'Hello World'
        },
        id: 'Hello World'
    }),
    Hero: () => ({
        doodles: () => true,
        homepage: () => false
    }),
    Image: () => ({
        height: () => 100,
        width: () => 100
    })
};
export const mockAboutData = {
    image: {
        id: '64f904eca8e93eb6776d3845',
        alt: 'Chai Landau smiling, surrounded by greenery',
        url: 'https://cl-payload.cr.chailandau.com/images/about-pic.jpg',
        width: 1000,
        height: 1191
    },
    title: 'Hello! I’m Chai.',
    coloredSubhead: [
        {
            children: [
                {
                    text: 'I’m a '
                },
                {
                    text: 'tinkerer',
                    bold: true
                },
                {
                    text: ' at heart with a passion for creating '
                },
                {
                    text: 'functional',
                    bold: true
                },
                {
                    text: ' and '
                },
                {
                    text: 'delightful',
                    bold: true
                },
                {
                    text: ' user experiences.'
                }
            ]
        }
    ],
    content: [
        {
            children: [
                {
                    text: 'I prioritize accessibility and functionality in everything I do, whether it is sewing, woodworking, or architecting a component library. '
                }
            ]
        },
        {
            children: [
                {
                    text: 'My design background ensures that my code choices are well-informed and part of a bigger picture.'
                }
            ]
        },
        {
            children: [
                {
                    text: 'When I’m not customizing my mechanical keyboard (Keychron K1 Pro, brown switch, RGB backlighting), chances are I am messing around on my Linux server, daydreaming about my next sewing project, or enjoying quality time with my partner and pets.'
                }
            ]
        }
    ],
    pets: {
        harvey: {
            id: '64f8b75b6a7b2426aaf817fa',
            alt: 'Harvey - orange cat with yellow eyes',
            url: 'https://cl-payload.cr.chailandau.com/images/harvey.png',
            width: 144,
            height: 149
        },
        athena: {
            id: '64f8b7656a7b2426aaf81802',
            alt: 'Athena - brown tabby cat',
            url: 'https://cl-payload.cr.chailandau.com/images/athena.png',
            width: 120,
            height: 120
        },
        warren: {
            id: '64f8b7776a7b2426aaf8180a',
            alt: 'Warren - greyhound with tongue sticking out of side of mouth',
            url: 'https://cl-payload.cr.chailandau.com/images/warren.png',
            width: 270,
            height: 181
        }
    }
};
