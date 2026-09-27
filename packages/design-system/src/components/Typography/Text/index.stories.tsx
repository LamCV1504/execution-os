import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from './index';

const meta = {
  component: Text,
  title: 'Typography/Text',
  args: {
    children: 'Project description',
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    tone: {
      control: 'select',
      options: ['primary', 'secondary', 'muted', 'danger'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Secondary: Story = {
  args: {
    tone: 'secondary',
  },
};

export const Muted: Story = {
  args: {
    tone: 'muted',
  },
};

export const Danger: Story = {
  args: {
    tone: 'danger',
  },
};
