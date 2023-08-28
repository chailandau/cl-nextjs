import HalfMoon from '@storybookAssets/images/half_moon.png';

import type { Meta, StoryObj } from '@storybook/react';

import Image from './Image';

const meta: Meta<typeof Image> = {
    title: 'Atoms/Image',
    component: Image,
    argTypes: {
        hasBorder: {
            table: { defaultValue: { summary: false } }
        },
        priority: {
            table: { defaultValue: { summary: false } }
        }
    },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', maxWidth: '590px' }}>
                <Story />
            </div>
        )
    ]
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
    args: {
        src: HalfMoon,
        alt: 'Half Moon Tavern Logo on blue background',
        priority: true,
        hasBorder: true
    }
};
