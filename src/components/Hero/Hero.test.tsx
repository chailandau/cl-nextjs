import { composeStory } from '@storybook/react';
import { render, screen } from '@testing-library/react';

import Meta, { Default } from './Hero.stories';

import { testAxeAndSnapshot } from '@/utils/testHelpers';

const Hero = composeStory(Default, Meta);

const HeroComponent = {
    component: <Hero />
};

describe('Hero', () => {
    it('defaults correctly', () => {
        render(
            <Hero
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                icon={{
                    url: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                }}
                cta={{
                    linkType: 'external'
                }}
            />
        );
        expect(screen.getByRole('img')).toHaveAttribute('alt', '');
        expect(screen.getByRole('link')).toHaveAttribute('href', '');
    });
    testAxeAndSnapshot(HeroComponent);
});
