import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";

const dogApiHeaders = {
  "x-api-key": DOGS_API_KEY,
};

const baseUrl = "https://api.thedogapi.com/v1";

const createRequest = (url: string) => ({ url, headers: dogApiHeaders });

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: "dogsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),

  endpoints: (builder) => ({
    fetchBreeds: builder.query<Breed[], number | void>({
      query: (limit = 10) => createRequest(`/breeds?limit=${limit}`),
    }),
  }),
});

export const { useFetchBreedsQuery } = apiSlice;
