import { PlanningGoal } from '../domain/planning-model';

export interface PlanningRepository {
  getGoal(): Promise<PlanningGoal>;
}
