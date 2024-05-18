import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';
import List from './pages/List';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/movie" element={<Movie />} />
				<Route path="/list" element={<List />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
