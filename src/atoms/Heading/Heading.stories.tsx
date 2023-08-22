import type { Meta, StoryObj } from '@storybook/react';

import Heading, { headingColors } from './Heading';

const meta: Meta<typeof Heading> = {
    title: 'Atoms/Heading',
    component: Heading,
    argTypes: {
        size: {
            control: 'select',
            table: { defaultValue: { summary: 'md' } }
        },
        as: {
            table: { defaultValue: { summary: 'h2' } }
        },
        color: {
            control: 'select',
            options: headingColors,
            table: { defaultValue: { summary: 'green' } }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Default: Story = {
    args: {
        as: 'h2',
        size: 'lg',
        children: 'Default heading (Large)',
        color: 'primary'
    }
};

export const Small: Story = {
    args: {
        as: 'h2',
        size: 'sm',
        children: 'Small heading',
        color: 'black'
    }
};

export const Medium: Story = {
    args: {
        as: 'h2',
        size: 'md',
        children: 'Medium heading',
        color: 'primary'
    }
};

export const ExtraLarge: Story = {
    args: {
        as: 'h2',
        size: 'xl',
        children: 'Extra large heading',
        color: 'primary'
    }
};
