import type { Meta, StoryObj } from '@storybook/react';

import Hero from './Hero';

const meta: Meta<typeof Hero> = {
    title: 'Components/Hero',
    component: Hero,
    argTypes: {
        icon: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Default: Story = {
    args: {}
};
