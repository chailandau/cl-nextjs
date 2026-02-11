import { AboutData } from '@/types/content';

const aboutData: AboutData = {
    image: {
        alt: 'Chai Landau smiling, surrounded by greenery',
        url: '/images/about/about-pic.jpg',
        width: 1000,
        height: 1191
    },
    title: 'Hello! I\u2019m Chai.',
    coloredSubhead: [
        {
            children: [
                { text: 'I\u2019m a ' },
                { text: 'tinkerer', bold: true },
                { text: ' at heart with a passion for creating ' },
                { text: 'functional', bold: true },
                { text: ' and ' },
                { text: 'delightful', bold: true },
                { text: ' user experiences.' }
            ]
        }
    ],
    text: [
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
                    text: 'When I\u2019m not customizing my mechanical keyboard (Keychron K1 Pro, brown switch, RGB backlighting), chances are I am messing around on my Linux server, daydreaming about my next sewing project, or enjoying quality time with my partner and pets.'
                }
            ]
        }
    ],
    pets: {
        harvey: {
            alt: 'Harvey - orange cat with yellow eyes',
            url: '/images/about/harvey.png',
            width: 144,
            height: 149
        },
        athena: {
            alt: 'Athena - brown tabby cat',
            url: '/images/about/athena.png',
            width: 120,
            height: 120
        },
        warren: {
            alt: 'Warren - greyhound with tongue sticking out of side of mouth',
            url: '/images/about/warren.png',
            width: 270,
            height: 181
        }
    }
};

export default aboutData;
