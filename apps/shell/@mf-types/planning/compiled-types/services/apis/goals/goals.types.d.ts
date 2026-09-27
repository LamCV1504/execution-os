import type { Goal } from '@execution-os/contracts';
export interface IGetGoalResponse {
    data: Goal;
}
export interface IUpdateGoalRequest {
    id: string;
    title?: string;
    description?: string;
    targetDate?: string;
}
