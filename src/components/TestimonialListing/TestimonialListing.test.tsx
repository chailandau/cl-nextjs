import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default } from './TestimonialListing.stories';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const TestimonialListing = composeStory(Default, Meta);

describe('Testimonial Listing', () => {
    it('defaults correctly', () => {
        render(<TestimonialListing data={undefined} />);
        expect(screen.queryByRole('section')).not.toBeInTheDocument();
    });
    testAxeAndSnapshot({
        component: <TestimonialListing />
    });
});
