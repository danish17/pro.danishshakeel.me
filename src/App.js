import { ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from '@apollo/client';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { useLayoutEffect } from 'react';

import { ErrorLink, onError } from '@apollo/client/link/error';

import { HomePage } from './pages/Home';
import { PublicationsPage } from './pages/Publications';
import { PortfolioPage } from './pages/Portfolio';
import { NotFoundPage } from './pages/NotFoundPage';

import { Box, Center } from '@chakra-ui/react';

import { Footer } from './components/footer/Footer.jsx';

import { Header } from './components/header/Header.jsx';

/**
 * Apollo Configuration
 */
 const errorLink = onError(({ graphQLErrors, networkError }) => {
	if (graphQLErrors) {
		graphQLErrors.map(({ message, locations, path }) =>
			console.warn(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
			),
		);
	}

	if (networkError) console.log(`[Network error]: ${networkError}`);
});

const link = from([
	errorLink,
	new HttpLink({
		uri: 'https://danishshakeel.me/graphql',
	})
]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});

/**
 * Scrolls to top of page on route change
 */
const CustomRouterWrapper = ({children}) => {
	const location = useLocation();
	useLayoutEffect(() => {
	  document.documentElement.scrollTo(0, 0);
	}, [location.pathname]);
	return children
} 

function App() {
  return (
	<BrowserRouter>
	<CustomRouterWrapper>
	<ApolloProvider client={client}>
    <div className="App">
	<Header />
		<Center>
		<Box maxW={"1100px"} w={"1100px"}>
			<Routes>
				<Route path='*' element={<NotFoundPage />}></Route>
				<Route path='/' element={<HomePage />} exact></Route>
				<Route path='/portfolio' element={<PortfolioPage />}></Route>
				<Route path='/publications' element={<PublicationsPage />}></Route>
			</Routes>
			<Footer />
		</Box>
		</Center>
	</div>
	</ApolloProvider>
	</CustomRouterWrapper>
	</BrowserRouter>
  );
}

export default App;
