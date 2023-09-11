import type { Meta, StoryObj } from '@storybook/react';

import Socials from './Socials';

import { mockSocials } from '@/__mocks__/graphqlQueries.mock';

const meta: Meta<typeof Socials> = {
    title: 'Components/Socials',
    component: Socials,
    parameters: {
        controls: {
            include: ['socials']
        }
    },
    decorators: [
        (Story) => (
            <div className='section'>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Socials>;

export const Default: Story = {
    args: {
        socials: mockSocials
    }
};
