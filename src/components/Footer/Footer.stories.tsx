import type { Meta, StoryObj } from '@storybook/react';

import Footer from './Footer';

import { menuItems } from '@/__mocks__/Header.mock';

const meta: Meta<typeof Footer> = {
    title: 'Components/Footer',
    component: Footer,
    argTypes: {
        copyrightText: {
            control: 'text'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
    args: {
        menuItems,
        copyrightText: 'copyright chai landau %CURRENT_YEAR%'
    }
};
