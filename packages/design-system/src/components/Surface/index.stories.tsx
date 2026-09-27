import type { Meta, StoryObj } from '@storybook/react-vite';

import { Surface } from './index';

const meta = {
  component: Surface,
  title: 'Surface',
  args: {
    children: 'Surface content',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['solid', 'glass', 'frost'],
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    variant: 'glass',
    children: (
      <div>
        <strong>Project Overview</strong>
        <p>Track milestones, tasks, and working units from one place.</p>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '320px',
          padding: '48px',
          background:
            'radial-gradient(circle at 20% 20%, #60a5fa 0, transparent 35%), radial-gradient(circle at 80% 30%, #a78bfa 0, transparent 35%), linear-gradient(135deg, #0f172a, #312e81)',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Solid: Story = {
  args: {
    variant: 'solid',
  },
};

export const Glass: Story = {
  args: {
    variant: 'glass',
  },
};

export const Frost: Story = {
  args: {
    variant: 'frost',
  },
};
