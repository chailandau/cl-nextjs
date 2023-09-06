import type { Meta, StoryObj } from '@storybook/react';

import Text, { textSizes, textTags } from './Text';

const meta: Meta<typeof Text> = {
    title: 'Atoms/Text',
    component: Text,
    argTypes: {
        as: {
            options: textTags,
            table: { defaultValue: { summary: 'p' } }
        },
        size: {
            options: textSizes,
            table: { defaultValue: { summary: 'md' } },
            control: { type: 'select' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        as: 'p',
        size: 'md',
        children: 'This is default text (medium).'
    }
};

export const ExtraSmall: Story = {
    args: {
        as: 'p',
        size: 'xs',
        children: 'This is extra small text.'
    }
};
export const Small: Story = {
    args: {
        as: 'p',
        size: 'sm',
        children: 'This is small text.'
    }
};

export const Large: Story = {
    args: {
        as: 'p',
        size: 'lg',
        children: 'This is large text.'
    }
};

export const ExtraLarge: Story = {
    args: {
        as: 'p',
        size: 'xl',
        children: 'This is extra large text.'
    }
};
