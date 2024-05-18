import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import theme from './styles/theme';
import GlobalFont from './styles/GlobalFont';
import Router from './Router';
import Footer from './components/common/Footer';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalFont />
			<GlobalStyles />
			<Router />
			<Footer/>
		</ThemeProvider>
	);
}

export default App;
