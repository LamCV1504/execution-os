import {
  GoalStatus,
  MilestoneStatus,
  TaskPriority,
  TaskStatus,
  WorkingUnitStatus,
} from '@execution-os/contracts';

import type { PlanningGoal } from '../domain/planning-model';

export const planningGoal: PlanningGoal = {
  id: 'goal-phoenix',
  title: 'Project Phoenix',
  description:
    'Modernize the customer platform and prepare the next major release.',
  status: GoalStatus.ACTIVE,
  targetDate: '2026-10-30T00:00:00.000Z',
  createdAt: '2026-09-01T00:00:00.000Z',
  updatedAt: '2026-09-21T00:00:00.000Z',

  milestones: [
    {
      id: 'milestone-foundation',
      goalId: 'goal-phoenix',
      title: 'Platform foundation',
      description: 'Establish the technical foundation for the release.',
      status: MilestoneStatus.IN_PROGRESS,
      dueDate: '2026-09-30T00:00:00.000Z',
      createdAt: '2026-09-01T00:00:00.000Z',
      updatedAt: '2026-09-21T00:00:00.000Z',

      tasks: [
        {
          id: 'task-design-system',
          milestoneId: 'milestone-foundation',
          title: 'Build design system foundation',
          description:
            'Create reusable UI primitives and establish the visual system.',
          status: TaskStatus.COMPLETED,
          priority: TaskPriority.HIGH,
          estimatedSessions: 8,
          dueDate: '2026-09-20T00:00:00.000Z',
          createdAt: '2026-09-01T00:00:00.000Z',
          updatedAt: '2026-09-20T00:00:00.000Z',

          workingUnits: [
            {
              id: 'wu-design-tokens',
              taskId: 'task-design-system',
              title: 'Define design tokens',
              status: WorkingUnitStatus.COMPLETED,
              estimatedSessions: 1,
              completedAt: '2026-09-12T10:00:00.000Z',
              createdAt: '2026-09-10T09:00:00.000Z',
              updatedAt: '2026-09-12T10:00:00.000Z',
            },
            {
              id: 'wu-core-components',
              taskId: 'task-design-system',
              title: 'Build core components',
              status: WorkingUnitStatus.COMPLETED,
              estimatedSessions: 3,
              completedAt: '2026-09-18T15:00:00.000Z',
              createdAt: '2026-09-13T09:00:00.000Z',
              updatedAt: '2026-09-18T15:00:00.000Z',
            },
            {
              id: 'wu-storybook',
              taskId: 'task-design-system',
              title: 'Document components in Storybook',
              status: WorkingUnitStatus.COMPLETED,
              estimatedSessions: 2,
              completedAt: '2026-09-20T14:00:00.000Z',
              createdAt: '2026-09-19T09:00:00.000Z',
              updatedAt: '2026-09-20T14:00:00.000Z',
            },
          ],
        },

        {
          id: 'task-planning-shell',
          milestoneId: 'milestone-foundation',
          title: 'Build planning workspace',
          description:
            'Implement the planning hierarchy and project workspace.',
          status: TaskStatus.IN_PROGRESS,
          priority: TaskPriority.URGENT,
          estimatedSessions: 10,
          dueDate: '2026-09-28T00:00:00.000Z',
          createdAt: '2026-09-15T00:00:00.000Z',
          updatedAt: '2026-09-21T00:00:00.000Z',

          workingUnits: [
            {
              id: 'wu-planning-model',
              taskId: 'task-planning-shell',
              title: 'Define planning domain model',
              status: WorkingUnitStatus.COMPLETED,
              estimatedSessions: 1,
              completedAt: '2026-09-21T08:00:00.000Z',
              createdAt: '2026-09-21T07:00:00.000Z',
              updatedAt: '2026-09-21T08:00:00.000Z',
            },
            {
              id: 'wu-planning-ui',
              taskId: 'task-planning-shell',
              title: 'Build planning hierarchy UI',
              status: WorkingUnitStatus.IN_PROGRESS,
              estimatedSessions: 3,
              createdAt: '2026-09-21T08:00:00.000Z',
              updatedAt: '2026-09-21T08:00:00.000Z',
            },
            {
              id: 'wu-planning-actions',
              taskId: 'task-planning-shell',
              title: 'Add planning actions',
              status: WorkingUnitStatus.TODO,
              estimatedSessions: 2,
              createdAt: '2026-09-21T08:00:00.000Z',
              updatedAt: '2026-09-21T08:00:00.000Z',
            },
          ],
        },
      ],
    },

    {
      id: 'milestone-release',
      goalId: 'goal-phoenix',
      title: 'Release readiness',
      description: 'Prepare the product for release.',
      status: MilestoneStatus.TODO,
      dueDate: '2026-10-20T00:00:00.000Z',
      createdAt: '2026-09-01T00:00:00.000Z',
      updatedAt: '2026-09-21T00:00:00.000Z',

      tasks: [
        {
          id: 'task-release-checklist',
          milestoneId: 'milestone-release',
          title: 'Complete release checklist',
          description: 'Validate operational and product readiness.',
          status: TaskStatus.TODO,
          priority: TaskPriority.MEDIUM,
          estimatedSessions: 5,
          dueDate: '2026-10-15T00:00:00.000Z',
          createdAt: '2026-09-21T00:00:00.000Z',
          updatedAt: '2026-09-21T00:00:00.000Z',

          workingUnits: [
            {
              id: 'wu-release-review',
              taskId: 'task-release-checklist',
              title: 'Review release criteria',
              status: WorkingUnitStatus.TODO,
              estimatedSessions: 1,
              createdAt: '2026-09-21T00:00:00.000Z',
              updatedAt: '2026-09-21T00:00:00.000Z',
            },
          ],
        },
      ],
    },
  ],
};
