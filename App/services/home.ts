import { api } from "./axiosInstance";

export const getNowPlayingApi = () => api.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`);

export const getPopularApi = () => api.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`);

export const getUpcomingApi = () => api.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`);

export const getTopRatedApi = () => api.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`);
