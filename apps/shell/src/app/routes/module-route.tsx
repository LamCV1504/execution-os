import { createRoute } from '@tanstack/react-router';

import { rootRoute } from './root-route';
import { ModuleHost } from '../../components/ModuleHost';

export const moduleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '$module',
});

export const moduleContentRoute = createRoute({
  getParentRoute: () => moduleRoute,
  path: '$',
  component: ModuleHost,
});
