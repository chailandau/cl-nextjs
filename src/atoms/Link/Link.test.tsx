import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default } from './Link.stories';

import {
    testAxeAndSnapshot,
    testKeyDown,
    testPropOptions,
    testRenderText
} from '@/utils/testHelpers';

const Link = composeStory(Default, Meta);
const linkComponent = {
    component: <Link />
};

describe('Link', () => {
    it('defaults correctly', () => {
        render(<Link underline={undefined} href={''} />);
        expect(screen.getByRole('link')).toHaveClass('underline');
        expect(screen.getByRole('link')).toHaveAttribute('href', '');
    });
    testPropOptions({
        ...linkComponent,
        propName: 'className',
        propOptions: ['test'],
        htmlTag: 'a'
    });
    testRenderText({
        ...linkComponent,
        text: (Link.args?.children as string) + '>',
        role: 'link'
    });
    testKeyDown({ ...linkComponent, role: 'link' });
    testAxeAndSnapshot(linkComponent);
});
