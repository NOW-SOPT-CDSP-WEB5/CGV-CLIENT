import { AxiosError } from "axios";
import serverAxios from "./serverAxios";
import { MoviePosterType } from "../types/movie/types";

const getDetail: () => Promise<MoviePosterType[]> = async() => {
    try {
        const res = await serverAxios.get(`/api/v1/movies/${movieId}`);
        return res.data.movies;
    } catch (error) {
        if (error instanceof AxiosError) {
            const statusCode = error.response?.status;
            let errorMessage = 'error occurred';

            if (!statusCode) {
                errorMessage = 'Network error';
            } else if (statusCode >= 500) {
                errorMessage = 'Server error';
            } else if (statusCode === 400 || statusCode === 404) {
                errorMessage = '잘못된 요청'
            }
            throw new Error(errorMessage);
        } else {
            throw new Error('unknown error');
        }
    }
}