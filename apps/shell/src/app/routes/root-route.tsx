import { createRootRoute, Outlet } from '@tanstack/react-router';

import { AppShell } from '../../components/Shell';
import { navigationSections } from '../navigation';

export const rootRoute = createRootRoute({
  component: () => (
    <AppShell title="Execution OS" navigation={navigationSections}>
      <Outlet />
    </AppShell>
  ),
});
