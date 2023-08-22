import { composeStory } from '@storybook/react';

import { textTags } from './Text';
import Meta, { Default } from './Text.stories';

import { testAxeAndSnapshot, testTags } from '@/utils/testHelpers';

const Text = composeStory(Default, Meta);

const textComponent = {
    component: <Text />
};

describe('Text', () => {
    testTags({ ...textComponent, tags: textTags });
    testAxeAndSnapshot(textComponent);
});
