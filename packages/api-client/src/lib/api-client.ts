import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'executionOsApi',
  baseQuery,
  endpoints: () => ({}),
});
