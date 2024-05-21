import { AxiosError } from 'axios';
import serverAxios from './serverAxios';
import { HomeBannerAdType } from '../types/home/types';

/** home 페이지 광고 배너 이미지 목록 */
const getAds: () => Promise<HomeBannerAdType[]> = async () => {
	try {
		const res = await serverAxios.get('/api/v1/advertisements');
		return res.data.advertisements;
	} catch (error) {
		if (error instanceof AxiosError) {
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

export default getAds;
