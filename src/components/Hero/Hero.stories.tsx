import type { Meta, StoryObj } from '@storybook/react';

import Hero from './Hero';

const coloredSubhead = [
    {
        children: [
            {
                text: 'I’m a '
            },
            {
                text: 'designer-turned-engineer',
                bold: true
            },
            {
                text: ' obsessed with '
            },
            {
                text: 'accessibility',
                bold: true
            },
            {
                text: ' and '
            },
            {
                text: 'user experience.',
                bold: true
            }
        ]
    }
];

const meta: Meta<typeof Hero> = {
    title: 'Components/Hero',
    component: Hero,
    argTypes: {
        coloredSubhead: {
            control: 'object'
        },
        cta: {
            control: 'object'
        },
        icon: {
            control: 'object'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
    args: {
        heading: 'Hi, I’m  Chai.',
        icon: {
            alt: 'Waving hand emoji',
            url: 'http://localhost:3000/icons/wave.png'
        },
        coloredSubhead,
        cta: {
            label: 'learn more',
            linkType: 'internal',
            internalLink: {
                slug: 'about'
            }
        }
    }
};
