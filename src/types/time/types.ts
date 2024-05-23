// 데이터 타입 선언
export interface TimeType {
	startAt: string;
	endAt: string;
	remainingSeats: number;
}

export interface TheaterType {
	theaterId: number;
	theaterName: string;
	maxSeats: number;
	theaterType: string;
	times: TimeType[];
}
