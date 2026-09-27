import type { Meta, StoryObj } from '@storybook/react-vite';

import { Badge } from './index';

const meta = {
  component: Badge,
  title: 'Feedback/Badge',
  args: {
    children: 'In progress',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    children: 'To do',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'In progress',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Completed',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'At risk',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Urgent',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    variant: 'success',
    children: 'Completed',
  },
};
