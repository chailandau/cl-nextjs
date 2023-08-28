import type { Meta, StoryObj } from '@storybook/react';

import Header from './Header';

import { menuItems } from '@/__mocks__/Header.mock';

const meta: Meta<typeof Header> = {
    title: 'Components/Header',
    component: Header,
    argTypes: {
        icon: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        menuItems
    }
};
