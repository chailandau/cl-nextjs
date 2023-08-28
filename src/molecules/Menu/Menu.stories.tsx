import type { Meta, StoryObj } from '@storybook/react';

import Menu from './Menu';

import { menuItems } from '@/__mocks__/Header.mock';

const meta: Meta<typeof Menu> = {
    title: 'Molecules/Menu',
    component: Menu
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
    args: {
        menuItems,
        icon: false
    }
};
