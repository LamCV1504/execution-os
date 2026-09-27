import type { Meta, StoryObj } from '@storybook/react-vite';

import { Alert } from './index';

const meta = {
  component: Alert,
  title: 'Feedback/Alert',
  args: {
    title: 'Project updated',
    children: 'The project has been updated successfully.',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['info', 'success', 'warning', 'danger'],
    },
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Heads up',
    children: 'This project has unsaved changes.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Project created',
    children: 'Your project is ready to start planning.',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Approaching deadline',
    children: 'Several tasks are due within the next 24 hours.',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Unable to save',
    children: 'Please check your connection and try again.',
  },
};
