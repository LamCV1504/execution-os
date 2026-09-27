export type ID = string;

export type ISODateString = string;

export enum GoalStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  ARCHIVED = 'ARCHIVED',
}

export enum MilestoneStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export enum TaskPriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

export enum WorkingUnitStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

export interface Goal {
  id: ID;
  title: string;
  description?: string;

  status: GoalStatus;

  targetDate?: ISODateString;

  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export interface Milestone {
  id: ID;
  goalId: ID;

  title: string;
  description?: string;

  status: MilestoneStatus;

  dueDate?: ISODateString;

  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export interface Task {
  id: ID;
  milestoneId: ID;

  title: string;
  description?: string;

  status: TaskStatus;
  priority: TaskPriority;

  /**
   * Estimated number of focus sessions needed for the task.
   * This is planning data, not progress.
   */
  estimatedSessions?: number;

  dueDate?: ISODateString;

  createdAt: ISODateString;
  updatedAt: ISODateString;
}

export interface WorkingUnit {
  id: ID;
  taskId: ID;

  title: string;
  description?: string;

  status: WorkingUnitStatus;

  /**
   * Optional calendar scheduling information.
   * Execution happens through FocusSession.
   */
  scheduledAt?: ISODateString;

  /**
   * Rough planning estimate.
   * Usually 1 for a Pomodoro-sized unit.
   */
  estimatedSessions: number;

  completedAt?: ISODateString;

  createdAt: ISODateString;
  updatedAt: ISODateString;
}
