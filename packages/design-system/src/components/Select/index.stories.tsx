import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './index';

const options = [
  {
    value: 'todo',
    label: 'To do',
  },
  {
    value: 'in-progress',
    label: 'In progress',
  },
  {
    value: 'completed',
    label: 'Completed',
  },
];

const meta = {
  component: Select,
  title: 'Form/Select',
  args: {
    options,
    placeholder: 'Select status',
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    invalid: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    invalid: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'in-progress',
  },
};
