import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/theme';
import Movie from './pages/Movie';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Movie />
		</ThemeProvider>
	);
}

export default App;
