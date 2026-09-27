import type { IconName } from '@execution-os/design-system';
import type { INavigationSection } from '@execution-os/contracts';

export const planningNavigation: INavigationSection<IconName>[] = [
  {
    id: 'planning',
    label: 'Planning',
    items: [
      {
        id: 'overview',
        label: 'Overview',
        path: '/planning',
        icon: 'home',
      },
      {
        id: 'goals',
        label: 'Goals',
        path: '/planning/goals',
        icon: 'target',
      },
      {
        id: 'milestones',
        label: 'Milestones',
        path: '/planning/milestones',
        icon: 'flag',
      },
      {
        id: 'tasks',
        label: 'Tasks',
        path: '/planning/tasks',
        icon: 'list',
      },
      {
        id: 'working-units',
        label: 'Working Units',
        path: '/planning/working-units',
        icon: 'timer',
      },
    ],
  },
];
