import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<p>sample</p>
		</ThemeProvider>
	);
}

export default App;
