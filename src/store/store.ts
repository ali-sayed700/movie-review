import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, TMDB_API_BASE_URL } from "@utils/config";

interface TmovieShow {
  category: string | undefined;
  type?: string;
  page?: number;
  searchQuery?: string;
  showSimilarShows?: boolean;
  id?: number;
}
export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: TMDB_API_BASE_URL }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({
        category,
        type,
        searchQuery,
        page,
        showSimilarShows,
        id,
      }: TmovieShow) => {
        if (searchQuery) {
          return `search/${category}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`;
        }
        if (showSimilarShows) {
          return `${category}/${id}/similar?api_key=${API_KEY}`;
        }

        return `${category}/${type}?api_key=${API_KEY}&page=${page}`;
      },
    }),
    getMovie: builder.query({
      query: ({ category, id }: { category: string; id: number }) =>
        `${category}/${id}?append_to_response=videos,credits&api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;
