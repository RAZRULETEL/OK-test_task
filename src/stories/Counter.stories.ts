import type { Meta, StoryObj } from '@storybook/react';
import Counter from './../components/Counter';


const meta = {
    title: 'Example/Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: {type: 'range', min: 8, max: 24, step: 4}},
    },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isPrimary: true,
        quantity: '1',
        size: 16,
    },
};

export const Secondary: Story = {
    args: {
        isPrimary: false,
        quantity: '1',
        size: 16,
    },
};

export const Pulse: Story = {
    args: {
        isPrimary: true,
        pulse: true,
        size: 12,
    },
};