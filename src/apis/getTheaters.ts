import { isAxiosError } from 'axios';
import serverAxios from './serverAxios';

/** time 페이지 영화관, 상영관 리스트 */
const getTheaters = async (movieId: number, cinemaId: number) => {
	try {
		const res = await serverAxios.get('/api/v1/theaters', {
			params: {
				movie: movieId,
				cinema: cinemaId,
			},
		});
		return res.data;
	} catch (error) {
		if (isAxiosError(error)) {
			const statusCode = error.response?.status;
			let errorMessage = 'error occurred';
			if (!statusCode) {
				errorMessage = 'Network error';
			} else if (statusCode >= 500) {
				errorMessage = 'Server error';
			} else if (statusCode === 400 || statusCode === 404) {
				errorMessage = '잘못된 요청';
			}
			throw new Error(errorMessage);
		} else {
			throw new Error('unknown error');
		}
	}
};

export default getTheaters;
