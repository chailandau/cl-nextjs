import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default } from './ToolboxListing.stories';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const ToolboxListing = composeStory(Default, Meta);

describe('Toolbox Listing', () => {
    it('defaults correctly', () => {
        render(<ToolboxListing data={undefined} />);
        expect(screen.queryByRole('section')).not.toBeInTheDocument();
    });
    testAxeAndSnapshot({
        component: <ToolboxListing />
    });
});
