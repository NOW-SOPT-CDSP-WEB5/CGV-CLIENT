import { isAxiosError } from 'axios';
import serverAxios from './serverAxios';

// 영화 예매 API 함수
const postMoviesTickets = async () => {
	try {
		const response = await serverAxios.post('/api/v1/movies/3/tickets', { theaterId: 1 });
		console.log('Response:', response.data);
		return response;
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

export default postMoviesTickets;
