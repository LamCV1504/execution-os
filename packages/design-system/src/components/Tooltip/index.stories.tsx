import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './index';

const meta = {
  component: Tooltip,
  title: 'Overlay/Tooltip',
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>

        <TooltipContent>This is additional information.</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const LongContent: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Working unit</TooltipTrigger>

        <TooltipContent>
          A working unit is a small executable chunk of work intended for
          focused execution.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
