import { composeStory } from '@storybook/react';
import { render } from '@testing-library/react';

import { backgroundColors, fontFamily, textSizes, textTags } from './Text';
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
    testPropOptions({
        ...textComponent,
        propName: 'font',
        propOptions: fontFamily,
        htmlTag: 'p'
    });
    it('applies backgroundColor correctly', () => {
        backgroundColors.forEach((backgroundColor) => {
            const { container } = render(
                <Text backgroundColor={backgroundColor} />
            );
            expect(container.querySelector('p')).toHaveClass(
                `bg-${backgroundColor}`
            );
        });
    });
    testTags({ ...textComponent, tags: textTags });
    testAxeAndSnapshot(textComponent);
});
