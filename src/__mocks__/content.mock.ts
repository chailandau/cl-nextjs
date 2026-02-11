export const mockDefaults = {
    Nav_MenuItems: () => ({
        overridePageName: () => false,
        linkToSection: () => false
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

export const mockToolboxData = {
    title: 'Toolbox',
    description:
        'If I listed every tool I used, this page would be super long. Here’s some I’ve used a bunch, though!',
    icon: {
        id: '64e68150c198627577bc4171',
        alt: 'Tools icon',
        url: 'https://cl-payload.cr.chailandau.com/icons/tools.png',
        width: 120,
        height: 120
    },
    tools: [
        {
            id: '64e68019c198627577bc3e99',
            title: 'React',
            icon: {
                id: '64e67fc9c198627577bc3e12',
                alt: 'React icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/react.png',
                width: 166,
                height: 150
            }
        },
        {
            id: '64e68030c198627577bc3ed1',
            title: 'Next.js',
            icon: {
                id: '64e67fb3c198627577bc3dfe',
                alt: 'NextJS icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/next.png',
                width: 150,
                height: 150
            }
        },
        {
            id: '64e68023c198627577bc3ebb',
            title: 'Redux',
            icon: {
                id: '64e67fd2c198627577bc3e1c',
                alt: 'Redux icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/redux.png',
                width: 152,
                height: 150
            }
        },
        {
            id: '64e6803fc198627577bc3efb',
            title: 'GraphQL',
            icon: {
                id: '64e67f87c198627577bc3dcd',
                alt: 'GraphQL Icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/graphql.png',
                width: 137,
                height: 150
            }
        },
        {
            id: '64e68048c198627577bc3f1b',
            title: 'TypeScript',
            icon: {
                id: '64e67ff3c198627577bc3e44',
                alt: 'Typescript icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/typescript.png',
                width: 150,
                height: 150
            }
        },
        {
            id: '64e68051c198627577bc3f3c',
            title: 'Git',
            icon: {
                id: '64e67f73c198627577bc3da2',
                alt: 'Git icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/git.png',
                width: 150,
                height: 150
            }
        },
        {
            id: '64e6805dc198627577bc3f52',
            title: 'Storybook',
            icon: {
                id: '64e67fe1c198627577bc3e30',
                alt: 'Storybook icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/storybook.png',
                width: 128,
                height: 150
            }
        },
        {
            id: '64e68069c198627577bc3f7c',
            title: 'Contentful',
            icon: {
                id: '64e67f4cc198627577bc3d5e',
                alt: 'Contentful icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/contentful.png',
                width: 137,
                height: 150
            }
        },
        {
            id: '64e68074c198627577bc3f9b',
            title: 'Jira',
            icon: {
                id: '64e67f99c198627577bc3dea',
                alt: 'Jira icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/jira.png',
                width: 147,
                height: 150
            }
        },
        {
            id: '64e6811bc198627577bc4130',
            title: 'SASS / SCSS',
            icon: {
                id: '64e67fd9c198627577bc3e26',
                alt: 'Sass icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/sass.png',
                width: 191,
                height: 150
            }
        },
        {
            id: '64e6807dc198627577bc3fbc',
            title: 'Figma',
            icon: {
                id: '64e67f5fc198627577bc3d7b',
                alt: 'Figma icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/figma.png',
                width: 111,
                height: 150
            }
        },
        {
            id: '64e68086c198627577bc3fd2',
            title: 'Styled Components',
            icon: {
                id: '64e67feac198627577bc3e3a',
                alt: 'Styled components icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/styled-components.png',
                width: 148,
                height: 150
            }
        },
        {
            id: '64e68090c198627577bc3ffc',
            title: 'Jest',
            icon: {
                id: '64e67f90c198627577bc3de0',
                alt: 'Jest icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/jest.png',
                width: 133,
                height: 150
            }
        },
        {
            id: '64e6809cc198627577bc4026',
            title: 'Github Actions',
            icon: {
                id: '64e67f7dc198627577bc3db5',
                alt: 'Github actions icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/github-actions.png',
                width: 150,
                height: 150
            }
        },
        {
            id: '64e680a9c198627577bc4050',
            title: 'Firebase',
            icon: {
                id: '64e67f6ac198627577bc3d8f',
                alt: 'Firebase icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/firebase.png',
                width: 117,
                height: 150
            }
        },
        {
            id: '64e680b3c198627577bc4070',
            title: 'Node.js',
            icon: {
                id: '64e67fc0c198627577bc3e08',
                alt: 'NodeJS Icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/nodejs.png',
                width: 137,
                height: 150
            }
        },
        {
            id: '64e680bfc198627577bc4086',
            title: 'MongoDB',
            icon: {
                id: '64e67fa6c198627577bc3df4',
                alt: 'MongoDB icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/mongodb.png',
                width: 150,
                height: 150
            }
        },
        {
            id: '64e680c8c198627577bc40a7',
            title: 'Docker',
            icon: {
                id: '64e67f55c198627577bc3d71',
                alt: 'Docker icon',
                url: 'https://cl-payload.cr.chailandau.com/icons/docker.png',
                width: 199,
                height: 150
            }
        }
    ]
};

export const mockTestimonialsData = {
    title: 'Word on the street',
    icon: {
        id: '64e68178c198627577bc41a3',
        alt: 'Speed bubble icon',
        url: 'https://cl-payload.cr.chailandau.com/icons/speech-bubble.png',
        width: 120,
        height: 122
    },
    testimonials: [
        {
            id: '64d7fe31a8e01e8a91ba08b8',
            author: 'Justin Wallace',
            jobTitle: 'Sr. Software Engineer',
            company: 'OctoML',
            linkedin: 'https://www.linkedin.com/in/thejustinwallace',
            excerpt:
                " Chai is an exceptional individual who stands above her peers in accessibility, development speed, and collaborative spirit. One of Chai's greatest strengths is her expertise in accessible web content. In an age where inclusivity is becoming increasingly important, Chai has shown a deep understanding of the principles and techniques required to create websites and applications that are accessible to all users. She understands how to create a user experience that is welcoming and inclusive, and her dedication to this \n important aspect of software development has not gone unnoticed.",
            testimonial: [
                {
                    children: [
                        {
                            text: "I have had the pleasure of working with Chai for almost a year at Webstacks, and I am just blown away by the amount of value she adds to our teams. Chai is an exceptional individual who stands above her peers in accessibility, development speed, and collaborative spirit.\n\nOne of Chais's greatest strengths is her expertise in accessible web content. In an age where inclusivity is becoming increasingly important, Chai has shown a deep understanding of the principles and techniques required to create websites and applications that are accessible to all users. She understands how to create a user experience that is welcoming and inclusive, and her dedication to this (in my opinion) important aspect of software development has not gone unnoticed.\n\nAnother strength of core strength is her speed of development. She has a remarkable ability to work quickly without sacrificing quality. She is able to identify the most efficient paths to a solution, while still maintaining a high standard of quality in her work. This is a rare talent in the engineering world, and Chai has demonstrated time and time again that she can deliver high-quality work on tight deadlines.\n\nLastly, Chai’s collaborative spirit is a true asset to any team. She is a great communicator who listens well, responds thoughtfully, and offers constructive feedback. She is always willing to lend a hand to her colleagues and takes a team-oriented approach to problem-solving. Her ability to build positive relationships with her colleagues and clients alike is a testament to their professionalism and dedication to her work."
                        }
                    ]
                }
            ],
            image: {
                id: '64d7fe30a8e01e8a91ba08b1',
                alt: 'Justin Wallace headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/justin_wallace.jpeg',
                width: 800,
                height: 800
            }
        },
        {
            id: '64d7fe18a8e01e8a91ba08a6',
            author: 'Joe DeSoto',
            jobTitle: 'Engineering Manager',
            company: 'Webstacks',
            linkedin: 'https://www.linkedin.com/in/joe-desoto',
            excerpt:
                "Chai is a highly motivated and hardworking Frontend Engineer with a strong work ethic and a positive attitude. She is always willing to go the extra mile, and is able to bounce back from setbacks quickly. She is also a team player who helps her fellow engineers succeed by providing valuable insights and guidance to everyone. I have seen Chai's work on large clients and will attest to the quality of her work and approach. She cares about the code she writes and enjoys shipping amazing features on websites.",
            testimonial: [
                {
                    children: [
                        {
                            text: "Chai is a highly motivated and hardworking Frontend Engineer with a strong work ethic and a positive attitude. She is always willing to go the extra mile, and is able to bounce back from setbacks quickly. Chai is a quick learner and is always eager to take on new challenges. She is also a team player who helps her fellow engineers succeed by providing valuable insights and guidance to everyone.\n\nI have seen Chai's work on large clients and will attest to the quality of her work and approach. She cares about the code she writes and enjoys shipping amazing features on websites.\n\nIn addition to her technical skills, Chai is also an excellent communicator. She is able to clearly and concisely explain complex technical concepts to both technical and non-technical audiences. Chai is also a great listener and has no problem adapting to changing procedures or policies.\n\nI have no doubt that Chai would be an incredible asset to any company. She is a talented software engineer with a strong work ethic and a positive attitude. I highly recommend her for a software engineering role and foresee her continued success based on her past achievements."
                        }
                    ]
                }
            ],
            image: {
                id: '64d7fe15a8e01e8a91ba089f',
                alt: 'Joe DeSoto headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/joe_desoto.jpeg',
                width: 450,
                height: 450
            }
        },
        {
            id: '64d7fb6db8e2f79181122532',
            author: 'Erica Snyder',
            jobTitle: 'Frontend Engineer',
            company: 'Webstacks',
            linkedin: 'https://www.linkedin.com/in/ericaleesnyder',
            excerpt:
                "Chai and I have worked very closely and she has proven to be a reliable, helpful, solution oriented teammate in all contexts. She is quick to offer insights and recommendations to teammates and clients alike, always with the intention of meeting client's needs and subsequently exceeding their expectations. Chai is a knowledgable resource on all things TypeScript, and is widely known within the office to be a true expert on accessibility. Her attention to detail has improved every code base we have worked on together.",
            testimonial: [
                {
                    children: [
                        {
                            text: "Chai and I have worked very closely on 5 different project teams, and she has proven to be a reliable, helpful, solution oriented teammate in all contexts. She is quick to offer insights and recommendations to teammates and clients alike, always with the intention of meeting client's needs and subsequently exceeding their expectations.\n\nChai has become a knowledgable resource on all things TypeScript, and is widely known within the office to be a true expert on accessibility. Her attention to detail has improved every code base we have worked on together, and she has acted as my unofficial mentor through our consistent collaboration.\n\nI highly recommend Chai as a communicative, forward thinking engineer, and I firmly believe she would be an asset to any team."
                        }
                    ]
                }
            ],
            image: {
                id: '64d7fd5ba8e01e8a91ba0814',
                alt: 'Erica Snyder headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/erica_snyder.jpeg',
                width: 800,
                height: 800
            }
        },
        {
            id: '64e61ef198abd76e452152ec',
            author: 'Katie Naum',
            jobTitle: 'Senior UX/UI Designer',
            company: 'Webstacks',
            linkedin: 'https://www.linkedin.com/in/katienaum',
            excerpt: '',
            testimonial: [
                {
                    children: [
                        {
                            text: "Efficient, precise, considerate, and talented are among the descriptors that come to mind when working with Chai. Beyond her technical prowess, she excels as a collaborator, proactively engaging with cross-functional teams to harmonize design, functionality, and user-centricity. It's evident that Chai is an invaluable addition to any team."
                        }
                    ]
                }
            ],
            image: {
                id: '64e61eee98abd76e452152e5',
                alt: 'Katie Naum headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/katie_naum.jpeg',
                width: 800,
                height: 800
            }
        },
        {
            id: '64e61eb598abd76e45215283',
            author: 'Mo Chen',
            jobTitle: 'UX/UI Designer',
            company: 'Webstacks',
            linkedin: 'https://www.linkedin.com/in/mochendesigns',
            excerpt: '',
            testimonial: [
                {
                    children: [
                        {
                            text: 'Chai was a joy to work with! She’s a great communicator who is always quick to respond. She’s able to offer valuable sight not just on the development front, but also from a design perspective. '
                        }
                    ]
                },
                {
                    children: [
                        {
                            text: 'As a designer, I really appreciated Chai’s holistic approach to problem solving. She went above and beyond to provide feedback and suggestions during the design process. This was crucial to the team to ensure we implemented best practices and made handoff from design to development a seamless process.'
                        }
                    ]
                }
            ],
            image: {
                id: '64e61eab98abd76e4521527c',
                alt: 'Mo Chen headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/mo_chen.jpeg',
                width: 285,
                height: 285
            }
        },
        {
            id: '64d7fd9da8e01e8a91ba0838',
            author: 'Sarah Rooney',
            jobTitle: 'Frontend Developer',
            company: 'Patagonia',
            linkedin: 'https://www.linkedin.com/in/sarahrachaelrooney',
            excerpt:
                "Chai's transition from design to frontend development shines in her work, whether it be seamless frontend experiences or accessible, organized, and considered code. I learned a lot from her; she had interests in frontend development tools that I wasn’t familiar with, and she was able to dive into a subject and share those knowledge and skills extremely well. Not only is she technically skilled, but she’s incredibly communicative, a team player, a teacher, and a wonderful colleague!",
            testimonial: [
                {
                    children: [
                        {
                            text: 'I loved working with Chai at Clique Studios! Her transition from design to frontend development shines in her work, whether it be seamless frontend experiences or accessible, organized, and considered code.\n\nWe got to collaborate a lot, and no matter what project we were on or what the challenge was, Chai was always up to the task. I learned a lot from her; she had interests in frontend development tools that I wasn’t familiar with, and she was able to dive into a subject and share those knowledge and skills extremely well. Not only is she technically skilled, but she’s incredibly communicative, a team player, a teacher, and a wonderful colleague!'
                        }
                    ]
                }
            ],
            image: {
                id: '64d7fd9ca8e01e8a91ba0831',
                alt: 'Sarah Rooney headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/sarah_rooney.jpeg',
                width: 225,
                height: 225
            }
        },
        {
            id: '64f73c5711aa6a77d5f105d8',
            author: 'Andrés J. Muñoz Rodriguez',
            jobTitle: 'CSM',
            company: 'Clique Studios',
            linkedin: 'https://www.linkedin.com/in/ajmrodriguez/',
            excerpt: '',
            testimonial: [
                {
                    children: [
                        {
                            text: "Working with Chai was a treat! She's my favorite kind of engineer - one who can take the most complex ideas and simplify them for those of us who need the extra help understanding. She always took the time to make sure I was grasping these concepts for myself but also that I was relaying accurate information to our clients.\n\nShe's a true master of her craft with an accessibility-first approach to everything she does. Any engineering team would be fortunate to have her!"
                        }
                    ]
                }
            ],
            image: {
                id: '64f73c3a11aa6a77d5f105d1',
                alt: 'Andrés J. Muñoz Rodriguez headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/andres_rodriguez.jpeg',
                width: 800,
                height: 800
            }
        },
        {
            id: '64d7fdd3a8e01e8a91ba0857',
            author: 'Joe Kowalczyk',
            jobTitle: 'Engineering Intern',
            company: 'Clique Studios',
            linkedin: 'https://www.linkedin.com/in/joekowalczyk1',
            excerpt:
                'Chai was a valuable resource and a helpful mentor for my internship at Clique Studios. Whether it was walking me through implementing animations into my sites or teaching me how to best use templating through handlebars.js, Chai was always able to make complex concepts seem approachable and took the time to help give me what I needed to succeed. ',
            testimonial: [
                {
                    children: [
                        {
                            text: 'Chai was a valuable resource and a helpful mentor for my internship at Clique Studios. Whether it was walking me through implementing animations into my sites or teaching me how to best use templating through handlebars.js, Chai was always able to make complex concepts seem approachable and took the time to help give me what I needed to succeed. Chai is a patient teacher and was always willing to hop on a call and help out. '
                        }
                    ]
                }
            ],
            image: {
                id: '64d7fdd1a8e01e8a91ba0850',
                alt: 'Joe Kowalczyk headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/joe_kowalczyk.jpeg',
                width: 800,
                height: 800
            }
        },
        {
            id: '64d7fdf9a8e01e8a91ba0885',
            author: 'Nina Guido',
            jobTitle: 'Graphic Designer',
            company: 'Katy Dwyer Design',
            linkedin: 'https://www.linkedin.com/in/ninaguido',
            excerpt:
                'Chai was always available if I needed help, very accommodating and answered any questions I had when working on projects. She also guided me when working with Wordpress websites as well as CSS/HTML. This exposure to using code and working on the backend of Wordpress sites, coupled with Chai’s patience and eagerness to share her professional knowledge, provided me with useful knowledge for my current job. It was a pleasure learning and working with Chai. ',
            testimonial: [
                {
                    children: [
                        {
                            text: 'I first met Chai in Summer of 2019 when I was a design intern at Katy Dwyer Design. From the beginning, she was always available if I needed help, very accommodating and answered any questions I had when working on projects. She also guided me when working with Wordpress websites as well as CSS/HTML. This exposure to using code and working on the backend of Wordpress sites, coupled with Chai’s patience and eagerness to share her professional knowledge, provided me with useful knowledge for my current job. It was a pleasure learning and working with Chai. '
                        }
                    ]
                }
            ],
            image: {
                id: '64d7fdf5a8e01e8a91ba087e',
                alt: 'Nina Guido',
                url: 'https://cl-payload.cr.chailandau.com/images/nina_guido.jpeg',
                width: 1920,
                height: 1920
            }
        },
        {
            id: '64d7fe4ba8e01e8a91ba08db',
            author: 'Kevin Sterling',
            jobTitle: 'Director: Web',
            company: 'Pixel Wilderness',
            linkedin: 'https://www.linkedin.com/in/ktsterling',
            excerpt:
                'Chai was a pleasure to work with! Her work was always high-caliber design and required very little feedback from start to finish.\n\nShe has great critical thinking skills and was very helpful in anticipating what might be required after initial solutions. Her work was thorough and she quickly understood the level of delivery we expected.',
            testimonial: [
                {
                    children: [
                        {
                            text: "Chai was a pleasure to work with! Her work was always high-caliber design and required very little feedback from start to finish.\n\nShe has great critical thinking skills and was very helpful in anticipating what might be required after initial solutions. Her work was thorough and she quickly understood the level of delivery we expected.\n\nI'm happy to see her in a full-time job but was sorry to lose her as a contractor!"
                        }
                    ]
                }
            ],
            image: {
                id: '64d7fe49a8e01e8a91ba08d4',
                alt: 'Kevin Sterling headshot',
                url: 'https://cl-payload.cr.chailandau.com/images/kevin_sterling.jpeg',
                width: 450,
                height: 450
            }
        }
    ]
};

export const mockSocials = [
    {
        icon: {
            id: '64fa286417391ca7677bac40',
            alt: 'Email icon',
            url: 'https://cl-payload.cr.chailandau.com/icons/email.png',
            width: 72,
            height: 75
        },
        label: 'email',
        socialLink: 'mailto:chai.landau@gmail.com'
    },
    {
        icon: {
            id: '64fa2e4e8f46b75a76e7d2e4',
            alt: 'github icon',
            url: 'https://cl-payload.cr.chailandau.com/icons/github.png',
            width: 72,
            height: 72
        },
        label: 'github',
        socialLink: 'https://github.com/chailandau/'
    },
    {
        icon: {
            id: '64fa2e708f46b75a76e7d2f6',
            alt: 'linkedin icon',
            url: 'https://cl-payload.cr.chailandau.com/icons/linkedin.png',
            width: 72,
            height: 72
        },
        label: 'linkedin',
        socialLink: 'https://www.linkedin.com/in/chai-landau/'
    },
    {
        icon: {
            id: '64fa2edf8f46b75a76e7d308',
            alt: 'instagram icon',
            url: 'https://cl-payload.cr.chailandau.com/icons/instagram.png',
            width: 72,
            height: 72
        },
        label: 'instagram',
        socialLink: 'https://www.instagram.com/chaitea_crafts'
    }
];
