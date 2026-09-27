import { createRouter } from '@tanstack/react-router';

import { moduleContentRoute, moduleRoute } from './module-route';
import { rootRoute } from './root-route';

const routeTree = rootRoute.addChildren([
  moduleRoute.addChildren([moduleContentRoute]),
]);

export const router = createRouter({
  routeTree,
});
