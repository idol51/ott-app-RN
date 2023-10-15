import { api } from "./axiosInstance";

export const getMovieDataApi = (id: number) => api.get(`/movie/${id}?language=en-US`);

export const getVideosApi = (id: number) => api.get(`/movie/${id}/videos?language=en-US`);

export const getCastApi = (id: number) => api.get(`/movie/${id}/credits?language=en-US`)

export const getSimilarApi = (id: number) => api.get(`/movie/${id}/similar?language=en-US&page=1`)
