import type { Meta, StoryObj } from '@storybook/react';

import { ToolboxListingContent as ToolboxListing } from './ToolboxListing';

import { mockToolboxData } from '@/__mocks__/graphqlQueries.mock';

const meta: Meta<typeof ToolboxListing> = {
    title: 'Components/Toolbox Listing',
    component: ToolboxListing,
    decorators: [
        (Story) => (
            <div className='section'>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof ToolboxListing>;

export const Default: Story = {
    args: {
        data: mockToolboxData
    }
};
