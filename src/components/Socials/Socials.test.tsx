import { composeStory } from '@storybook/react';

import Meta, { Default } from './Socials.stories';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const Socials = composeStory(Default, Meta);

describe('Socials', () => {
    testAxeAndSnapshot({
        component: <Socials />
    });
});
