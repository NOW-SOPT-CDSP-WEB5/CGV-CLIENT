import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Movie from './pages/Movie';
import Time from './pages/Time';

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/list" element={<List />} />
				<Route path="/movie/:id" element={<Movie />} />
				<Route path="/time" element={<Time />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
