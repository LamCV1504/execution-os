import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from '../Input';
import { Field } from './index';

const meta = {
  component: Field,
  title: 'Field',
  argTypes: {
    label: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Field>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: 'Project name',
    description: 'Use a short name that clearly identifies the project.',
    children: <Input placeholder="Enter project name" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Project name',
    error: 'Project name is required.',
    children: <Input invalid placeholder="Enter project name" />,
  },
};
