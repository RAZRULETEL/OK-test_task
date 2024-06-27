import type { Meta, StoryObj } from '@storybook/react';
import Button from './../components/Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;


export const Primary: Story = {
  args: {
    isPrimary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 56,
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 28,
    label: 'Button',
  },
};

// @ts-ignore
export const WithCounter: Story = {
  args: {
    size: 56,
    label: 'Button',
  },
  render: (args) =>
      (
          <Button {...args}>
            <Button.Counter quantity={"123"}/>
          </Button>
      ),
};
