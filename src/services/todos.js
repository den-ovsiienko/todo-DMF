// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => {console.log('here'); return `todos`},
    }),
    addTodoDummy: builder.mutation({
      query: (body) => ({
        url: 'todos',
        method: 'POST',
        body,
      }),
    }),
  }),
})

export const { useGetAllTodosQuery, useAddTodoDummyMutation } = todosApi