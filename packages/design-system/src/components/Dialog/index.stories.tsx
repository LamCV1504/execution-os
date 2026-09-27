import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, userEvent, within } from 'storybook/test';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from './index';

const meta = {
  component: Dialog,
  title: 'Overlay/Dialog',
} satisfies Meta<typeof Dialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>

      <DialogContent>
        <DialogTitle>Create project</DialogTitle>

        <DialogDescription>
          Create a new project and start planning your work.
        </DialogDescription>

        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '12px',
            marginTop: '24px',
          }}
        >
          <DialogClose>Cancel</DialogClose>

          <DialogClose className="primary-action">Create project</DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  ),
};

export const Interaction: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger>Open dialog</DialogTrigger>

      <DialogContent>
        <DialogTitle>Project settings</DialogTitle>

        <DialogDescription>Configure your project settings.</DialogDescription>

        <DialogClose>Close</DialogClose>
      </DialogContent>
    </Dialog>
  ),

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(
      canvas.getByRole('button', {
        name: 'Open dialog',
      }),
    );

    await expect(canvas.getByRole('dialog')).toBeVisible();

    await userEvent.click(
      canvas.getByRole('button', {
        name: 'Close',
      }),
    );

    await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
  },
};
