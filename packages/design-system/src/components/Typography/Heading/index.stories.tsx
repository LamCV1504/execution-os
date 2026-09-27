import type { Meta, StoryObj } from '@storybook/react-vite';

import { Heading } from './index';

const meta = {
  component: Heading,
  title: 'Typography/Heading',
  args: {
    children: 'Project overview',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const PageTitle: Story = {
  args: {
    as: 'h1',
    size: 'xl',
    children: 'Execution OS',
  },
};
