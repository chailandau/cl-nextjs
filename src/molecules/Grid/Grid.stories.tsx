import type { Meta, StoryObj } from '@storybook/react';

import Grid from './Grid';

import Text from '@/atoms/Text';

const textAtom = <Text>This text is in a grid container</Text>;

const meta: Meta<typeof Grid> = {
    title: 'Molecules/Grid',
    component: Grid,
    argTypes: {
        as: {
            table: { defaultValue: { summary: 'div' } }
        }
    },
    parameters: {
        controls: {
            include: ['as', 'className']
        }
    }
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Default: Story = {
    args: {
        children: textAtom
    }
};
