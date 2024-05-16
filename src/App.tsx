import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/theme';
import GlobalFont from './styles/GlobalFont';
import Movie from './pages/Movie';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalFont />
			<GlobalStyles />
			<Movie />
		</ThemeProvider>
	);
}

export default App;
