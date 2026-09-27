import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from './index';

const meta = {
  component: Popover,
  title: 'Overlay/Popover',
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Task filters</PopoverTrigger>

      <PopoverContent>
        <div
          style={{
            display: 'grid',
            gap: '12px',
            minWidth: '240px',
          }}
        >
          <strong>Task filters</strong>

          <label>
            Status
            <select
              style={{
                display: 'block',
                width: '100%',
                marginTop: '4px',
              }}
            >
              <option>All</option>
              <option>To do</option>
              <option>In progress</option>
              <option>Completed</option>
            </select>
          </label>

          <PopoverClose>Apply</PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger>Open filters</PopoverTrigger>

      <PopoverContent>
        <strong>Filters</strong>

        <p>Filter tasks by status and priority.</p>

        <PopoverClose>Close</PopoverClose>
      </PopoverContent>
    </Popover>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', {
        name: 'Open filters',
      }),
    );

    await expect(canvas.getByText('Filters')).toBeVisible();

    await userEvent.click(
      canvas.getByRole('button', {
        name: 'Close',
      }),
    );

    await expect(canvas.queryByText('Filters')).not.toBeInTheDocument();
  },
};
