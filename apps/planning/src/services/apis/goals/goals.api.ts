import { baseApi } from '@execution-os/api-client';

import type { IGetGoalResponse, IUpdateGoalRequest } from './goals.types';

export const goalsApi = baseApi
  .enhanceEndpoints({
    addTagTypes: ['Goal'],
  })
  .injectEndpoints({
    endpoints: (builder) => ({
      getGoal: builder.query<IGetGoalResponse, string>({
        query: (goalId) => `/goals/${goalId}`,
        providesTags: (_result, _error, goalId) => [
          { type: 'Goal', id: goalId },
        ],
      }),

      updateGoal: builder.mutation<IGetGoalResponse, IUpdateGoalRequest>({
        query: ({ id, ...body }) => ({
          url: `/goals/${id}`,
          method: 'PATCH',
          body,
        }),
        invalidatesTags: (_result, _error, { id }) => [{ type: 'Goal', id }],
      }),
    }),
  });

export const { useGetGoalQuery, useUpdateGoalMutation } = goalsApi;
