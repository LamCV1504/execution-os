import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from './index';

const meta = {
  component: Toast,
  title: 'Feedback/Toast',
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <button type="button" onClick={() => setOpen(true)}>
          Show notification
        </button>

        <Toast open={open} onOpenChange={setOpen}>
          <div>
            <ToastTitle>Project created</ToastTitle>

            <ToastDescription>
              Your project has been created successfully.
            </ToastDescription>
          </div>

          <ToastClose />
        </Toast>

        <ToastViewport />
      </ToastProvider>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <ToastProvider>
        <button type="button" onClick={() => setOpen(true)}>
          Delete task
        </button>

        <Toast open={open} onOpenChange={setOpen}>
          <div>
            <ToastTitle>Task deleted</ToastTitle>

            <ToastDescription>The task was moved to trash.</ToastDescription>

            <ToastPrimitiveActionExample />
          </div>

          <ToastClose />
        </Toast>

        <ToastViewport />
      </ToastProvider>
    );
  },
};

function ToastPrimitiveActionExample() {
  return (
    <div style={{ marginTop: '12px' }}>
      <button type="button">Undo</button>
    </div>
  );
}
