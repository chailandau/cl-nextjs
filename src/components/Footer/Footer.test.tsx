import { composeStory } from '@storybook/react';

import Meta, { Default } from './Footer.stories';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const Footer = composeStory(Default, Meta);

describe('Footer', () => {
    testAxeAndSnapshot({
        component: <Footer />
    });
});
