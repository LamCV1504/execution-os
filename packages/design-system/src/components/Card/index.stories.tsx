import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from '../Button';
import { Heading } from '../Typography/Heading';
import { Text } from '../Typography/Text';
import { Card } from './index';

const meta = {
  component: Card,
  title: 'Card',
  args: {
    surface: 'solid',
  },
  argTypes: {
    surface: {
      control: 'inline-radio',
      options: ['solid', 'glass', 'frost'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: (args) => (
    <Card {...args}>
      <Heading as="h3" size="md">
        Project Phoenix
      </Heading>

      <Text tone="secondary" size="sm">
        Modernize the customer onboarding experience.
      </Text>

      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginTop: '24px',
        }}
      >
        <Button size="sm">Open project</Button>

        <Button size="sm" variant="secondary">
          View details
        </Button>
      </div>
    </Card>
  ),
};

export const Solid: Story = {
  args: {
    surface: 'solid',
  },
};

export const Glass: Story = {
  args: {
    surface: 'glass',
  },
};

export const Frost: Story = {
  args: {
    surface: 'frost',
  },
};
