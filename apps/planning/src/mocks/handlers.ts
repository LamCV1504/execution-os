import { http, HttpResponse } from 'msw';

import { planningGoal } from '../data/planning-data';

export const handlers = [
  http.get('/api/goals/:goalId', ({ params }) => {
    if (params.goalId !== planningGoal.id) {
      return HttpResponse.json(
        {
          message: 'Goal not found',
        },
        {
          status: 404,
        },
      );
    }

    return HttpResponse.json({
      data: planningGoal,
    });
  }),
];
