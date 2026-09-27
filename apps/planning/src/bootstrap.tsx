import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import { worker } from './mocks/browser';

async function bootstrap() {
  await worker.start({
    onUnhandledRequest: 'bypass',
  });

  const container = document.getElementById('root');

  if (!container) {
    throw new Error('#root element not found');
  }

  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

void bootstrap();
