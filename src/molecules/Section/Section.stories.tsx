import type { Meta, StoryObj } from '@storybook/react';

import Section from './Section';

import Text from '@/atoms/Text/Text';

const textAtom = <Text>This text is in a section</Text>;

export const icon = {
    alt: 'Waving hand emoji',
    url: 'https://cl-payload.cr.chailandau.com/icons/wave.png'
};
const meta: Meta<typeof Section> = {
    title: 'Molecules/Section',
    component: Section,
    argTypes: {
        as: {
            table: { defaultValue: { summary: 'section' } }
        },
        heading: {
            control: 'string'
        },
        icon: {
            control: 'object'
        }
    },
    parameters: {
        controls: {
            include: ['as', 'className', 'heading', 'icon']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Section>;

export const Default: Story = {
    args: {
        children: textAtom,
        className: 'section',
        heading: 'Section Heading',
        icon
    }
};
