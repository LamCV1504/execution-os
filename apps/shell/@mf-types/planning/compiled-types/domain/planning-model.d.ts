import type { Goal, Milestone, Task, WorkingUnit } from '@execution-os/contracts';
export interface PlanningTask extends Task {
    workingUnits: WorkingUnit[];
}
export interface PlanningMilestone extends Milestone {
    tasks: PlanningTask[];
}
export interface PlanningGoal extends Goal {
    milestones: PlanningMilestone[];
}
