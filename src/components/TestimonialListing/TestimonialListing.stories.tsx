import type { Meta, StoryObj } from '@storybook/react';

import { TestimonialListingContent as TestimonialListing } from './TestimonialListing';

import { mockTestimonialsData } from '@/__mocks__/graphqlQueries.mock';

const meta: Meta<typeof TestimonialListing> = {
    title: 'Components/Testimonial Listing',
    component: TestimonialListing,
    decorators: [
        (Story) => (
            <div className='section'>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof TestimonialListing>;

export const Default: Story = {
    args: {
        data: mockTestimonialsData
    }
};
