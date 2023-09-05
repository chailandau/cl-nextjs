import { composeStory } from '@storybook/react';

import Meta, { Default } from './Grid.stories';

import { testAxeAndSnapshot, testPropOptions } from '@/utils/testHelpers';

const Grid = composeStory(Default, Meta);
const gridComponent = {
    component: <Grid />
};

describe('Grid', () => {
    testPropOptions({
        ...gridComponent,
        propName: 'className',
        propOptions: ['test'],
        htmlTag: 'div'
    });
    testAxeAndSnapshot(gridComponent);
});
