import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default } from './About.stories';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const About = composeStory(Default, Meta);

describe('About', () => {
    it('defaults correctly', () => {
        render(<About data={undefined} />);
        expect(screen.queryByRole('section')).not.toBeInTheDocument();
    });
    testAxeAndSnapshot({
        component: <About />
    });
});
