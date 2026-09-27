import { createRouter } from '@tanstack/react-router';

import { rootRoute } from './root-route';
import { goalsRoute } from '../features/goals/goals.route';
import { milestonesRoute } from '../features/milestones/milestones.route';
import { overviewRoute } from '../features/overview/overview.route';
import { tasksRoute } from '../features/tasks/tasks.route';
import { workingUnitsRoute } from '../features/working-units/working-units.route';

const routeTree = rootRoute.addChildren([
  overviewRoute,
  goalsRoute,
  milestonesRoute,
  tasksRoute,
  workingUnitsRoute,
]);

export const router = createRouter({
  routeTree,
});
