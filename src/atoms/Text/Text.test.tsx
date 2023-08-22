import { composeStory } from '@storybook/react';

import { textSizes, textTags } from './Text';
import Meta, { Default } from './Text.stories';

import {
    testAxeAndSnapshot,
    testPropOptions,
    testTags
} from '@/utils/testHelpers';

const Text = composeStory(Default, Meta);

const textComponent = {
    component: <Text />
};

describe('Text', () => {
    testPropOptions({
        ...textComponent,
        propName: 'size',
        propOptions: textSizes,
        htmlTag: 'p'
    });
    testTags({ ...textComponent, tags: textTags });
    testAxeAndSnapshot(textComponent);
});
