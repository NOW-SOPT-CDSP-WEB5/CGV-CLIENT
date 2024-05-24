import { useState, useEffect } from 'react';
import MovieInfo from '../components/movie/MovieInfo';
import MoviePoster from '../components/movie/MoviePoster';
import TopBar from '../components/movie/TopBar';
import BottomBar from '../components/movie/BottomBar';
import MovieDetail from '../components/movie/MovieDetail';
import Footer from '../components/common/Footer';
import getDetail from '../apis/getDetail';

function Movie() {
	const [title, setTitle] = useState<string>('');
	const [script, setScript] = useState<string>('');

    const loadData = async (movieId: number) => {
        const res = await getDetail(movieId);
        setTitle(res.title);
		setScript(res.script)
    };

	useEffect(() => {
		loadData(3);
	}, []);
	return (
		<>
			<TopBar />
			<MoviePoster title={title}/>
			<MovieInfo script={script}/>
			<MovieDetail />
			<Footer />
			<BottomBar />
		</>
	);
}

export default Movie;
