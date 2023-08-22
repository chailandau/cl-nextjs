import { composeStory } from '@storybook/react';

import Meta, { Default } from './Link.stories';

import {
    testAxeAndSnapshot,
    testKeyDown,
    testRenderText
} from '@/utils/testHelpers';

const Link = composeStory(Default, Meta);
const linkComponent = {
    component: <Link />
};

describe('Link', () => {
    testRenderText({
        ...linkComponent,
        text: Link.args?.children as string,
        role: 'link'
    });
    testKeyDown({ ...linkComponent, role: 'link' });
    testAxeAndSnapshot(linkComponent);
});
