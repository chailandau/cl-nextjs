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
    })
};
