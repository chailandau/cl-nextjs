import type { Meta, StoryObj } from '@storybook/react';

import { AboutContent as About } from './About';

import { mockAboutData } from '@/__mocks__/graphqlQueries.mock';

const meta: Meta<typeof About> = {
    title: 'Components/About',
    component: About,
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof About>;

export const Default: Story = {
    args: {
        data: mockAboutData
    }
};
