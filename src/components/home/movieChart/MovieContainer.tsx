import styled from 'styled-components';
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import movieListDummy from '../../../constants/list/movieListDummy';
import { MovieListType } from '../../../types/home/types';
import getMovieList from '../../../apis/getMovieList';

function MovieContainer() {
	const [movieList, setMovieList] = useState<MovieListType[]>([movieListDummy]);
	const getMovieCardData = async () => {
		const res = await getMovieList();
		setMovieList(res);
	};
	useEffect(() => {
		getMovieCardData();
	}, []);
	return (
		<MovieLayout>{movieList?.map((movie) => <MovieCard key={`${movie.name}movieChart`} movie={movie} />)}</MovieLayout>
	);
}
const MovieLayout = styled.div`
	display: flex;
	gap: 1rem;
	margin: 2.3rem 0;
	padding: 0 2rem;
	overflow-x: scroll;

	&::-webkit-scrollbar {
		visibility: hidden;
	}
`;

export default MovieContainer;
