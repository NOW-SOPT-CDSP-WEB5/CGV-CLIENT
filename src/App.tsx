import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/theme';
import GlobalFont from './styles/GlobalFont';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalFont />
			<GlobalStyles />
		</ThemeProvider>
	);
}

export default App;
