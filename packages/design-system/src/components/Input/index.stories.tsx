import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './index';

const meta = {
  component: Input,
  title: 'Input',
  args: {
    placeholder: 'Enter project name',
  },
  argTypes: {
    invalid: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readOnly: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Input>;

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

export const ReadOnly: Story = {
  args: {
    value: 'Execution OS',
    readOnly: true,
  },
};
