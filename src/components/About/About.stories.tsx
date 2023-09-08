import type { Meta, StoryObj } from '@storybook/react';

import { AboutContent } from './About';

import { mockAboutData } from '@/__mocks__/graphqlQueries.mock';

const meta: Meta<typeof AboutContent> = {
    title: 'Components/About',
    component: AboutContent,
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof AboutContent>;

export const Default: Story = {
    args: {
        data: mockAboutData
    }
};
