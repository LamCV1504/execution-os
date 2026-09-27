import { worker } from './browser';

let started = false;

export async function startPlanningMocks() {
  if (started) {
    return;
  }

  await worker.start({
    onUnhandledRequest: 'bypass',
  });

  started = true;
}
