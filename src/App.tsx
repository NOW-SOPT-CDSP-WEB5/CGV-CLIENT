import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/theme';
import Movie from './pages/Movie';
import BottomBar from './components/movie/BottomBar';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Movie />
			<BottomBar />
		</ThemeProvider>
	);
}

export default App;
