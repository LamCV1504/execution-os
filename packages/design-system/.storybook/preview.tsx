import '../src/styles/index.scss';

import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => (
      <div data-theme={context.globals.theme ?? 'light'}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
