import { api } from "./axiosInstance";

export const searchMovieApi = (query: string) => api.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)