import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';
import { cloneElement } from 'react';

import Meta, { Default } from './Image.stories';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const Image = composeStory(Default, Meta);

describe('Image', () => {
    it('defaults correctly', () => {
        render(<Image hasBorder={undefined} />);
        expect(screen.getByRole('img').parentElement).toHaveClass('border');
    });
    it('applies class if it exists', () => {
        render(cloneElement(<Image />, { className: 'image' }));
        expect(screen.getByRole('img').parentElement).toHaveClass('image');
    });
    testAxeAndSnapshot({ component: <Image /> });
});
