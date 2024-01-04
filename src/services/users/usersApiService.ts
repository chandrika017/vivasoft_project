import { apiSlice } from "../api/apiSlice";

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<any, void>({
      query: () => "/posts/test",
      providesTags: ["users"],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
